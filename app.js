//Q1

//map
// let ar=[2,3,4,5];
// function power(num){
// return num*num;
// }
// let newar=ar.map(power);

// console.log(newar);
//forEach
// let ar1=[2,3,4,5];
// function power1(num){+
// console.log(num*num);
// }
// ar1.forEach(power1)
//for
// let ar2=[2,3,4,5];
// for(let i=0;i<ar2.length;i++){
//     ar2[i]*=ar2[i];
// }
// console.log(ar2)

///////////////////////////////////////////////////
//Q2


// let arr=[1,2,3,4,"Rawan","anfal"];
// function returns(x){
    
// if(typeof x === "number"){
// if(x%2===0)
//     return "even";

// else
// return "odd";}
// else{
// return "N/A";
// }
// }
// let result=arr.map(returns);
// console.log(result);


/////////////////////////
//Q3


// let stringar= ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
// let n=[]
// function names(str){
// n.push(str);
// }
// stringar.forEach(names);
// console.log(n);


/////////////////////////
//Q4
let a=[9,18,15,25,4]
function fizzbuzz(num){
if(num %5==0&&num%3==0)
return  "Fizz Buzz"
else if(num%3==0)
return "Fizz"
else if(num %5==0)
return  "Buzz"
else 
return num;

}
let b=a.map(fizzbuzz);
console.log(b);