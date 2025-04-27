//condition7.js

// let num1;
// num1 = prompt("첫번째 수를 입력하세요.");
// let num2;
// num2 = prompt("두번째 수를 입력하세요");

// if (num1 > num2) {
//   console.log("큰수는 " + num1 + "입니다.");
// } else if (num1 < num2) {
//   console.log("큰수는 " + num2 + "입니다.");
// } else {
//   console.log("두수는 동일합니다다");
// }

// let randomNum1;
// randomNum1 = 40 + Math.floor(Math.random() * 30);
// let randomNum2;
// randomNum2 = 40 + Math.floor(Math.random() * 30);

// console.log("첫번째 수는 " +randomNum1 + "입니다");
// console.log("두번째 수는 " +randomNum2 + "입니다");

// if (randomNum1 > randomNum2) {
//   console.log("두수중 큰 수는 " + randomNum1 + "입니다. 두수중 작은값은 " + randomNum2 + "입니다");
// }
// else if (randomNum1 < randomNum2) {
//   console.log("두수중 큰 수는 " + randomNum2 + "입니다. 두수중 작은값은 " + randomNum1 + "입니다.");
// }
// else {
//   console.log("두수는 동일합니다");
// }

//condition3.js
// // 30 ~ 100
// let result = 30 + Math.floor(Math.random() * 71); // 0 <= x<1 '영보단크고 1보단작은 실수값이 계속 만들어짐'
// console.log(result);
// //100~90 => "A"
// ~ 80 => "B"
// ~ 70 => "C"
// ~ 60 => "D" 그 외 "F"

//잘게 단위 나눠서 연습.
// if (result >= 95) {
//   console.log("A+");
// } else if (result >= 90) {
//   console.log("A");
// } else if (result >= 85) {
//   console.log("B+");
// } else if (result >= 80) {
//   console.log("B");
// } else if (result >= 75) {
//   console.log("C+");
// } else if (result >= 70) {
//   console.log("C");
// } else if (result >= 65) {
//   console.log("D+");
// } else if (result >= 60){
//   console.log("D");
// } else {
//   console.log("F");
// }



// if(result >= 60) {
//   console.log("Pass");
// }else{
//   console.log("Fail");
// }



//교수님의 출제의도를 파악한 스위치 사용법은 아래에.
let result = 30 + Math.floor(Math.random() * 71);
// result = result; // 95/10=>9.5
console.log(result)
switch(result) {
//  case result>=90 : console.log("A")  <<<<이렇게 범위로는 못쓰고 . 앞자리만따와서 등급별로 지정가능
 case 10 :
  case 95: console.log ("A+");break
  case 90: console.log ("A");break
  case 85: console.log ("B+");break
  case 80: console.log ("B");break
  case 75: console.log ("C+");break
  case 70: console.log ("C");break
  case 65: console.log ("D+");break
  case 60: console.log ("D");break
  default: console.log("F")
}