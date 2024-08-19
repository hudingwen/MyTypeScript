function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

getProp({ name: 'java', age: 18 }, "name")
getProp({ name: 'java', age: 18 }, "age")
// 错误的演示
// getProp({ name: 'java', age: 18 }, "age2")