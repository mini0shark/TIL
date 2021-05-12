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


//RegExp() 정규식
var ddd = `{"id":1, 'name':'akldjf[]'}`;
var reg = new RegExp('"id":'+1+',"name":"([^"]*)"',"i");
var match = ddd.match(reg);
console.log(match);


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

// 홀수만 넣기
result = arr.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
  }, []);
  console.log(result); // ['홀수', '짝수', '홀수']
// 홀수만 넣기
  result = arr.reduce((acc, cur) => {
    if (cur % 2) acc.push(cur);
    return acc;
  }, []);
  console.log(result); // [1, 3, 5]



  /// sort, filter, every, some, find, findIndex, includes