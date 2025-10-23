function IsPrime(num) {
    if (num <= 1)
        return false;
    for (var i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(IsPrime(7));
console.log(IsPrime(10));
console.log(IsPrime(29));
