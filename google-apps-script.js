// ===== GOOGLE APPS SCRIPT - Incolla questo in Apps Script =====
// Estensioni > Apps Script > incolla > Salva > Deploy

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString('it-CH'),  // Data richiesta
      data.furgone || '',                   // Furgone
      data.dataRitiro || '',                // Data ritiro
      data.dataRiconsegna || '',            // Data riconsegna
      data.oraRitiro || '',                 // Ora ritiro
      data.oraRiconsegna || '',             // Ora riconsegna
      data.giorni || '',                    // Giorni
      data.totale || '',                    // Totale
      data.nome || '',                      // Nome
      data.nascita || '',                   // Nascita
      data.nazionalita || '',               // Nazionalita
      data.indirizzo || '',                 // Indirizzo
      data.telefono || '',                  // Telefono
      data.email || '',                     // Email
      data.documento || '',                 // Documento
      data.patente || '',                   // Patente
      data.note || '',                      // Note
      'Da confermare'                       // Stato
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
