//conditions6.js
let num1;
num1 = prompt("첫번째 수를 입력하세요.");
let num2;
num2 = prompt("두번째 수를 입력하세요.");

if (num1 > num2) {
  console.log("큰 수는 " + num1 + "입니다.");
} else if (num1 < num2) {
  console.log("큰 수는 " + num2 + "입니다.");
} else {
  console.log(" 두 수는 동일합니다");
}