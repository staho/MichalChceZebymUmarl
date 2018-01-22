//the objective is to write translation from java to js without using JS Classes
// class Test {
//     private name = 'Something';
  
//     public getName() {
//       return name;
//     }
//   }

 Test = (() => {
    let name = "Something"

    return {
        getName: () => {return name}
    }
})
    

x = Test()
console.log(x.getName())