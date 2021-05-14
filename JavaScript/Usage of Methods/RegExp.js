
//RegExp() 정규식
var ddd = `{"id":1, 'name':'akldjf[]'}`;
var reg = new RegExp('"id":'+1+',"name":"([^"]*)"',"i");
var match = ddd.match(reg);
console.log(match);


