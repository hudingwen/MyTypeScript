class Person {
    // 不约束就是any类型
    // age
    age: number
    gender = '男'

    constructor(age: number, gender: string) {
        this.age = age
        this.gender = gender
    }
}

const p = new Person(10, '女') 