# 🐓 Avicola SaaS / Poulailler Sainte-Marie — Suivi de Vente des Œufs & Inventaire Avicole

Application web SaaS moderne, progressive (PWA) et **100% Hors-Ligne** conçue pour l'élevage avicole de pondeuses en Afrique de l'Ouest, développée sur le terrain avec les moines du **Monastère Bénédictin Sainte-Marie de Bouaké** (Côte d'Ivoire).

🔗 **Application en Ligne (Vercel Production) :** [https://suivi-vente-des-oeufs-poulailler-omega.vercel.app](https://suivi-vente-des-oeufs-poulailler-omega.vercel.app)  
📦 **Dépôt GitHub :** [https://github.com/boguimaurice-dev/SUIVI-VENTE-DES-OEUFS-ET-INVENTAIRE-POULAILLER](https://github.com/boguimaurice-dev/SUIVI-VENTE-DES-OEUFS-ET-INVENTAIRE-POULAILLER)

---

## 🌟 Fonctionnalités Clés

1. **📊 Suivi Zootechnique & Cahier Poulailler :**
   - Suivi complet de la ponte dès l'entrée en ponte jusqu'à la réforme (semaines 18 à 80+).
   - Données certifiées Bâtiment G (souche ISA Brown, SIPRA).
   - Calculs automatisés : taux de ponte journalier/hebdo, effectif restant, cumuls d'œufs commercialisables, ratios de conversion alimentaire (IC), mortalités et tri d'éliminés.
   - Comparaison visuelle automatique avec les standards officiels de ponte ISA Brown.

2. **🧾 Facturation & Reçus Professionnels :**
   - Bascule 1-clic : **Grand Facturier A4** ou **Ticket Thermique 80 mm** (imprimantes POS portables de caisse).
   - Conversion automatique des montants en toutes lettres en français (*« Cinquante mille Francs CFA »*).
   - Partage direct sur **WhatsApp** et impression optimisée sans artefact.

3. **👥 CRM Clients & Fournisseurs :**
   - Fiches partenaires avec suivi des créances, encaissements et soldes débiteurs/créditeurs.
   - Appels directs (`tel:`) et relances d'impayés WhatsApp en 1-clic.
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
   - Service Worker avec cache intégral pour un fonctionnement autonome sans internet ni unités mobiles.

---

## 💎 Modèle Commercial SaaS & Tarification

Avicola SaaS propose un modèle adapté aux réalités des éleveurs ouest-africains :

| Formule | Tarif FCFA | Tarif USD | Fonctionnalités Clés |
| :--- | :--- | :--- | :--- |
| **Plan Découverte (Freemium)** | **0 FCFA** | $0 / Gratuit à vie | 1 bâtiment, jusqu'à 500 poules, saisie quotidienne, calculs de ponte automatiques, factures standard. |
| **Éleveur Pro (SaaS)** | **6 500 FCFA / mois** *(ou 60 000 FCFA/an)* | **10 $ / mois** | Bâtiments illimités, jusqu'à 50 000 poules, Frère Célestin vocal illimité, tickets 80 mm POS, WhatsApp 1-clic, Saisie Photo décalquée, standards ISA Brown, CRM complet. |
| **Coopérative & Agro-Industrie** | **22 500 FCFA / mois** | $35 / mois | Multi-sites, multi-utilisateurs (gérant, vétérinaire, ouvrier), agrégation globale, assistance zootechnique prioritaire 7j/7. |

### Modes de Paiement Supportés
- 🌊 **Wave** (Côte d'Ivoire, Sénégal)
- 🟠 **Orange Money**
- 🟡 **MTN MoMo**
- 🟢 **Moov Money**
- 💳 **Cartes Bancaires Visa & Mastercard**

---

## 🔒 Confidentialité & Isolation Multi-Utilisateurs (Local-First)

### Comment mes données sont-elles protégées ?
- **Architecture Local-First :** L'application fonctionne directement dans le navigateur du client. Toutes les données saisies (caisse, ventes, créances, cheptel) sont sauvegardées dans le `localStorage` du terminal de l'éleveur.
- **Isolation Totale entre Visiteurs :** Si vous partagez l'URL publique avec un tiers, ce dernier ne peut ni voir votre comptabilité ni modifier vos fiches. Il dispose de son propre environnement isolé.
- **Bascule d'Espace (Multi-Tenancy) :**
  - **🏛️ Démo Certifiée Sainte-Marie :** Données de référence ISA Brown du Bâtiment G (16 000 pondeuses).
  - **🚜 Élevage Privé :** Espace indépendant pour votre propre exploitation.
- **Verrouillage par Code PIN :** Possibilité de configurer un code à 4 chiffres dans les Paramètres pour bloquer l'accès aux personnes non autorisées manipulant le téléphone de l'exploitation.

---

## 🚀 Déploiement

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
