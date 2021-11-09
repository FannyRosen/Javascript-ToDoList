class ToDo {
  constructor(task, completed) {
    this.task = task;
    this.completed = completed;
  }
}

window.onload = function () {
  createList();
  let addToDoButton = document.getElementById("addToDo");
  addToDoButton.addEventListener("click", addToDos);
};

let t = new ToDo("Buy ticket", false);
let t2 = new ToDo("Book hotel", false);
let t3 = new ToDo("Feed cat", false);
let t4 = new ToDo("Send email", false);
let t5 = new ToDo("Make appointment", false);
let t6 = new ToDo("Water plant", false);

let toDos = [t, t2, t3, t4, t5, t6];

function createList() {
  document.getElementById("listContainer").innerHTML = "";
  let ul = document.createElement("ul");
  ul.id = "list";

  for (let i = 0; i < toDos.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = toDos[i].task;
    li.addEventListener("click", () => {
      handleClick(i);
    });

    if (toDos[i].completed) {
      li.className = "markeddone";
    }

    ul.appendChild(li);

    let button = document.createElement("button");
    button.innerHTML = "x";
    button.id = "remove";
    button.addEventListener("click", () => {
      removeItem(i);
    });

    li.appendChild(button);
  }
  document.getElementById("listContainer").appendChild(ul);
}
function removeItem(i) {
  toDos.splice(i, 1);

  createList();
}

function handleClick(i) {
  console.log("Klickade!");
  //1. Hitta det i:te objektet i listan
  //2. Ändra completed på objektet till true
  //3. Anropa createList-funktionen
  toDos[i].completed = !toDos[i].completed;
  console.log(toDos);
  createList();
}

function addToDos() {
  let inputField = document.getElementById("addItem");
  let newToDo = new ToDo(inputField.value, false);
  toDos.push(newToDo);

  document.getElementById("addItem").value = "";

  createList();
}

// let newToDo = document.createElement("li");
// newToDo.innerHTML = inputField.value;
// ul.appendChild(newToDo);
// inputField.value = "";
// newToDo.addEventListener("click", function () {
//   newToDo.style.textDecoration = "line-through";
// });
// newToDo.addEventListener("dblclick", function () {
//   itemContainer.removeChild(newToDo);
// });
