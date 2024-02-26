let todos = [
  {
    title: "Walk the dog",
    description: "ten meints walk the dog",
  },
  {
    title: "go to gym",
    description: "45 min train",
  },
];

const todolist = document.getElementsByClassName("todo");
const container = document.querySelector(".TodoContainer");
const ul = document.createElement("ul");
ul.classList.add("list-container");
container.appendChild(ul);
renderTodos();

function renderTodos() {
  todos.forEach((task) => {
    const li = document.createElement("li");
    const title = document.createElement("p");
    const description = document.createElement("p");
    console.log("task: ", task);

    li.classList.add("todo");
    // li.textContent = task.title;
    title.textContent = task.title;
    description.textContent = task.description;

    li.appendChild(description);
    li.appendChild(title);
    ul.appendChild(li);

    let deleteBtn = document.createElement("span"); //Create new span element
    deleteBtn.textContent = "\u00d7";
    li.appendChild(deleteBtn);
  });
}

function addTodo(value, desvalue) {
  //Create a li element and CSS class for todo
  let li = document.createElement("li");

  const title = document.createElement("p");
  const description = document.createElement("p");

  li.classList.add("todo");

  // li.textContent = value;
  title.textContent = value;
  description.textContent = desvalue;
  li.appendChild(description);
  li.appendChild(title);
  ul.appendChild(li);
  todos.push(value); // push new task to array

  let deleteBtn = document.createElement("span"); //Create new span element
  deleteBtn.textContent = "\u00d7";
  li.appendChild(deleteBtn);
}

const form = document.getElementById("add-todo");

form.addEventListener("submit", (e) => {
  const newTodo = document.querySelector(".todo-input");
  const newdec = document.querySelector(".todo-input-dec");

  e.preventDefault();

  if (newTodo.value === "") {
    alert("YOU MUST WRITE SOMETHING");
  } else if (newdec.value === "") {
    alert("YOU MUST WRITE a Description");
  } else {
    addTodo(newTodo.value, newdec.value);
    console.log("New list", todos);
  }
  newTodo.value = "";
  newdec.value = "";
});

ul.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
