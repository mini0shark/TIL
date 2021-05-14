


var str = "abcdefghihjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var dataJson = str.replace(/'/g,"");
console.log(str);
console.log(dataJson);



var a,b,c;
var[a,b,c] = [1,2,3];

console.log();
console.log();
console.log(a,b,c);

var arr = Array.from({length:2}, ()=>0);
var ab;
var[arr,ab,a ] = [1,2,3];


var human = {
    'name':'',
    'body': {
      height: 173,
      weight: 66
    },
    'age': 23
  };


  if(human.name===''){
      human.name='null';
  }
  console.log(human);