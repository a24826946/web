// function4.js
//함수 + 반복문 + 배열 :
// let num = 10;
// num = "10, 홍길동";
// let numAry = [10, 20, 30, 50]; //new Array();
// numAry[2] = 30;
// numAry[3] = 50;
// numAry [4] = "hong"; //(x)
// numAry[4] = 70
// numAry[5] = 90
// numAry[6] = 110

// console.log(numAry[3]); //[]안의 첫번째 숫자는 첫번쨰 인덱스를 말한다. 위치. 0부터시작 
// console.log(`배열의 크기: ${numAry.length}`); //배열의 크기는[]안의 숫자들의 갯수


// //배열 + for 반복문.
// for (let i = 0; i < numAry.length; i++) { //(let i = 0; i < 6; i++)
//   console.log(`[i]의 값: ${i}, 배열의 값: ${numAry[i]}`);
// }
// //console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry[2]} `);

// //배열의 요소의 합.
// let sum = 0;
// for (let i = 0; i < numAry.length; i++){
//   //1,3,5,7번째.
//   //if(i%2==0)
//   //값중에서 50보다 큰값.
//   if (numAry[i] > 50) 
//   sum += numAry[i];
// }
// console.log(`sum=> ${sum}`);



//배열변수:ages 27, 28, 25, 30, 31, 36
let ages = [27, 28, 25, 30, 31, 36];

//max(초기값: 0)

function getMax(param1 = []) {
  let max = 0;
  for (let i = 0; i < param1.length; i++) {
    if (param1[i] > max)
      max = param1[i]
  }
  console.log(`${max}가 제일 많은 나이입니다.`);
}
//함수 실행.
getMax(ages);
getMax([30, 17, 22, 34, 27]);

//함수 getMinValue(매개값으로 배열)제일 작은값을 반환.;

function getMinValue(param2 = []) {
  let getMinValue = 50; // let min = param2[0]; 최소값으로 0번째 인덱스 넣어주면 좋을듯!!
  for (let i = 0; i < param2.length; i++) {
    if (param2[i] < getMinValue)
      getMinValue = param2[i]
  }
  return getMinValue //반환
}

let result = getMinValue([20, 27, 17, 30, 15]);
result = getMinValue([17, 34, 22, 10, 5]);
console.log(`결과는 ${result}`);