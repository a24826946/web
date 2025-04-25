//condition4.js
//1~10 임의의 값을 생성하고. 
//생성된 값을 변수에 저장한 후 그 값이 2의 배수인지 또는 3의 배수인지





let result = 1 + Math.floor(Math.random() * 10);
console.log (result)



if(result %2 == 0 && result % 3 == 0) {
  console.log('2,3의배수');
}
else if(result %2 == 0) {
  console.log('2의배수');
}
else if(result %3 == 0) {
  console.log('3의배수');
}
  else{
  console.log('2,3의 배수가아님')
}

