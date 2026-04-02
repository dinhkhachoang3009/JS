'use strict';
// const calcAvg=(p1,p2,p3)=>(p1+p2+p3)/3;

// const avgD=calcAvg(44,23,71);
// const avgK=calcAvg(65,54,49);

// const checkWinner=function(avgDolphins,avgKoalas){
//     if(avgKoalas>avgDolphins*2) console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     else if(avgDolphins>avgKoalas*2) console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     else console.log(`Draw`);
// }
// checkWinner(avgD,avgK);

// 
// 

const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[],totals=[];
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
for(let i=0;i<bills.length;i++){
    //tips[i]=calcTip(bills[i]);
    tips.push(calcTip(bills[i]));
    totals[i]=tips[i]+bills[i];
}
console.log(tips);
console.log(totals);

const calcAverage=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage(tips));
