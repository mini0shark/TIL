
function init(){
    const modal = document.getElementById("openModal");
    modal.addEventListener("click", ()=>{
        location.href="/modal"
    })
    
    
    // popup창
    const popup = document.getElementById("openPopUp");
    popup.addEventListener("click", ()=>{
        window.open("modal", "", "width=300, height=300");
    });
    
    
    const lecture = document.getElementById("openLecture");
    lecture.addEventListener("click", ()=>{
        location.href="/lecture"
    });

    const todo = document.getElementById("todo");
    todo.addEventListener("click", ()=>{
        location.href="/todo"
    });
    
}
init();