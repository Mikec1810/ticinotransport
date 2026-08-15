# Gestionale — versione personalizzabile

Base della futura versione in abbonamento. Parte dal gestionale v10.47 de L'Aperitivo Events,
con i cataloghi resi modificabili dall'app e il modulo Staff che prima mancava.

**Il comportamento per chi non tocca nulla è identico a prima**: i valori de L'Aperitivo Events
sono il profilo iniziale. Verificato confrontando il riepilogo costi di un preventivo
(3 mezzi, 120 ospiti, 45 km, staff) fra la versione originale e questa: identico carattere
per carattere, 39 valori numerici.

---

## ⚠️ Prima di unire questo ramo a `main`

Il repository pubblica `main` su GitHub Pages. **Unendo questa cartella a `main`, il gestionale
diventerebbe raggiungibile da chiunque conosca l'indirizzo** — e con esso i listini fornitori,
i costi di acquisto, i margini e le tariffe orarie, che stanno nel sorgente in chiaro.

I *dati* (eventi, clienti, preventivi) restano protetti dal login Firebase. I *listini* no.

Prima di pubblicare: spostare il gestionale in un repository privato, oppure servirlo da un
dominio separato non gestito da Pages. Finché resta su questo ramo, non è pubblicato.

---

## Cosa è cambiato

### 1. I cataloghi non sono più scritti nel codice

Ventiquattro costanti sono passate da valori fissi a elenchi modificabili:

| Cataloghi | Parametri di calcolo |
|---|---|
| Mezzi, Ruoli staff, Categorie menu, Menu | Grammature carne, Profili ospiti |
| Cocktail, Vini, Bibite | Grammature per categoria, Target evento |
| Monouso, Stoviglie | Pizze a persona, Fusti cocktail e birra |
| Catalogo magazzino, Inventario flotta | Prezzi base mezzi, Ore incluse, Sconto massimo |

Si modificano da **Impostazioni → Cataloghi**. Ogni elenco ha un tasto *Ripristina* che
riporta al profilo iniziale.

Come funziona: ogni elenco passa da `cfgList()` / `cfgMap()` / `cfgObj()`, che restituisce
l'elenco personalizzato se esiste, altrimenti quello scritto nel codice. Gli array vengono
**mutati in place** quando cambiano, così tutte le funzioni che già li usano vedono i nuovi
dati senza ricaricare la pagina.

Salvataggio: `localStorage` (immediato) + Firebase su `config/json` (condiviso fra dispositivi
e collaboratori). Viaggia come stringa JSON perché il Realtime Database cancella le chiavi
con valore `null` — es. `menuCat:null` sui mezzi bar.

### 2. Identità dell'azienda

**Impostazioni → Identità dell'azienda**: nome, sottotitolo, logo, tre colori del tema, valuta e
IVA predefinita. I colori riscrivono le variabili CSS `--or` / `--orl` / `--ord`, quindi cambiano
tutta l'interfaccia.

Cambiare valuta **non converte** i prezzi già inseriti: vanno rivisti a mano. È scritto anche
nell'interfaccia.

### 3. Moduli attivabili

**Impostazioni → Moduli attivi**. Sempre presenti: dashboard, eventi, preventivi, clienti, note,
impostazioni. Spegnibili: mezzi, staff, comunicazioni, magazzino, studio, analisi flotta.

Serve alla scelta "nucleo comune + moduli": un'azienda senza mezzi propri spegne
mezzi/magazzino/flotta e tiene eventi, clienti, preventivi, contratti, staff e calendario.

### 4. Modulo Staff (nuovo)

Prima il personale era una casella di testo libera. Ora:

- **Anagrafica** — nome, contatti, ruoli coperti, costo orario e tariffa di vendita, tipo di
  rapporto, note. Chi non ha tariffe proprie eredita quelle del ruolo.
- **Assegnazione all'evento** — tab Personale del modal evento: chi lavora, con quale ruolo,
  ore previste e ore effettive.
- **Costo previsto contro costo reale** — calcolato mentre assegni, con lo scarto in evidenza.
  Il tasto *Calcola dalla squadra assegnata* lo riporta nel consuntivo.
- **Conflitti** — chi è assegnato a due eventi nello stesso giorno è segnalato in rosso, sia
  nell'agenda staff sia al momento dell'assegnazione.
- **Agenda 30 giorni** — chi lavora e quando.
- **Foglio di convocazione** — messaggio WhatsApp con luogo, orario, squadra, divisa e mansioni.
- **Copertura ruoli** — avvisa quali ruoli non ha nessuno in forza.

Dati su Firebase in `staff/`. La casella di testo libera resta, per le note che non stanno
nell'anagrafica.

### 5. Backup

Esportazione e importazione ora includono anche staff e personalizzazione (versione `v11`).
I backup vecchi (`v10`) si importano lo stesso: le chiavi mancanti vengono ignorate.

---

## Verifiche eseguite

Test nel browser (Chromium, Firebase simulato in memoria):

- gli 11 cataloghi si caricano con le voci attese (7 mezzi, 7 ruoli, 31 vini, 171 voci di menu…);
- modificare un mezzo si riflette subito nella sezione Veicoli — la mutazione in place funziona;
- il ripristino riporta ai valori iniziali;
- spegnere un modulo nasconde la voce di navigazione, riaccenderlo la rimette;
- cambiare colore aggiorna la variabile CSS e il nome compare nell'intestazione;
- creazione di due persone, una con tariffe proprie e una che eredita dal ruolo: costo previsto
  CHF 220, fatturabile CHF 320, con 2 ore in più su una persona il costo reale sale a CHF 280
  (+CHF 60), riportato nel consuntivo;
- stessa persona su due eventi nello stesso giorno: conflitto segnalato;
- nessun errore JavaScript oltre a quelli di rete attesi.

Riprodurre i test: gli script stanno in `scratchpad/` della sessione (`test.mjs`,
`regressione.mjs`, `fb-stub.js`) — vanno serviti via HTTP, non aperti da `file://`, perché
il modulo ES non carica altrimenti.

---

## Cosa manca ancora per venderlo

Questa è la tappa 1+2 del piano. Restano aperte, in ordine:

1. **Separazione dei dati fra aziende.** Oggi i percorsi Firebase sono in radice
   (`events`, `preventivi`, `staff`, `config`). Vanno spostati sotto lo spazio dell'azienda,
   con regole di sicurezza che impediscano a un'azienda di leggere i dati di un'altra.
   Finché non è fatto, **non si può iscrivere un secondo cliente**.
2. **Registrazione, ruoli interni e inviti** ai collaboratori.
3. **Abbonamento e pagamenti**, con limiti di piano.
4. **Il PIN della sezione Flotta è controllato nel browser**: chiunque apra il sorgente lo legge.
   Va sostituito con un permesso vero lato regole.
5. **Interfaccia multilingua.** Oggi le traduzioni coprono solo preventivo e contratto (IT/EN).
6. **Conversione valuta e IVA per paese**, con modelli di contratto per giurisdizione.
