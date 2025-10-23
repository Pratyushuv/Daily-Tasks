function NArgSum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (acc, cur) { return acc + cur; }, 0);
}
console.log(NArgSum(1, 2, 3, 4));
console.log(NArgSum(1, 2));
console.log(NArgSum(1, 2, 6, 9));
