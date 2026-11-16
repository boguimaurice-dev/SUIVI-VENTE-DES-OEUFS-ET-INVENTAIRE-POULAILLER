// Vérification rapide de l'application (aucune dépendance) :
//   node scripts/check-app.mjs
// Contrôle : présence des fichiers attendus, JSON/JS valides, cohérence PWA
// (manifest, service worker, liens d'icônes) et absence de références cassées.
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (f) => readFileSync(join(root, f), "utf8");
const problems = [];
const ok = [];

// 1. Fichiers indispensables
const required = ["index.html", "manifest.json", "sw.js", "vercel.json", "icon-192.png", "icon-512.png"];
for (const f of required) {
  if (existsSync(join(root, f))) ok.push(`${f} présent`);
  else problems.push(`${f} manquant`);
}

// 2. JSON valides
for (const f of ["manifest.json", "vercel.json"]) {
  try {
    JSON.parse(read(f));
    ok.push(`${f} : JSON valide`);
  } catch (e) {
    problems.push(`${f} : JSON invalide (${e.message})`);
  }
}

// 3. JavaScript de la page valide
const html = read("index.html");
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
for (const [i, code] of scripts.entries()) {
  try {
    new Function(code);
    ok.push(`script #${i + 1} : syntaxe valide`);
  } catch (e) {
    problems.push(`script #${i + 1} : erreur de syntaxe (${e.message})`);
  }
}

// 4. Cohérence PWA
const manifest = JSON.parse(read("manifest.json"));
if (manifest.start_url && !manifest.start_url.includes("Poulailler-Ste-Marie.html")) ok.push("manifest : start_url à jour");
for (const icon of manifest.icons || []) {
  if (!existsSync(join(root, icon.src))) problems.push(`manifest : icône absente (${icon.src})`);
}
const sw = read("sw.js");
for (const asset of ["index.html", "manifest.json", "icon-192.png", "icon-512.png"]) {
  if (!sw.includes(asset)) problems.push(`sw.js : ${asset} non précaché`);
}
if (manifest.start_url && sw.includes("Poulailler-Ste-Marie.html")) problems.push("sw.js référence encore l'ancien fichier Poulailler-Ste-Marie.html");
if (html.includes('href="manifest.json"')) ok.push("index.html : manifest lié");

// 5. Références locales cassées
const refs = new Set([...html.matchAll(/(?:src|href)="\.?\/?([^"#:?]+\.(?:png|js|json|css|webmanifest))"/g)].map((m) => m[1]));
for (const ref of refs) {
  if (!existsSync(join(root, ref))) problems.push(`référence locale cassée dans index.html : ${ref}`);
}

// 6. Réglages Vercel cohérents
const vercel = JSON.parse(read("vercel.json"));
for (const r of vercel.rewrites || []) {
  if (r.destination && !existsSync(join(root, r.destination.replace(/^\//, "")))) {
    problems.push(`vercel.json : destination inexistante ${r.destination}`);
  }
}

console.log(ok.map((l) => `  ✓ ${l}`).join("\n"));
if (problems.length) {
  console.error("\n" + problems.map((l) => `  ✗ ${l}`).join("\n"));
  process.exit(1);
}
console.log(`\n✅ Aucun problème détecté (${ok.length} contrôles).`);
