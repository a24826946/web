//function3exe.js
//1. max(10, 17) =>"두개중에 큰값은 17입니다."
//
//2. sumUpTo(7) =>"1부터 7까지의 합은 22입니다."
// 
//3. diff(34.17) =>"두수의 차는 17입니다" //큰수에서 작은수 빼는것






//1
function max(num1 = 10, num2 = 17) {
  if (num1 > num2)
    console.log(`두개의 숫자중 큰값은 ${num1} 입니다`)
  else if (num1 < num2)
    console.log(`두개의 숫자중 큰값은 ${num2} 입니다.`)
  else
    console.log("두수는 동일합니다")
}
max(20, 17)


//2
//  function sumUpTo(7)

// let sum = 0
// for (let i = 1; i < 8; i++) {
//   sum += i;
// }
console.log(`1부터 ${num}까지의 합은 ${sum}까지 입니다.`)
// document.write(`1부터 7까지의 합은 ${sum}`);

