//for2.js
//1~10까지 반복.
//2의 배수, 3의 배수=>2의배수는 sum2에 저장
//                   3의 배수는 sum3에 저장
let sum2 = 0, sum3 = 0;
for (let i = 1; i <=10; i++ ) {
  if(i % 2 == 0) {
    sum2 = i + sum2;
  }
  else if (i % 3 == 0){
    sum3 = i + sum3;
  }
}
console.log(sum2);
console.log(sum3);

