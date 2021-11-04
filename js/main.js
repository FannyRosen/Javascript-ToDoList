window.onload = function () {
  createList();
  addToDos();
};
//global variabel
let ul = document.createElement("ul");
ul.id = "list";

function createList() {
  let createList = [
    "Buy ticket",
    "Book hotel",
    "Feed cat",
    "Send email",
    "Make appointment",
    "Water plant",
  ];

  for (let i = 0; i < createList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = createList[i];
    ul.appendChild(li);
  }
  document.getElementById("listContainer").appendChild(ul);
}

function addToDos() {
  let addToDoButton = document.getElementById("addToDo");
  let inputField = document.getElementById("addItem");

  addToDoButton.addEventListener("click", function () {
    let newToDo = document.createElement("li");
    newToDo.innerHTML = inputField.value;
    ul.appendChild(newToDo);
  });
}
