
/*
    Destructuring - the most used feature of ES2015
    Example 1: extracting properties from an object
*/
let cars = {
    item1: 'Benz E-Klasse 2014',
    item2: 'Jaguar XF 2019',
    item3: 'Benz CLS 250 4Matic 2014'
};

/*
Scope:
With destructuring we can tear apart individual pieces of an object and store them as separate variables
*/

let { item1, item2 } = cars; //we declare item1, item2 as new variables -- out of cars
console.log(item1);

//we can even declare a new variable 'cls' for the existing 'item3' if we want
let { car1, car2, item3: cls } = cars;
console.log(cls);