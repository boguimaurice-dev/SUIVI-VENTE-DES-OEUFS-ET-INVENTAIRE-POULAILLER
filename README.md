# 🐓 Poulailler Sainte-Marie — Suivi de Vente des Œufs & Inventaire Avicole

Application web moderne, progressive (PWA) et **100% Hors-Ligne** conçue pour l'élevage avicole de pondeuses (Monastère Bénédictin Sainte-Marie de Bouaké, Côte d'Ivoire).

## 🌟 Fonctionnalités Clés

1. **📊 Suivi Zootechnique & Cahier Poulailler :**
   - Suivi complet de la ponte jusqu'à la réforme (semaines 18 à 80).
   - Données certifiées Bâtiment G (souche ISA Brown, SIPRA).
   - Calculs automatisés : taux de ponte journalier/hebdo, effectif restant, cumuls d'œufs commercialisables, ratios de conversion alimentaire (IC), mortalités.
   - Comparaison automatique avec la courbe standard ISA Brown.

2. **🧾 Facturation & Reçus Professionnels :**
   - Bascule 1-clic : **Grand Facturier A4** ou **Ticket Thermique 80 mm** (imprimantes POS portables).
   - Conversion automatique des montants en toutes lettres en français (ex: *« Cinquante mille Francs CFA »*).
   - Partage direct sur **WhatsApp** et impression optimisée sans artefact.

3. **👥 CRM Clients & Fournisseurs :**
   - Fiches partenaires avec suivi des soldes débiteurs/créditeurs et créances en cours.
   - Appels directs (`tel:`) et relances WhatsApp en 1-clic.
   - Synchronisation W3C Contact Picker API (répertoire téléphone), import/export **vCard (.vcf)** et **CSV**.

4. **🛡️ Espace Administrateur & Importation :**
   - **Saisie Photo Assistée (double écran)** : calquez vos fiches papier avec zoom et rotation à gauche tout en saisissant dans la grille 7 jours à droite.
   - Importateur intelligent Markdown / CSV pour intégrer les fiches d'autres bâtiments depuis août 2026.
   - Générateur de gabarits vierges (S21 à S28) et sauvegarde/restauration JSON 100% locale.

5. **🎙️ Frère Célestin — Assistant Vocal Avicole Avancé :**
   - Reconnaissance et synthèse vocale locales (**0 Mo consommé, 0 crédit requis**).
   - Audio procédural Web Audio API sans aucun fichier MP3 externe.
   - Panneau conversationnel repositionnable librement à l'écran (draggable) et fermeture 1-clic dans le vide.
   - Diagnostic zootechnique et vétérinaire d'urgence (fientes, chute de ponte, picage, rations).

6. **📱 PWA & 100% Hors-Ligne :**
   - Installable sur smartphone Android, iPhone et PC comme une application native.
   - Service Worker avec cache intégral pour un fonctionnement autonome sans internet.

## 🚀 Déploiement

### Déploiement sur Vercel
Ce projet est un site statique sans build complexe requis :
- **Fichier d'entrée :** `index.html` (ou `Poulailler-Ste-Marie.html`)
- **Configuration :** `vercel.json` inclus
- **Framework Preset :** Other / Static

```bash
# Déploiement via le CLI Vercel
vercel --prod
```

## 📄 Licence
Tous droits réservés — Monastère Bénédictin Sainte-Marie de Bouaké.
