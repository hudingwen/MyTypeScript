interface Person {
    name: string
}

interface Contact {
    phone: string
}

type PersonDetail = Person & Contact

let obj: PersonDetail = {
    name: '老李',
    phone: '10086'
}