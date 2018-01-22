//the objective is to write translation from java to js without using JS Classes
// class Test {
//     private name = 'Something';
  
//     public getName() {
//       return name;
//     }
//   }

 let Test = () => {
    let name = "Something"

    return {
        getName: () => {return name},
        setName: (sth) => {this.name = sth}
    }
}
    

let x = Test()
console.log(x.getName())
