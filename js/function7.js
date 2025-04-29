//function7.js
console.log(friends);

let friend = {
  name: "김민규",
  age: 20,
  phone: "010-1111-1234"
}

let {name, age, phone} = {
  name: "김민규",
  age: 20,
  phone: "010-1111-1234"
}
console.log(name, age, phone)





//for..in => 객체의 속성 반복.
for (let prop in friend) {
  console.log(`prop: ${prop}, val: ${friend[prop]}`);
}

//함수: makeRow(friend={})
function makeRow(friend = {
  name,
  age,
  phone
}) {
  let str = "";
  str += "<tr>";
  //  str += `<td>${friend.name}</td><td>${friend.age}</td><td>${friend.phone}</td>`;
  for (let a in friend) {
    str += `<td>${friend[a]}</td>`;
  }
  str += "</tr>";
  return str;
}

//출력.
let titles = ["이름", "나이", "연락처"];
let tlist = "";

tlist += "<thead><tr>"
tlist += "<table class='table'>";
for (let p of titles) {
  tlist += `<td>${p}</td>`;
}
tlist += "</tr></thead>"

tlist += "<tbody>";
//데이터 -> row생성
// for(let i = 0; i < friends.length; i++) {
// tlist += makeRow(friends[i]);
// }
//for .. of =>배열 반복.
for (let friend of friends) {
   tlist += makeRow(friend);
}
tlist += "</tbody></table>";
document.write(tlist);