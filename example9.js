// typeof 연산자 -- 자료형 확인

//예제1
console.log(typeof 101);        //number
console.log(typeof 'Codeit');   //string
console.log(typeof true)        //boolean

//예제2
let name = 'Codeit';
function sayHello() {
    console.log('Hello');
};

console.log(typeof name);       //string
console.log(typeof sayHello);   //function

//예제3
console.log(typeof 'Hello' + 'Codeit'); //stringCodeit
console.log(typeof 8 - 3);              //NaN (not a number)

console.log(typeof('Hello' + 'Codeit'));//string
console.log(typeof(8 - 3));             //number