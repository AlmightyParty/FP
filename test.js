const fn1 = (content) => console.log(`${content}44`);
const fn2 = (content) => console.log(`${content}55`)
// compose 从右到左 pipe 从左到右
const pipe = (...fns) => (content) => fns.reduce((prev, next) => next(prev), content)
console.log(pipe(fn1, fn2)(10)); 