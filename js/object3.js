//object3.js
//indexOf()

// let numAry = [10, 21, 33, 54, 16, 73]
// let result = numAry.indexOf(33); //결과값이 없으면 '-1'을 띄움//console.log("홍길동".indexOf("길"));
// console.log(result);

// let strAry = ["홍길동", "김길동", "홍길순"];
// strAry.forEach(function (item) {
//   if (item.indexOf("홍") == 0) { //성씨가 "홍"씨인 사람만 출력 //if(item.indexOf("길동") !== -1)
//     console.log(item);
//   }
// });

// numAry(변수) => 10 ~ 50 사이의 값을 10개를 저장. =>콘솔에 출력(forEach);
let numAry = [];
for (let i = 1; i <= 10; i++) {
  let no = Math.floor(Math.random() * 41) + 10;
  numAry.push(no);
}

//10~50 사이의 값이 정상적으로 생성 체크: every
let result = numAry.every(function (item) { 
  if (item >= 10 && item <= 50) {
    return true;
  }else {
    return false;
  }
  // return item <= 50 && item >= 10; //같은형식//if (item >= 10 && item <= 50){return true;}else{return false;}
});
console.log(result);
numAry.forEach(function (item) {
  console.log(item);
})