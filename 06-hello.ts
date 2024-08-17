console.log('hello ts')
let numbers: number[] = [1,3,4]
let numbers2: Array<number> = [1,3,5]
let b: boolean[] = [true,false,true] 
// 混合数组类型
let arr:(number | string)[] = [1,3,5,'a',8,'n']
console.log(numbers)
console.log(numbers2)
console.log(b)
console.log(arr)