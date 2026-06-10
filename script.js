let firstname="yonkoylaw";
const lastname="sultan";
document.getElementById("demo").innerHTML="Hi"+firstname+lastname;
let name = "yonkoylaw";//string
let age = 18 //number
let isCool=true //Boolean 
let fruits =["apple","banana"];//Array
function greetuser() {
    alert("hello there!");
}
console.log("hello world!")
let score = 42;
console.log("current score is",score);
current score is:42
for(let i=0;i < 5;i++) {
    console.log("Repeat number:"+i);
}
let i = 0;
while(i < 3) {
    console.log(i);
    i++;
}
let i = 0;
do {
console.log(i);
i++;
} while (i < 3);
Document.getElementById("text").style.color="blue";
document.getElementById("text").style.fontsize="24px";
let input = document.getElementById("name").ariaValueMax;

if (input === "") {
    alert("please enter your name!");
} else{
    alert("welcome,"+input);
}
document.getElementById("myBtn")
  .addEventListener("click",sayHello);
  function sayHello() {
    alert("Hello!");
  }
  alert("Welcome to my website!");
  setTimeout(()=> {
    alert("This shows after 3 seconds!");
  }, 3000);