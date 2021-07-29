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
    for(let i = 1; i <= num; i++) {
        sum *= i;
    }
    return  sum;
}

console.log(factorNumber(10));

// Задача 3

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

function packPaper() {
    let perWeek = (weeksAmount * consumptionPerWeek) / sheetsInReamPaper;
    if (perWeek % 1 == 0) {
        return perWeek;
    } else {
        return perWeek - (perWeek % 1) + 1;
    }
}

console.log(packPaper());

// Задача 5

function pyramid(n) {
    for(let i = 1; i <= n; i++){
      let dash = '-'.repeat(n - i);
      let sharp = '#'.repeat(i * 2 - 1);

      console.log(dash + sharp + dash);
    }
}
pyramid(8);