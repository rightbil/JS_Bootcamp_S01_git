
//  let name = "Ilya";

//  console.log( `hello ${1}` ); // ?

//  console.log( `hello ${"name"}` ); // ?

//  console.log( `hello ${name}` ); // ?

// Objective :
// To pass any javascript data type into a function and evaluate the datatype's conversion value. 
function printArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
 let a = arr[i] // "undefined"
 let s = String(a);
 let b = Boolean(a);
 let n = Number(a);
 let d= Date(a);
 //let M= Math(a);
 let smbl= Symbol(a);
 const objects = [
   { "Given Value": a,    cast: `String(${a})`,   result: s,     typeof: typeof(s) },
   { "Given Value": a,    cast: `Boolean(${a})`,  result: b,     typeof: typeof(b) },
   { "Given Value": a,    cast: `Number(${a})`,   result: n,     typeof: typeof(n) },
   { "Given Value": a,    cast: `Date(${a})`,      result: d,    typeof: typeof(d) }
   ];
console.table(objects)
 }
  }
  
  const dataTypes = ['js class','10n', 100,10.36,-200.36, null, undefined,NaN,0, false, true, Infinity, {}, Array(),function(){}];
  
  printArrayItems(dataTypes);




