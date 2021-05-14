const title = document.querySelector("#title");
// - 이벤트 핸들러 -

// 창 사이즈 조절
// function handleResize(){
//    console.log("resized!!!!");
// }
// windos.addEventListener("resize", handleResize);

// 클릭시 색 변화
// function handleClick(){
//     title.style.color = "blue";
// }
// title.addEventListener("click", handleClick);


// let BASE_COLOR = "rgb(52, 72, 94)";
// const OTHER_COLOR = "#7f8c8d";
// function handleClick(){
//     const currentColor=title.style.color;
//     if(currentColor===BASE_COLOR){
//         title.style.color=OTHER_COLOR;
//     }else{
//         title.style.color=BASE_COLOR;
//     }
// }


// // 추가 이벤트
// function handleOffline(){
//     console.log("ask1@#J!@KL#J!@");
// }
// function hanndleOnline(){
//     console.log("Welcome back"); 
// }
// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", hanndleOnline);



// css 관련
const CLICKED_CLASS ="clicked";
// function handleClick(){
//     const currentClass = title.className;
//     if(currentClass !== CLICKED_CLASS){
//         title.className = CLICKED_CLASS;
//     }else{
//         title.className="";
//     }
// }
function handleClick(){
    const currentClass = title.className;
    // if(title.classList.contains(CLICKED_CLASS)){
    //     title.classList.remove(CLICKED_CLASS);
    // }else{        
    //     title.classList.add(CLICKED_CLASS);
    // }
    // ===
    title.classList.toggle(CLICKED_CLASS);
}



function init(){
    console.log(document.querySelector(".btn"));
    BASE_COLOR=title.style.color;
    title.addEventListener("click", handleClick);
    // title.addEventListener("mouseenter", handleClick);
    // title.addEventListener("mouseout", handleClick);
}

init();