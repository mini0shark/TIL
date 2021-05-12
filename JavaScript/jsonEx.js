
var data = `[
    [
    {"id":1, "name":"홍길동"}, 
    {"id":2, "name":"장길산"}, 
    {"id":3, "name":"조세호"}, 
    {"id":4, "name":"정관장"}
    ],
    [
        {"id":5, "name":"김철수"}, 
        {"id":6, "name":"이영희"}, 
        {"id":7, "name":"나봉선"}, 
        {"id":8, "name":"도봉순"}
    ]
]`;


var User = JSON.parse(data);

console.log(User.length);
console.log(User);

// 2
// [
//   [
//     { id: 1, name: '홍길동' },
//     { id: 2, name: '장길산' },
//     { id: 3, name: '조세호' },
//     { id: 4, name: '정관장' }
//   ],
//   [
//     { id: 5, name: '김철수' },
//     { id: 6, name: '이영희' },
//     { id: 7, name: '나봉선' },
//     { id: 8, name: '도봉순' }
//   ]
// ]
User.forEach(function(v, out_i){
    var innerArray = v;
    innerArray.forEach(function(v, in_i){
        console.log(`배열 번호-(외부 -> ${out_i}, 내부 -> ${in_i} : id : ${v.id}, name : ${v.name}`);
    });
});


var toStr = JSON.stringify(User);

console.log(toStr);

var date = new Date();
var dateString = date.toJSON();

console.log();
console.log();
console.log(`date : ${date}`);
console.log(`dateString : ${dateString}`)


var arr = Array.from({length:10}, (_,i)=>i*i);
console.log();
console.log("-- arr---");
console.log(arr)
var arrJson = JSON.stringify(arr);
console.log();
console.log("-- arrJson---");
console.log(arrJson);
var arr2 = JSON.parse(arrJson);
console.log();
console.log("-- arr2---");
console.log(arr2);
console.log();
// -- arr---
// [
//    0,  1,  4,  9, 16,
//   25, 36, 49, 64, 81
// ]

// -- arrJson---
// [0,1,4,9,16,25,36,49,64,81]

// -- arr2---
// [
//    0,  1,  4,  9, 16,
//   25, 36, 49, 64, 81
// ]




console.log();
console.log(arr);
console.log(arr, ab);

var human = {
    'name':'홍길동',
    'body': {
      height: 173,
      weight: 66
    },
    'age': 23
  };

var humanJson = JSON.stringify(human);
console.log();
console.log(human);
console.log(humanJson);

// { name: '홍길동', body: { height: 173, weight: 66 }, age: 23 }
// {"name":"홍길동","body":{"height":173,"weight":66},"age":23}





=