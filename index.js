import inquirer from 'inquirer';
const expenses = [];

async function mainMenu(){
    const choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: '\nWhat would you like to do?\n',
           choices:['Add Expense', 'View Expenses', 'Show Total', 'Edit Expense', 'Delete Expense', 'Exit'],
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

    else if (choice.action === 'Delete Expense') {
    // Check if there are expenses to delete
    if(expenses.length === 0){
        console.log("\nNo expenses to delete\n");
        await mainMenu();
        return;
    }

    // Create a formatted list of expenses to choose from
    const expenseChoices = expenses.map((item, index) => ({
        name: `${index + 1}. ${item.name}: ₦${item.amount.toLocaleString('en-NG', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`,
        value: index
    }));

    const deleteChoice = await inquirer.prompt([
        {
            type: 'list',
            name: 'expenseIndex',
            message: '\nWhich expense do you want to delete?\n',
            choices: expenseChoices
        }
    ]);

    // Remove the expense at that index
    const deletedExpense = expenses.splice(deleteChoice.expenseIndex, 1);
    console.log(`\n"${deletedExpense[0].name}" has been deleted!\n`);

    await mainMenu();
    }

    else if (choice.action === 'Edit Expense') {
    // Check if there are expenses to edit
    if(expenses.length === 0){
        console.log("\nNo expenses to edit\n");
        await mainMenu();
        return;
    }

    // Create a formatted list of expenses to choose from
    const expenseChoices = expenses.map((item, index) => ({
        name: `${index + 1}. ${item.name}: ₦${item.amount.toLocaleString('en-NG', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`,
        value: index
    }));

    const editChoice = await inquirer.prompt([
        {
            type: 'list',
            name: 'expenseIndex',
            message: '\nWhich expense do you want to edit?\n',
            choices: expenseChoices
        }
    ]);

    // Ask what to edit
    const whatToEdit = await inquirer.prompt([
        {
            type: 'list',
            name: 'field',
            message: '\nWhat would you like to edit?\n',
            choices: ['Name', 'Amount', 'Both', 'Cancel']
        }
    ]);

    const selectedExpense = expenses[editChoice.expenseIndex];

    if (whatToEdit.field === 'Cancel') {
        console.log('\nEdit cancelled\n');
        await mainMenu();
        return;
    }

    if (whatToEdit.field === 'Name' || whatToEdit.field === 'Both') {
        const newName = await inquirer.prompt([
            {
                name: 'name',
                message: `\nEnter new name (current: ${selectedExpense.name}):\n`,
            }
        ]);
        selectedExpense.name = newName.name;
    }

    if (whatToEdit.field === 'Amount' || whatToEdit.field === 'Both') {
        const newAmount = await inquirer.prompt([
            {
                name: 'amount',
                message: `\nEnter new amount (current: ₦${selectedExpense.amount.toLocaleString('en-NG', {minimumFractionDigits: 2, maximumFractionDigits: 2})}):\n`,
                validate: function(value) {
                    const valid = !isNaN(parseFloat(value)) && parseFloat(value) > 0;
                    return valid || 'Please enter a valid positive number';
                }
            }
        ]);
        selectedExpense.amount = parseFloat(newAmount.amount);
    }

    console.log('\n Expense updated successfully!\n');
    await mainMenu();
    }
    
    else {
        console.log('\nGoodbye, Crufus!');
        process.exit();
    }
}

mainMenu();