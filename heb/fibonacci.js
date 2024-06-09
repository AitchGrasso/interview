// Make a function that can read the data and find the fibonacci number. N can be any number (in this case 5 and 12) but the program should find the F in F(n).  

// BOILERPLATE
        // process.stdin.resume();
        // process.stdin.setEncoding('utf8');

        // let stdin = '';
        // process.stdin.on('data', (chunk) => {
        // stdin = `${stdin}${chunk}`;
        // }).on('end', () => {
        //   const lines = stdin.trim().split('\n');
        //   for (const line of lines) {
        //     process.stdout.write(`${line}\n`);
        //   }
        // });

// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. F(n) = F(n-1) + F(n-2).
// The Fibonacci number can be found in 3 ways: Iterative (the most efficient), using recursion (literally exponentially less efficient), and memoization (more efficient than recursion as to cache results) or matrix exponentiation (very efficient for large n). For the purpose of this interview, I will be using the iterative solution. 

// 1. Iterative: If F(0) = 0, and F(1)=1 ...? Initialize both and then iterate to the nth number. In a loop, calculate the Fibonacci number as the sum of the previous two and then shift the numbers. 

// function _iterative(n){
//     // Case: n is 0 or 1, in which case, F is 0 or 1 respectively. 
//     if(n == 0){
//         return 0
//     }
//     else if(n == 1){
//         return 1
//     }

//     // A and B variable to store each step
//     let a = 0 
//     let b = 1

//     // Loop to iterate through each step. This loop will continue to push b to a and the tempN (value) to b. This will continue until i (steps which starts at 2) exceeds the n parameter. 
//     for (let i = 2; i <= n; i++){
//         let tempN = a + b
//         a = b
//         b = tempN
//     }
//     return b
// }

// 2. Changing our boilerplate:

process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin = '';
process.stdin.on('data', (chunk) => {
  stdin = `${stdin}${chunk}`;
}).on('end', () => {
    const n = parseInt(stdin.trim(), 10)  // removes whitespace and turns stdin into an integer of base 10. 
    const fibonacci = (num) => {
        if (num < 0 ){
            return 'Invalid Input' // Edge case: Non-acceptable input 
        }
        else if(num === 0){
            return 0
        }
        else if(n === 1){
            return 1
        }
    
        // A and B variable to store each step
        let a = 0 
        let b = 1
    
        // Loop to iterate through each step. This loop will continue to push b to a and the tempN (value) to b. This will continue until i (steps which starts at 2) exceeds the n parameter. 
        for (let i = 2; i <= n; i++){
            let tempN = a + b
            a = b
            b = tempN
        }
        return b
    }
    const result = fibonacci(n);
    process.stdout.write(`${result}\n`);
});