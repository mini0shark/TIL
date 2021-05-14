
var arr = new Array([1,2],[5,3],[7,2],[4,5],[7,3],[3,2],[6,1],[3,7]);
console.log(arr);
arr.sort(function(a,b){ // 앞에 것 기준 정렬
    if(a[0]==b[0]) return a[1]-b[1];
    return a[0]-b[0];
});
console.log(arr);

arr.sort(function(a,b){ // 뒤에 것 기준 정렬
    if(a[1]==b[1]) return a[0]-b[0];
    return a[1]-b[1];
});
console.log(arr);

let strArray = ['apple','banana', 'grape'];
strArray.sort(function(a,b){
  if(a>b) return -1;
  return 1;
})
console.log(strArray);
console.log();
console.log();
console.log();

// every=> &&, some=> || 조건에 따른
let data=[
    {name:'jack', age:20},
    {name:'kevin', age:16},
    {name:'rick', age:27},
    {name:'marry', age:21},
    {name:'rilly', age:19}
]

let result = data.every(x=>{
    return x.age>=20;
});

console.log(result);



result = data.some(x=>{
    return x.age>=20;
});
console.log(result);




// map
console.log();
var arr = [1,2,3,4,5];
var arr2 = arr.map(function(a){ return a%2==0?'짝수':'홀수'});
console.log(arr);
console.log(arr2);


// reduce
console.log();
var arr = [1,2,3,4,5];
var arr2 = arr.reduce(function(acc, cur, i){ return acc*cur;}, 1);
console.log(arr);
console.log(arr2);
// [ 1, 2, 3, 4, 5 ]
// 120

// 홀수만 넣기
result = arr.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
  }, []);
  console.log(result); 
// [ '홀수', '짝수', '홀수', '짝수', '홀수' ]

// 홀수만 넣기
  result = arr.reduce((acc, cur) => {
    if (cur % 2) acc.push(cur);
    return acc;
  }, []);
  console.log(result); 
// [1, 3, 5]


  console.log();
  console.log();
  console.log();
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let res = quoteSample.match(alphabetRegexV2);
console.log(res);



// filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result1 = words.filter(word => word.length > 6);
const result2 = words.filter(function(word){ return word.length>6;});
console.log(result1);
console.log(result2);


var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
  /// sort, filter, every, some, find, findIndex, includes

function filterItem(query){
  return fruits.filter(function(element){
    return element.toLowerCase().indexOf(query.toLowerCase())>-1;
  });
}
console.log(filterItem('ap'));
console.log(filterItem('an'));

// includes => 배열에 해당요소가 들어있는지 판단.
var array = [1,2,3,4,5];
// array.includes(찾을 값, 시작인덱스);
console.log(array.includes(1, 1));
console.log(array.includes(7));




// find => 배열안에 조건에 따른 첫번째 요소를 반환
// 조건을 충족하지 않으면 undefined반환
const arr1 = [5,12,8,302,20];
const found = arr1.find(element=> element>=300);
console.log(found);
// 302

// findIndex => 배열안에 조건에 따른 첫번째 인덱스를 반환
// 충족하지 않으면 -1 반환
const found2 = arr1.findIndex(element=> element>=400);
console.log(found2);
// -1


var array = [1,2,3,4,5];
// array.includes(찾을 값, 시작인덱스);
for(let i =0; i<10; i++){
    console.log(-1*i,array.includes(1, i));
}
// -0 true
// -1 false
// -2 false
// -3 false
// -4 false
// -5 false
// -6 false
// -7 false
// -8 false
// -9 false


console.log(array.includes(1, 1));
console.log(array.includes(7));


let ppsu=[1,2,3];

console.log("ppsu : " + ppsu);
ppsu.push(10);
console.log("after push ppsu : " + ppsu);
ppsu.unshift(20);
console.log("after unshift ppsu : " + ppsu);
console.log("ppsu.pop() : "+ ppsu.pop());
console.log("ppsu : " + ppsu);
console.log("ppsu.shift() : "+ ppsu.shift());
console.log("ppsu : " + ppsu);