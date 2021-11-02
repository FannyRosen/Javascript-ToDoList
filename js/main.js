window.onload = function () {
  createList();
  addToDos();
};

function createList() {
  let createList = [
    "Buy ticket",
    "Book hotel",
    "Feed cat",
    "Send email",
    "Make appointment",
    "Water plant",
  ];
  let ul = document.createElement("ul");
  ul.id = "list";

  for (let i = 0; i < createList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = createList[i];
    ul.appendChild(li);
  }
  document.getElementById("listContainer").appendChild(ul);
}

function addToDos() {
  let addToDoButton = document.getElementById("addToDo");
  let toDoContainer = document.getElementById("toDoContainer");
  let inputField = document.getElementById("addItem");

  addToDoButton.addEventListener("click", function () {
    let newToDo = document.createElement("p");
    newToDo.innerHTML = inputField.value;
    toDoContainer.appendChild(newToDo);
  });
}
