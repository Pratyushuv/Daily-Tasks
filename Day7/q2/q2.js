function greet(name, greet) {
    if (greet === void 0) { greet = "hello"; }
    return greet + " " + name;
}
console.log(greet("pratyush", "hi"));
