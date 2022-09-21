// MSK Javascript Bootcamp
console.clear();

function myFun(a, b, ...moreArgs) {
    console.log('a', a);
    console.log('b', b);
    console.log('moreArgs', moreArgs);
}
myFun(1,2,3,4,5,6)