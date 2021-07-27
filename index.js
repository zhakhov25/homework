// Задача 1

const amountFizzBuzz = num => {
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0) {
            console.log('FizzBuzz');
        } else if(i % 2 === 0) {
            console.log('Buzz');
        }
        else {
            console.log('Fizz');
        }
    }
  }
  
amountFizzBuzz(10);

// Задача 2

const factorNumber = num => {
    let sum = 1;
    debugger;
    for(let i = 1; i <= num; i++) {
        sum *= i;
    }
    return  sum;
}

console.log(factorNumber(10));