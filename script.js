var divlist = document.getElementById("list-creation");

function createlist() {
    var listname = document.getElementById("listname").value;
  
    var h1listname = document.createElement("h1");
    var textlistname = document.createTextNode(listname);
    h1listname.appendChild(textlistname);
  
    var mainlist = document.querySelector("main");
    divlist.innerHTML = "";
    divlist.appendChild(h1listname);
    divlist.classList.add("expanded")
    mainlist.classList.add("expanded")

    addactivity();

  }

function addactivity(){
  var inputactivity = document.createElement("input")
  inputactivity.type = "text"
  inputactivity.classList.add("expanded")
  inputactivity.id = "activity"

  var buttonactivity = document.createElement("button")
  buttonactivity.textContent = "To-Do"
  buttonactivity.addEventListener("click", function() {
    insertactivity();
  })
  buttonactivity.classList.add("expanded")

  divlist.appendChild(inputactivity)
  divlist.appendChild(buttonactivity) 
}

function insertactivity() {
  var inputactivity = document.getElementById("activity");
  var activityText = inputactivity.value;

  var paragraph = document.createElement("p");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  var textNode = document.createTextNode(activityText);
  paragraph.appendChild(checkbox);
  paragraph.appendChild(textNode);


  checkbox.addEventListener("change", function() {
    if (this.checked) {
      paragraph.style.textDecoration = "line-through";
      paragraph.style.color = "gray";
    } else {
      paragraph.style.textDecoration = "none";
      paragraph.style.color = "black";
    }
  });

  var divActivities = document.createElement("div");
  divActivities.appendChild(paragraph);
  divlist.appendChild(divActivities);
}

function clean() {
  // Limpar o conteúdo da divlist
  divlist.innerHTML = "";

  // Remove as classes "expanded" das divs
  divlist.classList.remove("expanded");
  var mainlist = document.querySelector("main");
  mainlist.classList.remove("expanded");

  // Criar um novo input type text
  var input = document.createElement("input");
  input.type = "text";
  input.name = "listname";
  input.id = "listname";
  input.placeholder = "Name your list...";
  input.maxLength = 20;

  // Criar um novo botão
  var button = document.createElement("button");
  button.textContent = "Create List";
  button.addEventListener("click", function() {
    createlist();
  });
  button.style.marginLeft = "4px"

  // Adicionar o novo input e botão à divlist
  divlist.appendChild(input);
  divlist.appendChild(button);
}
function print(){
    
}