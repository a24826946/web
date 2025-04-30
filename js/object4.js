//object4.js
//filter() => 조건을 만족하는 요소를 새로운 배열로 생성.

// let numAry = [20, 27, 33, 42, 19, 63, 52]
// let filterAry = numAry.filter(function(item, idx, ary) {
//   if (item % 2 == 0) {
//   return true;
//   }
//   return false;
//   // return undefined => falsy
// });




// console.log(json);
let data = JSON.parse(json); //json문자열->객체변환
let empAry = data.filter(function (item) {
  // console.log(item)
  if (item.salary >= 5000) {
    return true;
  }
  return false;
})
console.log(empAry);


////// salary가 5000이 넘는 사원들을 ampAry에 저장

