#! /usr/bin/env node
import inquirer from  "inquirer"

const currency: any = {
    USD: 1, //base currency 
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.61,
    PKR: 277.30,
    JPY: 153.28,
    IR: 42075, 
    CY: 7.24,
    AUD: 1.54,
    HKD: 7.84 ,
    JD: 0.71 
};

    let user_answer = await inquirer.prompt(
    [
        {
        name: 'from',
        message: 'Enter from currency!',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'JPY', 'IR', 'CY', 'AUD', 'HKD', 'JD']
        },
        {
        name: 'to',
        message: 'Enter from currency!',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'JPY', 'IR', 'CY', 'AUD', 'HKD', 'JD']
        },
        {
            name:'amount',
            message: 'Enter your Amount!',
            type: 'number'
        }

    ]
)

  let fromAmount = currency[user_answer.from]
  let toAmount = currency[user_answer.to]
  let amount = user_answer.amount
  let baseAmount = amount / fromAmount // USD base currency 
  let convertedAmount = Math.floor(baseAmount * toAmount)  

  console.log(convertedAmount);

  