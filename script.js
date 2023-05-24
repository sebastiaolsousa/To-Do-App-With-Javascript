function createlist() {
    var listname = document.getElementById("listname").value;
  
    // Transforma a variável em um elemento h1
    var h1Element = document.createElement("h1");
    var textNode = document.createTextNode(listname);
    h1Element.appendChild(textNode);
  
    // Obtém a div com o ID "list-creation"
    var divElement = document.getElementById("list-creation");
  
    // Substitui o conteúdo da div pelo h1
    divElement.innerHTML = "";
    divElement.appendChild(h1Element);
  }

function clean(){
    
}

function print(){
    
}