//Using Map Method
 
const array = [2,4,6,8];

function double(x){
    return x * 2;
}

function triple(x){
   return x * 3;
}

const output =array.map(double);
const output1 =array.map(triple);

console.log(output);
console.log(output1);

// list of fullname
// eg: balachandar
const users =[
      { firstName: "bala", LastName: "Chandar", age: 23 },
      { firstName: "pandu", LastName: "Ranga", age: 26 },
      { firstName: "Mani", LastName: "Kanta", age: 24 },
] ;

  function fullname(x){
      return x.firstName + x.LastName;
  }
     const output2 = users.map(fullname);
     console.log(output2);

