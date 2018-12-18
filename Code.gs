function onOpen() {
    DocumentApp.getUi()
        .createMenu('Dialog')
        .addItem('Open', 'openDialog')
        .addToUi();
  }
  
  function openDialog() {
    var html = HtmlService.createHtmlOutputFromFile('Index');
    DocumentApp.getUi()
        .showModalDialog(html, 'Stock Photos');
  }
  
  function insertImage(url) {
    var blob = UrlFetchApp.fetch(url).getBlob();
  
    var doc = DocumentApp.getActiveDocument();
    var cursor = doc.getCursor();
    
    if (cursor) {    
        cursor.insertInlineImage(blob);
    } else {
        doc.getBody().insertImage(0, blob);
    }
}