# Changelog

Inhoudelijke wijzigingen aan protocollen, oefeningen en bronnen.
Formaat per regel: wat · waarom · bron.

## 2026-09-05

- `data/references.yaml` aangelegd · centrale bronnenlijst verplicht volgens CLAUDE.md §4 · zeven bronnen live opgehaald en geverifieerd via PubMed
- `data/claims/acl.yaml` aangelegd · audit-trail claim naar bron voor het ACL-protocol (§3 fase C) · twaalf claims beoordeeld
- `data/terminologie.yaml` aangelegd · consistente terminologie verplicht volgens §5.3 · nog te bevestigen keuzes gemarkeerd
- `scripts/validate-references.js` toegevoegd · validatie verplicht vóór elke oplevering volgens §4 · controleert verplichte velden, DOI/PMID, onbekende en ongebruikte sleutels
- Bevinding: zeven van de twaalf ACL-claims zijn niet of slechts deels gedekt door de opgegeven bron · zie `data/claims/acl.yaml` · protocolinhoud nog niet aangepast, wacht op beoordeling door de kinesitherapeut
