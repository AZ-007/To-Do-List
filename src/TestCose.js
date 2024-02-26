
  let todos = []

const container = document.querySelector(".hero")
const ul = document.createElement("ul")
const todolist = document.getElementsByClassName("todo") //class name for li element
container.appendChild(ul)

const deletBtn = document.createElement("button")
// function renderTodos(){
//  const todso [];
//  const ul = document.createElement("ul")
//  ul.classList.add("todos")
//  container.appendChild(ul)
//  todos.forEach((element) => {
// const li = document.createElement("li")
//   li.classList.add("todo") //Create a class name for li element
//   li.textContent = element; // Inserting name from the array to "li" element
//   ul.appendChild(li);
// })
// }
// window.addEventListener("load", ()=>{
//   renderTodos();
// })
const form = document.getElementById("add-todo");

form.addEventListener("submit", (event) => {     // Function insaide methond //"submit" name of the event
  event.preventDefault();                       // To prevent the default behavior of the form submit
  
  const newTodo = document.querySelector(".todo-input");

  if (newTodo.value === "") {                   // Create condition to check if the input is empty or not 
    alert("you must write somthing");
  } else {
    let li = document.createElement("li");      //Create new li element
    li.classList.add("todo");                   // Css class name for li element
    li.textContent = newTodo.value;  
                                                //print the new task in html
    ul.appendChild(li);                         //Add new li element to the ul
    todos.push(newTodo);
    
    let span =document.createElement("span");   //Create new span element
    span.textContent = "\u00d7";  
    li.append(span, afaf,afa)              //print the x in html
    li.appendChild(span);                       //Add new span element to the li element
    
  }
  newTodo.value = "";                            //Clear the input field
  
});

form.addEventListener("submit", (e) => {            // Function insaide methond
  if(e.target.tagName=== "li"){
    e.target.classList.toggle("checked");
    
  }
  else if(e.target.tagName=== "span"){
    e.target.parentElement.remove();
    saveData();
  }
  
}, false);

function saveData(){
  localStorage.setItem("data", todolist.textContent);
}
function showTask(){
  todolist.textContent = localStorage.getItem("data");
}
showTask();



// /todos.forEach((element) => {
// const li = document.createElement("li")
//   li.classList.add("todo") //Create a class name for li element
//   li.textContent = element; // Inserting name from the array to "li" element
//   ul.appendChild(li);
// })

// const form = document.getElementById("add-todo");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const newTodo = document.querySelector(".todo-input").value;

//     let li = document.createElement("li")
//     li.classList.add("todo");
//     li.textContent = newTodo
//     ul.appendChild(li)
//     
// })


// function addTodo(value{
//   const 

//   li.calssList.add
// })

// function filterdtodos() = todos.filter((todo) => {



// })
 removeTodo(selecctedTodo){
  console.log("selectedTodo" ,selecctedTodo)
   todolist.filter((todo)=>)
 }

  list.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    });