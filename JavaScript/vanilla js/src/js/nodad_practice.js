// Object만들기
const calculator = {
    plus: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
    div: function(a,b){
        if(b==0) return NaN;
        return a/b;
    }    
}
console.log(calculator.plus(1,3));
console.log(calculator.div(1,0));



// querySelector는 노드의 첫 자식 element를 반환한다.
const title = document.querySelector("title");
// querySelector 선택자


// 쿼리 셀렉터를 쓰면 style을 변경하기 좋다.
// 1. * 전체요소, 자식 선택자
// ex-> * { marget:0; }
// ex-> #container * { boder:1px solid; }  container의 모든 자식

// 2. #x id 선택자
// <button id="x">x</button>

// 3. .x 클래스 선택자


// 4. x y  형식 descendant x의 자식 y에에 대해서만

// 4. x > y  형식  x의 직계자식 y에에 대해서만

// 5. x  x 타입에 대해서만

// 6. x:visited

// 7. x[title] title 속성이 있는 앵커 태그만
document.getElementsBy