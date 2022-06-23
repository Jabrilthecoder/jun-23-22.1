'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// 159 

const account1 = {
  owner: 'Jabril Abdilahi',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//160
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//164
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements)
 {if(movement > 0) 
  {console.log(`You deposited ${movement}`);}
   else
    {console.log(`You withdrew ${Math.abs(movement)}`)};

//165
movements.forEach(function(movement) {
if (movement > 0) {
  console.log(`You depotsited ${movement}`);
}else { 
  console.log(`You withdrew ${Math.abs(movement)}`);
}
});



/////////////////////////////////////////////////
//167
let arr = ['a','b','c','d','e']

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log(arr.slice(...arr));
//162
// SPLICE 
arr.splice(-1);
console.log(arr)
arr.splice(1,2); 
console.log(arr);

//REVERSE

//166
arr['a','b','c','d','e']
const arr2 = ['j','i','h','g', 'f'];
console.log(ARR2.REVERSE());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);

//JOIN
console.log(letters.join(' - '));

//161
const arr = [23,11,64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last arry element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-1));

console.log('jonas'.at(-1));

//Set
 const currenicesUnique = new Set (['USD'],'GBP','USD','EUR','EUR');
console.log(currenciesUnique);
currenciesUnique.forEach;
 }


 //170
  
 console.log(23 ===  23.0)

 console.log(0.1 + 0.2);
 console.log(0.1 + 0.2 === 0.3);

 console.log(Number.parseInt('2.5rem'))
 console.log(Number.parseFloat('2.5rem'));

 console.log(Number.isNaN(20));
 console.log(Number.isNaN('20'));
 console.log(Number.isNaN(+'20'));
 console.log(Number.isNaN(23 / 0 ));

 console.log(Number.isFortnite(20));
 console.log(Number.isFortnite('20'));
 console.log(Number.isFortnite(+'20'));
 console.log(Number.isFortnite(23 / 0 ));

 console.log(Number.isInteger(23));
 console.log(Number.isInteger(23.0));

 //171

 console.log(Math.sqrt(25));
 console.log(25 ** (1/2));
 console.log(8 ** 1);

 console.log(Math.max(5, 18, 23, 11, 2))

//172
 console.log(5 % 2);
 console.log( 5 /2);
 
 console.log(8 % 3);
 console.log( 8 / 3);

 console.log(6 % 2);
 console.log( 6 /2);


 console.log(7 % 2);
 console.log( 7 /2);

 const isEven = n => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

[...document.querySelectorAll('.movements_row')].forEach(function (row, i) { 
  if (i % 2 === 0) row.style
})


// 173
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee = 15_00;
const transferFee = 1_500;

const PI = 3.1415;
console.log(PI);
