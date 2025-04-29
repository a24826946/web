//function5.js
let names = ["홍길동", "박춘식", "김민수", "이영식"];

let search = prompt("검색할 이름 입력: ");
let i = 0;
let exists = false; //존재여부를 확인.

while (true) {
  if (i == names.length) {} else {
    break;
  }
  if (search == names[i++]) {
    exists = true; //찾는 친구의 이름이 존재.
    break;
  }
}
if (exists) {
  alert("있음");
} else {
  alert("없음");
} // end of while.

// for (let i = 0; i < names.length; i++) {
//   if (names[i] == search) {
//     alert('있음');
//     break;
//   } else {
//     alert('없음');
//   }
// }