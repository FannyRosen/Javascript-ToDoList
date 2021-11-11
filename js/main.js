//Skapar upp en klass(mall) där constructor har två parametrar.
class ToDo {
  constructor(task, completed) {
    this.task = task;
    this.completed = completed;
  }
}
//När sidan öppnas, kör funktionen createList och lyssna efter klick.
window.onload = function () {
  createList();
  let addToDoButton = document.getElementById("addToDo");
  addToDoButton.addEventListener("click", addToDos);
};

//Skapar upp nya objekt med två värden,1 string och en boolean.
let t = new ToDo("Buy ticket", false);
let t2 = new ToDo("Book hotel", false);
let t3 = new ToDo("Feed cat", false);
let t4 = new ToDo("Send email", false);
let t5 = new ToDo("Make appointment", false);
let t6 = new ToDo("Water plant", false);

//Skapar en array(lista) med objekt.
let toDos = [t, t2, t3, t4, t5, t6];

//Hämtar divelementet listcontainer, tömmer befintliga listan och skapar upp en ul-lista i DOM:en.
function createList() {
  //Tömmer det som presenteras i DOM.
  document.getElementById("listContainer").innerHTML = "";
  //Skapar ny ul som senare kommer läggas in i listContainer.
  let ul = document.createElement("ul");
  ul.id = "list";

  //Loopar igenom listan med objekt och skapar upp li element[0-5],lyssnar efter klick.
  for (let i = 0; i < toDos.length; i++) {
    //Skapar nytt li element för varje plats i listan
    let li = document.createElement("li");
    li.innerHTML = toDos[i].task;
    li.addEventListener("click", () => {
      handleClick(i);
    });
    //Om completed är true, lägg till klass som sätter stil.
    if (toDos[i].completed) {
      li.className = "markeddone";
      console.log(toDos);
    }
    //Skriver ut barnet till föräldern.
    ul.appendChild(li);
    //Skapar en knapp med inner html och tilldelar id.
    let button = document.createElement("button");
    button.innerHTML = "x";
    button.id = "remove";
    //Lyssnar efter klick på button. Vid klick, kör funktionen removeItem(skickar med event?)
    button.addEventListener("click", () => {
      removeItem(i);
    });

    li.appendChild(button);
  }
  //Lägg ut fullständiga "nya" lista.
  document.getElementById("listContainer").appendChild(ul);
}
//Tar bort i(platsen vi är nu i listan), 1 steg framåt.
function removeItem(i) {
  toDos.splice(i, 1);
  //Anropar createlist igen då en förändring i listan har skett.
  createList();
}
function handleClick(i) {
  console.log("Klickade!");
  //1. Hitta det i:et objektet i listan
  //2. Ändra completed på objektet till true
  //3. Anropa createList-funktionen
  toDos[i].completed = !toDos[i].completed;
  console.log(toDos);
  createList();
}
//Funktion som lägger till nya objekt i listan.
function addToDos() {
  let inputField = document.getElementById("addItem");
  //Skapar variabel som är ett nytt objekt,värdet som användaren skriver in och boolean.
  let newToDo = new ToDo(inputField.value, false);
  //Lägger till det nya objektet i listan.
  toDos.push(newToDo);
  //Så inputrutan bli tom.
  document.getElementById("addItem").value = "";
  //Anropar createList då vi har ett nytt objekt i listan.
  createList();
}
