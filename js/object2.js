//object2.js
//배열내장객체: new Arry() 또는 []
//관련메소드: push, pop, unshift => forEach.

let arr1 = [10, 20, 30]; //new Array(); //
arr1[3] = 40;
arr1.push(50); // 추가 메소드.
arr1.unshift(60);
//60, 10, 20, 30, 40, 50
arr1.pop(); //60, 10, 20, 30, 40,
arr1.pop(); //60, 10, 20, 30
arr1.shift(); //10, 20, 30
// 10, (15,) 20, 30
arr1.splice(1, 0, 15, 16, 17); //추가,삭제,수정/1번위치에 1개의 값을 15로 대체. 대체값을 안넣으면 삭제됨.대체할개수를 안넣으면 추가됨

//every, some : every는 모든요소가 만족해야 트루.some은 하나만 만족해도 트루띄어줌
let result = arr1.every(function (item) { //arr1.some(item => item % 2 == 1); 로 줄여서도 사용가능
  return item % 2 == 1;
});
console.log(result);

arr1.forEach(function (item, idx, ary) { //익명함수. forEach함수는 순서기억. 아이템.인덱스.어레이
  console.log(item, idx);
});
//console.log(arr1);