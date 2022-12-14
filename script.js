// VARIABLES
const form = document.querySelector("#form");
const todoInput = document.querySelector("#input");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let item = todoInput.value;

	if (!item) {
		alert("Enter Todo to add!");
	} else {
		const todoItem = document.createElement("li");
		todoItem.innerText = item;

		todoList.appendChild(todoItem);
		todoInput.value = "";

		todoItem.addEventListener("dblclick", (e) => {
			todoItem.classList.toggle("completed");
		});
	}
});
