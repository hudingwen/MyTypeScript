// class GernericNumber<NumType> {
//   defaultValue: NumType
//   add: (x: NumType, y: NumType) => NumType
// }

// const myNum = new GernericNumber<number>()
// myNum.defaultValue = 10

class GernericNumber<NumType> {
  defaultValue: NumType
  add: (x: NumType, y: NumType) => NumType
  constructor(value: NumType) {
    this.defaultValue = value
  }
}

const myNum = new GernericNumber(100)
myNum.defaultValue = 10