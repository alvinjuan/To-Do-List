
//Selector
const todoBtn = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoBtn.addEventListener("click", addTodo);


//Functions
function addTodo(event){
    // PREVENT FORM FROM SUBMITTING
    event.preventDefault();
    // todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // CHECK MARK BUTTON
    const completedBtn = document.createElement('btn');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoDiv.appendChild(completedBtn);
    //CHECK TRASH BUTTON
    const trashBtn = document.createElement('btn');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("complete-btn");
    todoDiv.appendChild(trashBtn);
    // APPEND TO LIST
    todoList.appendChild(todoDiv);
}