
/*
   Destructuring nested obj
*/

/*
? Scope: extract title out of childObj & store it as a new var renamed to childTitle
*/

let parentObj = {
    title: 'Megatron',
    childObj: {
        title: 'Bumblebee'
    }
}

let { title, childObj: { title: childTitle } } = parentObj;

console.log(childTitle);