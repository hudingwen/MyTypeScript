interface Props {
  id: string
  children: number[]
}
type ReadonlyProps = Readonly<Props>

let p1: Props = {
  id: '',
  children: [1]
}
let p2: ReadonlyProps = {
  id: '',
  children: [1, 3]
}

p1.id = "1"
// 无法赋值
// p2.id = "1"
