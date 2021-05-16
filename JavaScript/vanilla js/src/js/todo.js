const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const todo = document.getElementById("todo1");


const TODOS_LS = 'toDos';   //localStorage
let toDos = []

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function deleteTodo(event){
    //console.dir(event.target);
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){return parseInt(li.id)!==parseInt(toDo.id)});
    console.log(cleanToDos, li.id);
    toDos = cleanToDos;
    saveToDos();
}
function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTodo);
    span.innerHTML = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

    li.id = newId;
    const toDoObj={
        text:text,
        id:newId,
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(element => {
            paintTodo(element.text);
        });
    }
}
function ex(){
    const removeList = []
    const childList = toDoList.childNodes
    childList.forEach(function(element){
        removeList.push(element);
    });
    removeList.forEach(function(e){
        toDoList.removeChild(e);
    })
}
function init(){
    loadToDos();
    //ex();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();