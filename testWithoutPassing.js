// The objective is to make function bellow working, without passing anything to function
// function test() {
//     console.log(this.name)
// }  
// let obj = {
//     name: 'Something'
// }

function test() {
    console.log(this.name)
}
  
let obj = {
    name: 'Something'
}