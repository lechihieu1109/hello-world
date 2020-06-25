// let x = 5;
// let s = 'hello world';
// x = 6;
// s = "hi there";
// // x = prompt("how are you?");
// // console.log(x);
// // console.log(s);
// let x = 5;
// {
//     console.log(x);
// }
// {
//     let y = 6
// }
// console.log(y);
// let x = 6;
// x ++;
// console.log(x);
// let x = 'CHAO BAN';
// let y = x.toLowerCase();
// // console.log(y);
// alert('what your name?');
// let x = alert;
// console.log(x);
// let message = 'Coding is great';
//        message = 'Coding might not be easy, but still great';
//         console.log(message);
//         let studentCount = 0;
//         studentCount = 16;
//         console.log(studentCount);
//         let lower = message.toLowerCase();
//         console.log(lower);
//         studentCount ++;
//         console.log(studentCount);
// let x = prompt("Hi there, your name plese?");
//  alert('Hi ' + x);
//  console.log(alert);
// let x = prompt('Enter you first name ?');
// let y = prompt ('enter you last name ?');
// alert('hi ' + y + " " + x);
// console.log(alert);
// let areasquare = prompt("Enter legth of the square: ");
// alert("The area square is " + areasquare*areasquare );
// console.log(alert)
// let areacircle = prompt("Enter length of the circle: ");
// alert("The area circle is " + areacircle*areacircle*3.14 );
// console.log(alert);
// let convert = prompt("Enter the temperature in Celius");
// alert(convert+"(C) = " + (convert*1.8) + 32 + "(F)");
// console.log(alert);

// let y = "baby";
// console.log(`${y +1}`)
// let a = Number('100');
// console.log(`${a*a}`);
// let x =String(23)
// console.log(x)

// bai 2 

// for(let x = 10; x < 15; x++) {
//     console.log(x)
// }


// for(let i = 0; i < 7; i++) {
//     console.log(i);
// }

// let y = prompt('enter your number')
// for(let x = 0; x < y; x++) {
//     console.log(x);
// }

// let a =prompt('enter first number ?');
// let b =prompt('enter second number ?');
// for(let i = a; i < b; i++){
//     console.log(i);
// }

// let a =Number(prompt("enter a"));
// let b =prompt('enter b');
// for(let i = a; i < b; i+=3){
//     console.log(i);
// }


// let x = Number(prompt("Enter x"));
// let y = prompt("Enter y ");
// let z = Number(prompt("Enter z"));
// for(let i = x; i < y; i+=z){
//   console.log(i);
// }

// let x =prompt('number x');
// let n =prompt('number n');
// if(x > n/2){
//     alert(x + " is in higher haif of " + n);
// }
// else if(x < n/2){
//     alert(x + " is in lower haif of " + n);
// }
// let x =prompt('Number x');
// if(x%2 == 0){
//     alert(x + " is an over number ");
// }
// else{
//     alert(x + " is an odd number ");
// }
    // for(let x=0; x<(6/2); x++)
    // {
    //     console.log('L');
    // }
    // for(let x=0; x<(6/2); x++)
    // {
    //     console.log('H');
    // }

// let totalNumber = prompt("Enter your number");
// let low = "L";
// let high = "H";
// let x = (totalNumber/2) - ((totalNumber%2)/2);
// for(let i =1; i <= x; i++){
//     console.log(low);
// }
// for(let i =1; i <= totalNumber - x; i++){
//   console.log(high);
// }

// let a =prompt('Enter number');
// if(a%2==0){

//     for(let i=0; i<a/2;i++)
//     {
//         console.log(0);
//         console.log(1);
//     }
// }
// else{
//     for(let i=0; i<(a/2-1);i++)
//     {
//         console.log(0);
//         console.log(1);
//     }
//     console.log(0);
// }

// let weight =prompt(' your weight ?');
// let height =prompt(' your height ?');
// height = height/100
// let BMI = alert('BMI' + (weight/(height*height)));
// if(BMI < 16)
// {
//     alert('You are severely underweight');
// }
// else(BMI >=16 &&BMI < 18.5)
// {
//     alert('You are underweight');
// }
// else if(BMI >=18.5 &&BMI < 25)
// {
//     alert('You are normal');
// }
// else if(BMI >=25 &&BMI < 30)
// {
//     alert('You are overweight');
// }
// else if(BMI > 30)
// {
//     alert('You are obese');
// }
   
// let weight = prompt("Enter your weigh in kg:");
// let height = prompt("Enter your height in cm:");
// height = height/100;
// let bmi = weight/(height*height);
// if(bmi < 16)
// {
//   alert("Your BMI = " + bmi);
//   alert("You are Severely underweight");
// }
// else if( 16 <= bmi < 18.5)
// {
//   alert("Your BMI = " + bmi);
//   alert("You are Underweight");
// }
// else if(18.5 <= bmi <25)
// {
//   alert("Your BMI = " + bmi);
//   alert("You are Normal");
// }
// else if(25<= bmi < 30)
// {
//   alert("Your BMI = " + bmi);
//   alert("You are Overweight");
// }
// else if(bmi >= 30)
// {
//   alert("Your BMI = " + bmi);
//   alert("You are Obese");
// }

// let a =prompt(' giai thua cua a : ');
// let x = 1;
// for(let i = 1; i <= a; i++){
//   x = x*i;
// }
// alert('giai thua cua' + a + 'is' + x );

// let low ="L";
// let high ="H";
// for(x = 1; x<=(6/2); x++)
// {
//   console.log(low);
// }
// for(x = 1; x<=(6/2); x++)
// {
//   console.log(high);
// }
// clear();
// function draw() {
//   let x = prompt("Enter number of polygons: ");
//   for (let i = 1; i <= x; i++) {
//     for (let j = 1; j <= i + 2; j++) {
//       fd(100);
//       rt(360 / (i + 2));
//     }
//   }
// }
// draw();

// let sequenceNumber = prompt("Enter a sequence of Numbers, separated by commas");
// let splitNumber = sequenceNumber.split(",");
// // preValue là giá trị trước
// // currentValue là giá trị hiện thời
// let totalSum = splitNumber.reduce((preValue, currentValue) => {
//     totalSum =Number(preValue) + Number(currentValue);
//     return totalSum;
// }, 0);
// alert("The sum of them is " + toalSum);