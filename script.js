// Esta função converte um objeto JSON em uma string CSV.
function toCSV(json) {
    // Cria um array vazio.
    var csv = [];
  
    // Percorre as chaves do objeto JSON.
    for (var key in json) {
      // Adiciona a chave e o valor do objeto JSON ao array.
      csv.push(key + "," + json[key]);
    }
  
    // Junta os elementos do array com uma nova linha.
    return csv.join("\n");
  }
  
  // Esta função converte uma string CSV em um objeto JSON.
  function toJSON(csv) {
    // Cria um objeto vazio.
    var json = {};
  
    // Divide a string CSV em linhas.
    csv.split("\n").forEach(function(row) {
      // Obtém a chave e o valor da linha.
      var key = row.split(",")[0];
      var value = row.split(",")[1];
  
      // Adiciona a chave e o valor ao objeto JSON.
      json[key] = value;
    });
  
    // Devolve o objeto JSON.
    return json;
  }
  
  // Quando o botão "to-csv" é clicado, esta função é chamada.
  document.getElementById("to-csv").addEventListener("click", function() {
    // Obtém o texto da caixa de texto "json".
    var json = document.getElementById("json").value;
  
    // Converte o objeto JSON em uma string CSV.
    var csv = toCSV(json);
  
    // Define o valor da caixa de texto "csv" para a string CSV.
    document.getElementById("csv").value = csv;
  });
  
  // Quando o botão "to-json" é clicado, esta função é chamada.
  document.getElementById("to-json").addEventListener("click", function() {
    // Obtém o texto da caixa de texto "csv".
    var csv = document.getElementById("csv").value;
  
    // Converte a string CSV em um objeto JSON.
    var json = toJSON(csv);
  
    // Define o valor da caixa de texto "json" para o objeto JSON.
    document.getElementById("json").value = json;
  });