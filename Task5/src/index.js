// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  finishedList = document.querySelector(".js-finishedList");

const TODOS_LS = "pending";
const FINISHED = "Finished";
let toDos = [];
let Finishedd = [];

function addToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    if (toDo.id === parseInt(li.id)) {
      paintFinished(toDo.text);
    }

    return toDo.id !== parseInt(li.id);
  });

  toDos = cleanToDos;

  saveToDos();
  saveFINISHED();
  //paintFinished(li.createElement)
}
function addFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;

  finishedList.removeChild(li);
  const cleanToDos = Finishedd.filter(function (toDo) {
    if (toDo.id === parseInt(li.id)) {
      paintToDo(toDo.text);
    }

    return toDo.id !== parseInt(li.id);
  });

  Finishedd = cleanToDos;

  saveToDos();
  saveFINISHED();
  //paintFinished(li.createElement)
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
function deleteFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanToDos = Finishedd.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  Finishedd = cleanToDos;
  saveFINISHED();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function saveFINISHED() {
  localStorage.setItem(FINISHED, JSON.stringify(Finishedd));
}

function paintFinished(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteFinished);
  const addBtn = document.createElement("button");
  addBtn.addEventListener("click", addFinished);

  const newId = Finishedd.length + 1;
  addBtn.innerText = "<-";
  delBtn.innerText = "×";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(addBtn);
  li.id = newId;
  finishedList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  Finishedd.push(toDoObj);
  saveFINISHED();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const addBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteToDo);
  addBtn.addEventListener("click", addToDo);

  const newId = toDos.length + 1;
  addBtn.innerText = "+";
  delBtn.innerText = "×";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(addBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };

  toDos.push(toDoObj);
  saveToDos();
}

function heandleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);

  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedToFinished = localStorage.getItem(FINISHED);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
  if (loadedToFinished !== null) {
    const parsedToDos = JSON.parse(loadedToFinished);
    parsedToDos.forEach(function (toDo) {
      paintFinished(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", heandleSubmit);
}
init();
