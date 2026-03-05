import inquirer from 'inquirer';
const expenses = [];

async function mainMenu(){
    const choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'what would you like to do?',
            choices:['Add Expense', 'View Expenses', 'Show Total', 'Exit'],
        }
    ])

    if (choice.action === 'Add Expense') {
         const detailsOfExpense = await inquirer.prompt([
            {
                name: 'name',
                message: 'What did you buy?',
            },
            {
                name: 'amount',
                message: 'How much did it cost?',
            }
        ]);

        // Convert string to a float number
        const numericAmount = parseFloat(detailsOfExpense.amount);
        
        // Add to the global array
        expenses.push({name:detailsOfExpense.name, amount:numericAmount })

        console.log('Expense added successfully!');
    
        // CRITICAL: Call the menu again to keep the app alive
        await mainMenu();
    
    } 
    else if (choice.action === 'View Expenses') {
        console.log('\n--- Your Expenses ---');

        if(expenses === 0){
            console.log("No expenses recorded yet");
        }
        else {
            expenses.forEach((item, index) => {
                console.log(`${index + 1}. ${item.name}: ₦${item.amount.toFixed(2)}`);
            });
        }

        console.log('---------------------\n');

        // Bring back the menu!
        await mainMenu();
    } 
    else if (choice.action === 'Show Total') {
        // 1. Calculate total
        // 2. Call mainMenu() again
    } else {
        console.log('Goodbye, Crufus!');
        process.exit();
    }
}

// Start the app for the first time
mainMenu();
