// using filter method 
//printing odd number :

const array = [1,2,3,4,5,6,7,8,9,10];
 
function oddnumber(x){
    return  x %2!=0;
}
function evennumber(y){
    return y%2==0;
}
const output1 = array.filter(evennumber); 
const output = array.filter(oddnumber);
console.log(output);  
console.log(output1);


// finding the 1stname whose name is less than 24

const users =[
    { firstName: "bala", LastName: "Chandar", age: 23 },
    { firstName: "pandu", LastName: "Ranga", age: 26 },
    { firstName: "Mani", LastName: "Kanta", age: 24 },
    { firstName: "phani", LastName: "kumar", age: 23 },
] ;  
    function names(x){
     if(x.age<24){
        return x.firstName
     }
    }
    const output2 = users.filter(names);
    console.log(output2);
 