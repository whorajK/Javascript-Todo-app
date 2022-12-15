// VARIABLES
const form = document.querySelector("#form");
const todoInput = document.querySelector("#input");
const todoList = document.querySelector("#todo-list");

// LOADS TODOS FROM LOCAL STORAGE
const lsData = JSON.parse(localStorage.getItem("todos"));
if (lsData) {
	lsData.forEach((item) => {
		addTodo(item);
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	addTodo();
});

// ADDS A NEW TODO
function addTodo(item) {
	let todoText = todoInput.value;

	if (item) {
		todoText = item.text;
	}

	if (todoText) {
		const listItem = document.createElement("div");
		const todoItem = document.createElement("li");
		const deleteBtn = document.createElement("button");

		todoItem.innerText = todoText;
		deleteBtn.setAttribute("class", "delete_btn");
		deleteBtn.innerText = "x";

		listItem.appendChild(todoItem);
		listItem.append(deleteBtn);
		todoList.appendChild(listItem);

		if (item && item.completed) {
			todoItem.classList.add("completed");
		}

		todoInput.value = "";
		updateLS(item);

		listItem.addEventListener("dblclick", (e) => {
			todoItem.classList.toggle("completed");
			updateLS(item);
		});

		deleteBtn.addEventListener("click", (e) => {
			listItem.remove();

			updateLS(item);
		});
	}
}

// UPDATES LOCAL STORAGE
function updateLS(item) {
	let todos = [];
	const todo = document.querySelectorAll("li");

	todo.forEach((todo) => {
		todos.push({
			text: todo.innerText,
			completed: todo.classList.contains("completed"),
		});
	});

	localStorage.setItem("todos", JSON.stringify(todos));
}
