//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);

//functions
function addTodo(event){
  //prevents form from submitting, henvce browser from refreshing
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create LI
  const newTodo=document.createElement('li');
  newTodo.innerText = todoInput.value; //this is to take input values from user
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //checked button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"><i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

 //trash for delete button
 const trashButton =  document.createElement('button');
 trashButton.innerHTML='<i class="fas fa-trash"><i>';
 trashButton.classList.add("trash-btn");
 todoDiv.appendChild(trashButton);

 //append to list
 todoList.appendChild(todoDiv);
//to clear those input values affter we add them
todoInput.value="";
}

function deleteCheck(e){
    console.log(e.target);
    const item=e.target;

    //to delete todo items
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

    //to check off completed items
    if(item.classList[0] === "complete-btn"){
        const todo= item.parentElement;
        todo.classList.toggle('completed');
    }

}