//while2.js
//사용자에게 1~10까지의 임의의 수를입력
//범위 밖의 값을 입력하면 종료. 입력값의 누적 합을 콘솔에 출력
let sum = 0 ;

while(true) {
  let num = parseInt(prompt("1~10까지의 숫자를 입력하세요."));
  if ( num > 10 ){
    break;
  }
  sum += num; //sum = sum + num; 도 가능
}
console.log(`누적값은 ${sum} 입니다.`);
