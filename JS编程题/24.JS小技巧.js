// 1.有条件的给对象添加属性
console.log('----------------1----------------')
const a = true;
const p = {
  id: 1,
  name: 'Kylin',
  ...(a && { age: 21 }) // a为true才可以添加属性
}
console.log(p)

// 2.访问数组最后一个元素
console.log('----------------2----------------')
const arr = [1, 2, 3, 4, 5]
console.log(arr[arr.length -1]) // 5 变量名很长时不建议使用
// 通过传递负索引，从右往左定位到最后一个元素：
console.log(arr.slice(-1)[0]) // 5

// 3.对象的遍历
console.log('----------------3----------------')
const three = ['1', '2', '3', '4']
const objThree = {
  a: 'a',
  b: ['d', 'c'],
  1: '12'
}
// Object.keys() 返回的是数组形式的key Object.values 与之相反
console.log(Object.keys(three), 'keys')
console.log(Object.keys(objThree), 'keys') // [ '1', 'a', 'b' ] keys
// Object.entries() 返回的是数组形式的键值对
console.log(Object.entries(three), 'entries')
console.log(Object.entries(objThree), 'entries') // [ [ '1', '12' ], [ 'a', 'aa' ], [ 'b', [ 'd', 'c' ] ] ] entries
/**
 * Object.keys() 和 Object.entries()一样，
 * 如若下标是数字，则按数字大小排列
 * 如若下标是字母，则按出现的顺序排列
 */

// 用 Object.keys 或者 Object.entries 转成数组就可以用数组方法遍历了，而且遍历的是自身属性，不会遍历到原型上。
 Object.keys(objThree).forEach(key => {
  console.log(key, 'Object.keys()对象遍历')
})

Object.entries(objThree).forEach(([key, val]) => {
  console.log([key, val], 'Object.entries对象遍历')
  console.log(key, 'Object.entries对象遍历key')
  console.log(val, 'Object.entries对象遍历val')
})

// 4.使用includes简化if判断 或逻辑
console.log('----------------4----------------')
const a = 3
if (a === 1 || a === 2 || a === 3 || a === 4) {
  // ...
}
// includes() 方法用来判断一个数组是否包含一个指定的值
if ([1, 2, 3, 4].includes(a)) {
  // ...
}
