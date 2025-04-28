//function1.js



function sum(parameter1, parameter2) {
  //2개의 수를 큰값에 10을 더하고 작은값에 5를 더한 후 합을 구하는 방법
  let result = 0;
  if (parameter1 > parameter2) {
    result = (parameter1 + 10) + (parameter2 + 5);
 }else {
  result = (parameter2 + 10) + (parameter1 + 5);
   }
   //console.log(`결과값 ${result}`);
   return result; //return : 함수를 호출한 영역으로 결과 반환.
  } // end of sum()




  