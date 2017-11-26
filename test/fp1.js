/**
 * 如果还有人想使用这个 函数就可以复用了
 */

// const ary = [1, 2, 3];
// const arr = [];
// var fn1 = (item, index) => {
//   arr.push(item*2)
// }
// ary.forEach(fn1)
// console.log('arr',arr)

/**
 * 命令式
 */
// var array = [1,2,3] 
// for (var index = 0; index < array.length; index++) {
//   var element = array[index];
//   console.log('element',element);
// }
/**
 * 将程序进行不断的拆分，抽象成函数并组装起来；
 * 1：可变部分进行封装
 * 2：不可变部分进行隔离
 */



 /**
  * filter map reducer every some 接受一个函数为参数然后进行处理
  */

[1,2].map((item)=>{
  return  item * 2
  // console.log('item',item);
})
const array = [1,2].map((item)=>(item*2))
console.log('array',array);







