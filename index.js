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
    // 1. Ask for name and amount
    // 2. Push to expenses array
    // 3. Call mainMenu() again
    } 
    else if (choice.action === 'View Expenses') {
        // 1. Loop through expenses and console.log them
        // 2. Call mainMenu() again
    } 
    else if (choice.action === 'Show Total') {
        // 1. Calculate total
        // 2. Call mainMenu() again
    } 
    else {
        console.log('Goodbye, Crufus!');
        process.exit();
    }
}

// Start the app for the first time
mainMenu();
