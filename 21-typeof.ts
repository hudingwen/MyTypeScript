console.log(typeof "hu")


let p = { x: 1, y: 2 }

function formatPoint(point: typeof p) {

}
function formatPoint2(point: { x: number, y: number }) {

}


formatPoint({ x: 1, y: 100 })
formatPoint2({ x: 1, y: 100 })
