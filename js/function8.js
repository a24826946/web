//function8.js
//1.JSON.parse vs. JSON.stringify
console.log(json); //문자열.
let data = JSON.parse(json); //json문자열->객체변환
console.log(data); //객체.

//button<삭제> 템플릿
let btnTemplate = "<button class='btn btn-danger' onclick='deleteTr(event)'>삭제</button>";
// console.clear(); //로그지우기
for (let emp of data) { //for(let i =0; i < data.length; i++)써도됨
  // console.log(emp);
}
//배열에다가 속성을 정의.
let fields = ['id', 'first_name', 'email', 'salary', 'gender'];
//사원목록(table형식)을 출력.
let elist = "<table class='table'>";
elist += "<thead><tr>"
for (let emp of fields) {
  elist += `<th>${emp}</th>`;
}
elist += '<th>삭제</th>'
elist += "</tr></thead><tbody>";
//console.log(emp);
for (let field of data) {
  elist += makeTr(field);
}
elist += "</tbody></table>";
document.write(elist);
////////////////////////////////////////////////////
//이벤트.
// document.querySelector('button#searchBtn') //
//   .addEventListener('click', function () {
//     // 입력값alert('click 이벤트 호출.')
//     let searchValue = document.querySelector('#userValue').value;
//     console.log(searchValue);
//     let list = "";
//     for (let emp of data) {

//       if (searchValue == "All" || searchValue == emp.gender) {
//         list += makeTr(emp);
//       }
//       console.log(list);
//     }
//     document.querySelector('table.table>tbody') //
//       .innerHTML = list;
//   });

///change select
document.querySelector('select#selectGender') //
  .addEventListener('change', function () {
    let searchValue = document.querySelector('#selectGender').value;
    console.log(searchValue);
    let list = "";
    for (let emp of data) {
      if (searchValue == "All" || searchValue == emp.gender) {
        list += makeTr(emp);
      }
      console.log(list);
    }
    document.querySelector('table.table>tbody') //
      .innerHTML = list;
  });

//tr을 생성하는 함수
function makeTr(emp = {}) {
  let str = "<tr>";

  for (let field of fields) {
    // console.log(emp[field]); // emp['id'] == emp.id
    str += `<td>${emp[field]}</td>`;
  }
  str += `<td>${btnTemplate}</td>`;
  str += "</tr>";
  return str;
}//end of makeTr


function deleteTr(param1) {
  param1.target.parentElement.parentElement.remove();
}

// //function deleteTr(e) {
//  console.log(e);
//  e.target.parentElement.parentElement.remove();
// }
