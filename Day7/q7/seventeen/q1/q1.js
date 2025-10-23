function ReturnSum(num) {
    var sum = 0;
    num.forEach(function (n) {
        console.log(n);
        var number = parseInt(n.join(""));
        sum = sum + number;
    });
    return sum;
}
console.log(ReturnSum([
    [1, 2, 3],
    [0, 7],
]));
