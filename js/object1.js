//object1.js
//객체지향(자바)+함수:컴파일 함수기반(자바스크립트)+객체:인터프리터(해석하다)

//this => 1. 객체안에서 this는 (객체를 가리킴) 2. 함수안에서는(window라는 객체를 가리킴)
function sum() {
  console.log(this);
}

//함수호출.
sum();

//객체: this => 자기자신을 가리킴.객체자신
let obj = {
  name: "홍길동", //name이라고 하는 속성
  age: 20,
  showName: function () {
    return `이름은 ${this.name}입니다.`
  },
  setName(name) { //setName: function(name)으로 써도됨
    this.name = name;
  }
}
obj.setName("김길똥")
let result = obj.showName();
console.log(result);

//class 생성.
class Person { 
  //name, age: 속성
  //showName(), setName():메소드.
  constructor(name, age) { //생성자(=construtor)
    this.name = name;
    this.age = age;  
  }
  //메소드.
  showName() {
    return `이름은 ${this.name}입니다.`;
  }
  setName(name) {
    this.name = name;
  }
  showAge() {
    return `나이는 ${this.age}입니다.`;
  }
  setAge() {
    this.age = this.age;
  }
}
let num = 10;
let choi = new Person("최민식", 22); //인스턴스 생성.
choi.setName("최민수");
console.log(choi.showName());

let park = new Person("박충식", 30); //인스턴스 생성

