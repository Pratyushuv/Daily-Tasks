enum direction {
  UP = "you moved up",
  DOWN = "you moved down",
  LEFT = "you moved left",
  RIGHT = "you moved right",
}

function getDirection(dir: direction): string {
  return dir;
}

console.log(getDirection(direction.UP));
