
//Selector
const todoBtn = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions

// ADDS THE TASK
function addTodo(event){
    // PREVENT FORM FROM SUBMITTING
    event.preventDefault();
    // todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
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
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);
    // APPEND TO LIST
    todoList.appendChild(todoDiv);
    // CLEAR TODO INPUT VALUE
    todoInput.value = "";
}

// DELETE THE TASK
function deleteCheck(e){
    const item = e.target;
    // DELETE TOD
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }
    // CHECK MARK
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos);
}
