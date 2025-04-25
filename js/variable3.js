//variable3.js
//연산자(+,-,/,*,%) %는 나누고 나서 나머지값
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1); //"30" ->30
num2 = parseInt(num2); //"17"->17 parseInt를 넣어서 값을 숫자값으로 바꿔줌


let result = num1++ + --num2; // "30" + "17" = "3017" ;  47
console.log(result, num1, num2);
//result 값을 input#result의 value속성에 대입.
document.querySelector('#result').value = result;