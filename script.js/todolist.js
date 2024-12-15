const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todosArray = [];
const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todosArray));
}
function deleteTodo(e) {
  const li = e.target.parentElement;
  console.log(e);
  li.remove();
  todosArray = todosArray.filter((todo) => todo.id !== parseInt(li.id));
  console.log(todosArray);
  saveTodos();
}

function drawTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function todoHandler(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  todosArray.push(newTodoObj);
  drawTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", todoHandler);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todosArray = parsedTodos;
  todosArray.forEach(drawTodo);
}