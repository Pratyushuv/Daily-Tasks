front = 0;

const getQueue = {
  arr: [1, 2],
  enQueue: function (element) {
    this.arr.push(element);
    return this.arr;
  },
  deQueue: function () {
    const del = this.arr.shift();
    return del;
  },
  peek: function () {
    return this.arr[front];
  },
  isEmpty: function () {
    if (this.arr.length === 0) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(getQueue.enQueue(3));
console.log(getQueue.deQueue());
console.log(getQueue.arr);

console.log(getQueue.peek());

console.log(getQueue.isEmpty());
