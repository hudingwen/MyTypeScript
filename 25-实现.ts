interface Single {
    sing(): void
}

class Person implements Single {
    sing(): void {
        console.log("hello")
    }
}