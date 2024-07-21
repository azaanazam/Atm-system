#! /userbin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number"
    }
]);
//  ===   12345  - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Current Account", "Savings Account"]
        }
    ]);
    //console.log(operationAns);
    if (operationAns.operation === "Current Account") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        // =, -=, +=
        amountAns.amount;
        myBalance -= amountAns.amount;
        console.log("your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "Savings Account") {
        console.log("yourbalance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
