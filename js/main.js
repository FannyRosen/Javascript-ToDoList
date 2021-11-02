window.onload = function () {
  createList();
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
