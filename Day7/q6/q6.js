var direction;
(function (direction) {
    direction["UP"] = "you moved up";
    direction["DOWN"] = "you moved down";
    direction["LEFT"] = "you moved left";
    direction["RIGHT"] = "you moved right";
})(direction || (direction = {}));
function getDirection(dir) {
    return dir;
}
console.log(getDirection(direction.UP));
