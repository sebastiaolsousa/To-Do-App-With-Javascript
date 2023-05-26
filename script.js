var divlist = document.getElementById("list-creation");

function createlist() {
  var listname = document.getElementById("listname").value;
  if (listname === '') {
    window.alert('Your List Needs a Name')
  } else {
    var h1listname = document.createElement("h1");
    var textlistname = document.createTextNode(listname);
    h1listname.appendChild(textlistname);
  
    var mainlist = document.querySelector("main");
    divlist.innerHTML = "";
    divlist.appendChild(h1listname);
    divlist.classList.add("expanded");
    mainlist.classList.add("expanded");
  
    addactivity();
  }
}

function addactivity(){
  var inputactivity = document.createElement("input");
  inputactivity.type = "text";
  inputactivity.classList.add("expanded");
  inputactivity.id = "activity";
  inputactivity.maxLength = "33";
  inputactivity.placeholder = "Write your activity...";

  var buttonactivity = document.createElement("button");
  buttonactivity.textContent = "To-Do";
  buttonactivity.addEventListener("click", function() {
    if (inputactivity.value === '') {
      window.alert('Your Activity Needs a Name');
    } else {
      insertactivity();
      inputactivity.value = '';
    }
  });
  buttonactivity.classList.add("expanded");

  divlist.appendChild(inputactivity);
  divlist.appendChild(buttonactivity);
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
  divlist.innerHTML = "";

  divlist.classList.remove("expanded");
  var mainlist = document.querySelector("main");
  mainlist.classList.remove("expanded");

  var input = document.createElement("input");
  input.type = "text";
  input.name = "listname";
  input.id = "listname";
  input.placeholder = "Name your list...";
  input.maxLength = 20;

  var button = document.createElement("button");
  button.textContent = "Create List";
  button.addEventListener("click", function() {
    createlist();
  });
  button.style.marginLeft = "4px"

  divlist.appendChild(input);
  divlist.appendChild(button);
}
function print(){
  var clonedDiv = divlist.cloneNode(true);

  var inputElements = clonedDiv.querySelectorAll("input[type='text'], button");
  inputElements.forEach(function(element) {
    element.parentNode.removeChild(element);
  });

  var divcontent = clonedDiv.innerHTML;
  var printWindow = window.open('', '', 'height=500,width=500');
  printWindow.document.write('<html><head><title>Print</title></head><body>');
  printWindow.document.write(divcontent);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}