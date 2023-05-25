function createlist() {
    var listname = document.getElementById("listname").value;
  
    var h1listname = document.createElement("h1");
    var textlistname = document.createTextNode(listname);
    h1listname.appendChild(textlistname);
  
    var divlist = document.getElementById("list-creation");
    var mainlist = document.querySelector("main");
    divlist.innerHTML = "";
    divlist.appendChild(h1listname);
    divlist.classList.add("expanded")
    mainlist.classList.add("expanded")
    
    

    //var todoparagraph = document.createElement("input:checkbox")
  }

function addactivity(){
  var inputactivity = document.createElement("input")
  inputactivity.type = "text"

  var buttonactivity = document.createElement("button")
  buttonactivity.textContent = "Create"
  buttonactivity.addEventListener("click", function() {
    addactivity();
  })
}

function clean(){
    
}

function print(){
    
}