const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");

let myTodoList = [];

if (localStorage.getItem("myTodo")) {
  myTodoList = JSON.parse(localStorage.getItem("myTodo"));
  myTodoList.forEach((el) => addTodo(el));
}

todoForm.addEventListener("submit", onSubmit);

function addTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = newTodo.id;
  span.innerText = newTodo.value;
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.append(span);
  li.append(button);
  todoList.append(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  myTodoList = myTodoList.filter((el) => el.id !== parseInt(li.id));
  li.remove();
  saveTodo();
}

function onSubmit(event) {
  console.log("submit");
  event.preventDefault();
  const newTodo = {
    value: todoInput.value,
    id: Date.now(),
  };
  todoInput.value = "";
  myTodoList.push(newTodo);
  addTodo(newTodo);
  saveTodo();
}

function saveTodo() {
  localStorage.setItem("myTodo", JSON.stringify(myTodoList));
}
