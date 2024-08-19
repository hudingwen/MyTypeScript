interface ILength { length: number }
function id<Type extends ILength>(value: Type): Type {
  return value
}

id(['1'])
id([1])
id("")
id({ length: 1 })
// 错误演示
// id(123)
