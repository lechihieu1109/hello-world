// let a = 5;
// let b =6;
// console.log("a = " + a + " b = " + b);
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log("a = " + a + " b = " + b);
// const s = "hello beauty there";
// let a = s.split(" ");
// console.log(a);
// let subjects = ["Philosophy", "Data structures and algorithms", "Algebra"];
// console.log(...subjects);
// let subjectsCopy = [...subjects];
// console.log(subjectCopy);
// ##

// let listItem = ["quan", "ao", "nonla"];
// let htluachon = ["c", "r", "u", "d"];
// while (true) {
//     let userChoice = String(prompt("chao mung ban den voi shop LCH , Ban muon gi (c, r, u, d)"));
//     if (userChoice == htluachon[0]) {
//         console.log("shop LCH hien co : ");
//         for (let i = 0; i < listItem.length; i++) {
//             console.log(i + 1 + ". " + listItem[i]);
//         }
//         break;
//     }
//     else if (userChoice == htluachon[1]) {
//         let newItem = prompt(" Moi ban nhap do moi : ");
//         listItem = listItem.push(newItem);
//         alert("Done");
//         console.log(listItem);
//     }
//     else if (userChoice == htluachon[2]) {
//         let positionItem = prompt('ban muon update vi tri nao');
//         listItem[positionItem] = newname;
//         alert("Done");
//         console.log(listItem);
//     }
//     else if (userChoice == htluachon[3]) {
//         let positionDelete = prompt("Ban muon xoa mon do nao ");
//         listItem.splice(positionDelete, 1);
//         console.log(listItem);
//     }
//     else {
//         alert(" shop het hang ban nhe ");
//     }
// }
// let size = [5, 7, 300, 90,24, 50, 75];
// let x = size[0];
// for(let i = 0; i < size.length; i++){
//       size[i] = size[i]+50;

// }
// console.log(size);
//console.log("Now my biggest sheep has size " + x + ", let's shave it ");


// const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
// let len = 25;
// for(let i = 0; i < colors.length; i++){
//     color(colors[i]);

//     for(let j = 0; j < 4;j++){

//         fd(len*(i+1));
//         rt(90);
//     }
// } 
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'    
// };
// for (let prop in product) {
//     console.log(`${prop}: ${product[prop]}`);
// };

// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
//     const {subject, createdBy, assignTo, dueDate, expectedHours} = task
//     console.log(subject, createdBy);
// let devxx = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// };
// console.log('4.1');
// alert("Hi there,this is dev dictiornary");
// let user = prompt("Enter the keyword");
// let x = ['debug', 'done', 'defect', 'pm', 'ui/ux'];
// if(user == x[0]){
//     alert(user + " " + devxx.debug);
// }else if(user == x[1]){
//     alert(user + " " + devxx.done);
// }else if(user == x[2]){
//     alert(user + " " + devxx.defect);
// }else if(user == x[3]){
//     alert(user + " " + devxx.pm);
// }else if(user == x[4]){
//     alert(user + " " + devxx['ui/ux'])
// }else if(user != x){
//     let i = prompt("We could not find your word : " + user + ", leave your explanation ");
//     devxx[user] = i;
//     alert("Done");
//     let a = prompt("Enter the keyword");
//     alert(i);
// }

const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
    };

penup();
rt(90);
fd(circle.x);
lt(90);
fd(circle.y);
pendown();
 fd(circle.radius);
for (let i = 0; i < 360; i++) {
    rt(2);
    fd(2);
}