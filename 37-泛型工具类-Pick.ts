interface Props {
  id: string,
  title:string,
  children: number[]
}
type PickProps = Pick<Props,'id'|'title'>

let p1: Props = {
  id: '',
  children: [1],
  title:'1'
}
let p2: PickProps = {
  id: '',
  title:'1'
}
 