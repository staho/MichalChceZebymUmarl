/*
 * jest funkcja printAsync zwracajaca promisa ktory po jakims losowym czasie zwroci to co funkcja dostala w argumencie.
 
 zadanie polega na tym zeby wypisac 1,2,3 zachowujac kolejnosc, tak szybko jak sie da

np.: rozwiazalo sie juz 1 i 2, ale nie 3 - wypisujesz 1 i 2, czekasz na 3, wypisujesz 3
rozwiazalo sie juz 1 i 3, ale nie 2 - wypisujesz 1, czekasz na 2, wypisujesz 2 i 3
 */

// tego nie zmieniaj
function printAsync(str) {
	return new Promise(resolve => {
  	setTimeout(() => resolve(str), Math.random() * 1000)
  })
}
//mój kot 🐱

let promise1 = printAsync(1)
let promise2 = printAsync(2)
let promise3 = printAsync(3)

promise1.then(console.log)
        .then(() => promise2.then(console.log))
        .then(() => promise3.then(console.log))
