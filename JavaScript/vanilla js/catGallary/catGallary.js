const ROOT_URL ="https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/";
const BASIC_IMG_SRC = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public`;
const DIR = "DIRECTORY";
const FILE = "FILE";
const ESC_KEY = "Escape";
const targetNodes = document.querySelector(".Nodes");
const modal = document.querySelector(".Modal");
let requestPage = 0;
const filePath=[{path:'root',id:0}];

{/* <div class="Node">
  <img src="./assets/prev.png">
</div> */} 

{/* <div class="ImageViewer">
  <div class="content">
    <img src="https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/images/a2i.jpg">
  </div>
</div> */}

function closeModal(){
    modal.classList.add("hidden");
}
function openModal(){
    modal.classList.remove("hidden");
    document.onkeydown = function(evt) {
        console.log(evt);
        if (evt.key == ESC_KEY) {
            closeModal();
        }
    };
}
function clickIconHandler(element){
    if(element === null){
        // 뒤로가기
        filePath.pop();
        requestPage=filePath[filePath.length-1].id;
        loadInitInfo();
    }else{
        const iconType =element.type;
        const id = element.id;
        const name = element.name;
        if(iconType===DIR){     //폴더
            requestPage=id;
            filePath.push({path:name, id:id});
            loadInitInfo();
        }else if(iconType===FILE){      // 파일(이미지)
            while(modal.hasChildNodes()){modal.removeChild(modal.firstChild);}
            const imageViewer = document.createElement("div");
            const overlay = document.createElement("div");
            imageViewer.classList.add("ImageViewer");
            overlay.classList.add("overlay");
            overlay.addEventListener('click',closeModal);

            const imgSrc = BASIC_IMG_SRC+element.filePath;
            const showImage = new Image();
            
            showImage.src = imgSrc;
            const newDiv = document.createElement("div");
            newDiv.classList.add("content");
            newDiv.appendChild(showImage);
            imageViewer.appendChild(showImage);
            modal.appendChild(overlay);
            modal.appendChild(imageViewer);
            openModal();
        }
    }
}
function makeImage(type){
    const image = new Image();
    let img_src = './assets/';
    if(type===DIR){ img_src+='directory.png';
    }else if(type===FILE){ img_src+='file.png'; }
    else{ img_src+='prev.png';}
    image.src = img_src;
    return image;
}
function makeElement(element){
    const div_outter = document.createElement("div");
    const div_inner = document.createElement("div");

    div_outter.classList.add("Node");
    if(element!==null){
        const image = makeImage(element.type);
        div_outter.appendChild(image);
        div_inner.innerText = element.name;
        div_outter.appendChild(div_inner);
    }else{
        const image = makeImage(null);
        div_outter.appendChild(image);
    }
    div_outter.addEventListener('click',function(){
        clickIconHandler(element);
    });
    targetNodes.appendChild(div_outter);
}
function refreshFilePath(){
    const pathShower = document.querySelector(".Breadcrumb");
    while(pathShower.hasChildNodes()){pathShower.removeChild(pathShower.firstChild);}
    filePath.forEach(function(element){
        const div = document.createElement("div");
        div.innerText = element.path;
        pathShower.appendChild(div);
    });
}
function loadInitInfo(){
    
    while(targetNodes.hasChildNodes()){
        targetNodes.removeChild(targetNodes.firstChild);
    }
    
    if(requestPage!==0)makeElement(null);
    fetch(
        ROOT_URL+(requestPage===0?'':requestPage)
    ).then(function(response){
        return response.json();
    }).then(function(json){
        //const jsonArray = JSON.parse(json);
        console.log(json);
        json.forEach(element => {
            makeElement(element);
        });
        refreshFilePath();
    });
}
function init(){
    
    // window.onkeypress=function(e){
    //     var charCode = e.charCode || e.keyCode || e.which;
    //     console.log(e.keyCode);
    //     console.log(e.which);
    //     console.log(charCode);
    //     console.log(e.keyCode , KeyCodes.ESC);
    // }
    loadInitInfo();
}
init();