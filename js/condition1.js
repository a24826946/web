//conodition1.js
let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3 < 5;
isTrue =  num1 < 5;
isTrue = --num1 < 5;
isTrue = --num1 <= 4 && num2++ == 10;
isTrue = 0;  //true / false => truthy / falsy (0,"공백", null, undefied, NaN)
console.log(num1, num2);

if (isTrue) {
  //isTure의 참 => if블럭 실행.
  console.log("참");
} else {
  // isTrue의 거짓 => else 블럭 실행.
  console.log("거짓");
}