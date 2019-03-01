
/*
    Destructuring array
*/

/*
    Scope: store comp4, comp5 in a 'd' variable
*/


let components = ['component1', 'component2', 'component3', 'component4', 'component5'];

let [a, b, c, ...d] = components;

console.log(d);