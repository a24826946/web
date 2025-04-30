//dom1.js

//createElement(), appendChild(), setAttribute(), QuerySelector()
////////////////////////////////
//이벤트
document.querySelector('#addBtn')
  .addEventListener('click', addCallback);

//삭제버튼들.
document.querySelectorAll('ul button').forEach(function (item) {
  console.log(item);
  item.addEventListener('click', function () {
    item.parentElement.remove(); //요소삭제.
  })
});

//li에 스타일
document.querySelectorAll('li').forEach(item => {
  console.log(item);
  item.addEventListener('mouseover', function () {
item.style.backgroundColor = "cyan";
  })
  item.addEventListener('mouseout', function () {
    item.style.backgroundColor = "";
  })
});

function addCallback() {
  let fruit = document.getElementById('fruit').value;
  let price = document.querySelector('#price').value;

  //입력값이 있는지 체크.
  if (!fruit || !price) {
    alert('값입력하세요.');
    return; //함수의 실행종료
  }

  let newList = createLi(fruit, price);
  document.querySelector('ul').appendChild(newList); //부모-자식관계
  //입력값 초기화
  document.getElementById('fruit').value = "";
  document.querySelector('#price').value = 0;
}


/////////////////////////////////////////////////////////
//함수
function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li"); //<li />
  // li.innerText = "test"
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;
  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice;
  let txt = document.createTextNode(" ");
  //삭제버튼
  let btn = document.createElement("button"); //<button id="delBtn" class="btn btn-primary">삭제</button>
  btn.innerText = "삭제";
  //btn.setAttribute('class', 'btn btn-danger'); //속성추가
  btn.setAttribute('class', 'btn btn-danger'); //btn.className = "btn btn-dager"; 가능
  btn.addEventListener('click', function () {
    btn.parentElement.remove();
  }); //클릭이벤트틍록

  li.appendChild(sp1); //붙이는 순서 중요 먼저붙이면 먼저올라감.
  li.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);

  console.log(li);
  document.querySelector('ul').appendChild(li);
};