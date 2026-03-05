import inquirer from 'inquirer';
const expenses = [];

async function mainMenu(){
    const choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: '\nWhat would you like to do?\n',
            choices:['Add Expense', 'View Expenses', 'Show Total', 'Exit'],
        }
    ])

    if (choice.action === 'Add Expense') {
         const detailsOfExpense = await inquirer.prompt([
            {
                name: 'name',
                message: '\nWhat did you buy?\n',
            },
            {
                name: 'amount',
                message: '\nHow much did it cost?\n',
                validate: function(value) {
                    const valid = !isNaN(parseFloat(value)) && parseFloat(value) > 0;
                    return valid || 'Please enter a valid positive number';
                }
            }
        ]);

        const numericAmount = parseFloat(detailsOfExpense.amount);
        expenses.push({name:detailsOfExpense.name, amount:numericAmount })

        console.log('\nExpense added successfully!\n');
        await mainMenu();
    } 
    
    else if (choice.action === 'View Expenses') {
        console.log('\n--- Your Expenses ---');

        if(expenses.length === 0){
            console.log("No expenses recorded yet");
        }
        else {
            expenses.forEach((item, index) => {
                console.log(`${index + 1}. ${item.name}: ₦${item.amount.toLocaleString('en-NG', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
            });
        }

        console.log('---------------------\n');
        await mainMenu();
    } 
    
    else if (choice.action === 'Show Total') {
        function calculate(accumulator, curr) {
            const amount = isNaN(curr.amount) ? 0 : curr.amount;
            return accumulator + amount;
        }

        const total = expenses.reduce(calculate, 0);
        console.log(`\nThe total is : ₦${total.toLocaleString('en-NG', {minimumFractionDigits: 2, maximumFractionDigits: 2})}\n`);
        await mainMenu();
    } 
    
    else {
        console.log('\nGoodbye, Crufus!');
        process.exit();
    }
}

mainMenu();