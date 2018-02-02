let tab = [1,2,3,4,5]
let state = []

let x = 0

let newTab = tab.map(elem => {
    console.log(x++)
    return elem *2
})

console.log(newTab)