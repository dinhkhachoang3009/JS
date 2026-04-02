// let massMark,massJohn,heightMark,heightJohn;
// massMark=78;
// heightMark=1.69;
// massJohn=92;
// heightJohn=1.95;
// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn / heightJohn ** 2;
// //const markHigherBMI = markBMI > johnBMI;

// console.log('Mark BMI:', markBMI);
// console.log('John BMI:', johnBMI);
// // console.log('Does Mark have a higher BMI than John?', markHigherBMI);
// if (markBMI>johnBMI) {
//     console.log(`Mark's BMI(${markBMI}) higher than John(${johnBMI})`);
// } else {
//     console.log(`John's BMI(${johnBMI}) higher than Mark(${markBMI})`);
// }

// let scoreD1=96,scoreD2=108,scoreD3=89;
// let scoreK1=88,scoreK2=91,scoreK3=110;
// const avgScoreD=(scoreD1+scoreD2+scoreD3)/3;
// const avgScoreK=(scoreK1+scoreK2+scoreK3)/3;

// console.log(`Average score of Dolphin is ${avgScoreD}`);
// console.log(`Average score of Koala is ${avgScoreK}`);
// if (avgScoreD===avgScoreK) {
//     console.log(`Tie`);
// }else if(avgScoreD>avgScoreK){
//     console.log(`Dolphin win`);
// }
// else {
//     console.log(`Koala win`);
// }


const bill=430;
const tip=bill>=50 && bill<=300? bill*0.15:bill*0.2;
console.log(`The bill was ${bill} , the tip was ${tip} and the total was ${bill+tip} `);