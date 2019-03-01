
/*
    Destructuring default function
*/

/*
    Scope: store comp4, comp5 in a d variable
*/


function fetchData({ url, method = 'post' }, callback) {
    callback(url, method);
}

fetchData({url: 'myfav.com'}, function(url, method) {
    console.log(url, method);
});

fetchData({url: 'myfav.com', method: 'put' }, function(url, method) {
    console.log(url, method);
});

