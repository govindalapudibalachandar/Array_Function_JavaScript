//Using Reduce method
const number = [1,-1,2,3,15];

const sum = number.reduce((accumulator,currentvalue) => {
return accumulator + currentvalue;
},5);
console.log(sum);

//finding the age repeted times in given arraya

const users =[
    { firstName: "bala", LastName: "Chandar", age: 23 },
    { firstName: "pandu", LastName: "Ranga", age: 26 },
    { firstName: "Mani", LastName: "Kanta", age: 24 },
    { firstName: "phani", LastName: "kumar", age: 23 },
] ;

  // age = {23:2, 26:1, 24:1}
const output = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age]=1;
    }
    return acc;
} , {});
console.log(output);