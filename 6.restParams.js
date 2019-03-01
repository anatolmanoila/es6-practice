
/*
    1.Rest Parameters
*/
function logLikes(name, fruit) {
    console.log(`${name} really likes ${fruit}`);
}


let arr = ['Ana', 'Mango'];

//pass values from array arr as parameters to logLikes fn
logLikes(...arr);

