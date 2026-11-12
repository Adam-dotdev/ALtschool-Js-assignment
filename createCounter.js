function createCounter() {
  let count = 0;
  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    get value() {
      return count;
    },
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value); // 1
console.log(counter.count); // undefined — not directly accessible
