
const todos = ["Abdualziz", "Mohmmad", "Ahmad"]

const container = document.querySelector(".container")
const ul = document.createElement("ul")

container.appendChild(ul)

todos.forEach((element) => {
const li = document.createElement("li")
  li.classList.add("todo") //Create a class name for li element
  li.textContent = element; // Inserting name from the array to "li" element
  ul.appendChild(li);
});


const form = document.getElementById("add-todo");
form.addEventListener("submit", (event) => {
  console.log("clicking...")
    event.preventDefault();
    const newTodo = document.querySelector(".todo-input").value;
    console.log ("there is ", newTodo )

    const li = document.createElement("li")
    li.classList.add("todo");
    li.textContent = newTodo
    ul.appendChild(li)
    todos.push(newTodo)
})
  
  
