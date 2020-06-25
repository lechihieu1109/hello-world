let a = 5;
let b =6;
console.log("a = " + a + " b = " + b);
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("a = " + a + " b = " + b);
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
//         let positionItem = prompt(ban, muon, update, vi, tri, nao);
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
// h1
