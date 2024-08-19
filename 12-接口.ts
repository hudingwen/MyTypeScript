//接口
interface IPerson {
  name: string
  age: number
  sayHi(): void
}
//类型别名
let person: IPerson = {
  name: '李老师',
  age: 18,
  sayHi() { }
}

let person2: IPerson = {
  name: '胡老师',
  age: 20,
  sayHi() { }
}
