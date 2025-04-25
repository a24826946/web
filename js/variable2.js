// variable2.js
let num1 = 100; //int num1;
console.log(typeof num1);
num1 = "hundred"

let num_2 = 200;
let nameOfFriend = "홍길동";

let birthOfDate = new Date(); //대문자O와 소문자o는 달라
console.log(typeof birthOfDate);

let isOK = true;
isOK = 10 < 5; //false.
isOK = 10 > 5; // true.

if (isOK) {
  // isOK라는 값이 true일 경우 {}블럭을 실행.
  console.log('isOK는 참입니다.');
}
//배열: [100, 200, 250] 여러개의 값을 저장
let numAry = [10, 20, 25, 31] //배열의 첫번째 두번째~~순번의 값을 인덱스라하고.인덱스는 0부터 시작 [0, 1, 2, 3]
numAry[0]
console.log(numAry[0]);

let strAry = ["hello", "Nice", "Good", 300]; //가능하지만 안쓰도록 합시다 2025-04-25

//객체(object). 키:값의 형태
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3
  personInfo: function() {//함수는 기능.
    console.log('이름은 ' + person.name + '이고 나이는 ' + person.age);
  }
  person.personInfo();
  

} //객체는 중괄호를 쓴다

console.log(person.name);

//undefied, null
let whatIsThis;
whatIsThis = document.querySelector('#userValue')
console.log(typeof whatIsThis);
