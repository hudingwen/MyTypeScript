// let person: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
//   name: '李老师',
//   age: 18,
//   sayHi() {

//   },
//   greet(name) {

//   }
// }
let person: {
  name: string
  age: number
  // sayHi(): void
  sayHi: () => void
  greet(name: string): void
} = {
  name: '李老师',
  age: 18,
  sayHi() { },
  greet(name) { }
}