"use strict";

// let hasDriversLicense=false;
// const passTest=true;

// if(passTest){hasDriversLicense=true;}
// if(hasDriversLicense) console.log('i can drive');

// const private='Audio';

// function logger(){
//     console.log('My name is Jonas');
// }

// logger();
// logger();

// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice=`Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice=fruitProcessor(5,0);
// console.log(appleJuice);

//Function Declaration,can be call before define
// function calcAge1(birthYear){
//     return 2037-birthYear;
// }
// const age1=calcAge1(2005);

// //Function Expression,can't be call before
// const calcAge2=function (birthYear){
//     return 2037-birthYear;
// }
// const age2=calcAge2(2005);
// console.log(age1,age2);

// Arrow function
// const calcAge3 = birthYear=>2037-birthYear;
// const age3=calcAge3(2005);
// console.log(age3);

// const yearLeft=(birthYear,firstName)=>{
//     const age=2037-birthYear;
//     const retire=65-age;
//     return `${firstName} retire in ${retire} years`;
// }

// console.log(yearLeft(2005,'Hoang'));

//

// const calcAge=function(birthYear){
//     return 2037-birthYear;
// }

// const yearLeft=function(birthYear,firstName){
//     const age=calcAge(birthYear);
//     const retire=65-age;
//     if(retire>0){
//         return retire;
//     }else{
//         console.log(`${firstName} has retired`);
//         return -1;
//     }
//     //return retire;
//     //return `${firstName} retire in ${retire} years`;
// }
// console.log(yearLeft(2005,'Hoang'));
// console.log(yearLeft(1960,'NgocAnh'));

// const year=new Array(1991,1992,1993,2020);
// const friend=['Michael','Hoang','Peter'];
// console.log(friend);
// console.log(friend[1]);

// console.log(friend.length);
// console.log(friend[friend.length-1]);

// friend[2]='Jack';
// friend[5]='Jason';
// console.log(friend);
// const hoang=['Hoang',year[3],2026-year[3],friend];
// console.log(hoang);

// const calcAge=function(birthYear){
//     return 2037-birthYear;
// }
// const years=[1990,1967,1999,2005,2018];

// const ages=[calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])]
// console.log(ages);

// const friends=['Michael','Hoang','Peter'];

// //Add element
// friends.push('Jay');
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// //Remove element
// friends.pop();//Last
// const popped=friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Hoang'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Hoang'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Hoang')){
//     console.log('You have a Hoasng');
// }

//Object
// const jonas={
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     age:2037-2005,
//     job:'teacher',
//     friends:['Michael','Peter','Steven']
// }
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey='Name';
// console.log(jonas['first'+nameKey]);
// console.log(jonas['last'+nameKey]);

// const interestredIn=prompt('What do you want to know abt Jonas?')
// console.log(interestredIn);
// console.log(jonas.interestredIn);//Failed
// console.log(jonas[interestredIn]);

// if(!jonas[interestredIn]){
//     console.log(`${interestredIn} is undefinerd`);
// }

// jonas.location='VietNam';
// jonas['twitter']='@jonas';
// jonas.job='Pilot';
// console.log(jonas);

// //Challenge
// console.log(`Jonas has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);

// const jonas={
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     birthYear:2005,
//     job:'teacher',
//     friends:['Michael','Peter','Steven'],
//     hasDriversLicense:true,

//     // calcAge: function(birthYear){
//     //     return 2037-birthYear;
//     // }
//     // calcAge: function(){
//     //     //console.log(this)
//     //     return 2037-this.birthYear;
//     // }

//     calcAge: function(){
//         this.age=2037-this.birthYear;
//         return this.age;
//     },
//     getSummary:function(){
//         if(this.hasDriversLicense) console.log(`${this.firstName} is a ${this.age}-year olds ${this.job} and he has driver license`);
//         else console.log(`${this.firstName} is a ${this.age}-year olds ${this.job} and he dont has driver license`);
//     },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());

// console.log(jonas['calcAge'](1991));

//

// const jonas=[
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven'],
//     true
// ];

// const types=[];

// for(let i=0;i<jonas.length;i++){
//     console.log(jonas[i],typeof jonas[i]);
//     //types[i]=typeof jonas[i];
//     types.push(typeof(jonas[i]));
// }
// console.log(types);
// const years=[1991,2007,1969,2021];
// const ages=[];
// for(let i=0;i<years.length;i++){
//     ages.push(2037-years[i]);
// }

// console.log(ages);

// console.log('---ONLYSTRING---')
// for(let i=0;i<jonas.length;i++){
//     if(typeof jonas[i]!=='string') continue;
//     console.log(jonas[i],typeof jonas[i]);
// }

// console.log('---BREAK WITH NUMBERS---')
// for(let i=0;i<jonas.length;i++){
//     if(typeof jonas[i]==='number') break;
//     console.log(jonas[i],typeof jonas[i]);
// }

// for(let rep=0;rep<=10;rep++){
//     console.log(`Lifting weight rep ${rep}`);
// }

// let rep=1;
// while (rep<=10){
//     //console.log(`Lifting weight rep ${rep}`);
//     rep++;
// }

let dice = Math.ceil(Math.random() * 6);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.ceil(Math.random() * 6);
  if (dice === 6) console.log("Congrats,you get 6");
}
while (true) {
  console.log(`You rolled a ${dice}`);
  if (dice === 6) {
    console.log("Congrats,you get 6");
    break;
  }
  dice = Math.ceil(Math.random() * 6);
}
