# Changelog

Inhoudelijke wijzigingen aan protocollen, oefeningen en bronnen.
Formaat per regel: wat · waarom · bron.

## 2026-09-05

- `data/references.yaml` aangelegd · centrale bronnenlijst verplicht volgens CLAUDE.md §4 · zeven bronnen live opgehaald en geverifieerd via PubMed
- `data/claims/acl.yaml` aangelegd · audit-trail claim naar bron voor het ACL-protocol (§3 fase C) · twaalf claims beoordeeld
- `data/terminologie.yaml` aangelegd · consistente terminologie verplicht volgens §5.3 · nog te bevestigen keuzes gemarkeerd
- `scripts/validate-references.js` toegevoegd · validatie verplicht vóór elke oplevering volgens §4 · controleert verplichte velden, DOI/PMID, onbekende en ongebruikte sleutels
- Bevinding: vier van de twaalf ACL-claims zijn gedekt, één deels, zeven niet · zie `data/claims/acl.yaml` · protocolinhoud nog niet aangepast, wacht op beoordeling door de kinesitherapeut
- Fase B uitgevoerd door een onafhankelijke verificator met schone context · verplicht volgens CLAUDE.md §3 · zeven correcties op fase A: `acl_c04` van gedekt naar niet gedekt (bron hanteert >90 op vier tests, verschil niet significant p=0,075), `acl_c07` overdrijving verwijderd (geen significant krachtverschil tussen groepen), `acl_c08` aantallen gecorrigeerd naar 24 geanalyseerd en graftbeperking toegevoegd, `acl_c09` van niet gedekt naar gedekt onder de juiste bron, `acl_c10` en `acl_c11` motivering feitelijk gecorrigeerd, `rice_2010_ami` jaartal 2009 naar 2010 en type SR naar expert
- `buckthorpe_2021_plyometrie` toegevoegd · dekt het vierstadia-plyometrieprogramma · Int J Sports Phys Ther 2021;16(3):879-895, PMID 34123540
- `hughes_2019_bfr_pijn` en `webster_2022_aclrsi_adolescent` verwijderd · werden door geen enkele claim gebruikt, wat het validatiescript volgens §4 doet falen
