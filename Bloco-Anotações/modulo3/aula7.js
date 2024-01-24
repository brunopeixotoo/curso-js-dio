
function soma(x) {
    return function(y) {
        return x + y;
    }
}

console.log(soma(10)(20))