💰 Personal Expense Tracker CLI

A simple Command Line Expense Tracker built with Node.js and Inquirer.js.
This CLI allows you to record, view, edit, delete, and calculate expenses directly from your terminal.

It’s designed as a beginner-friendly project to practice JavaScript, Node.js, arrays, and user prompts.

🚀 Features

➕ Add Expenses – Record purchases with name and amount

📋 View Expenses – Display all recorded expenses

🧮 Show Total – Calculate the total amount spent

✏️ Edit Expenses – Modify the name or amount of an expense

❌ Delete Expenses – Remove an expense from the list

🚪 Exit – Quit the CLI application

📦 Tech Stack

Node.js

Inquirer.js – For interactive command line prompts

JavaScript (ES Modules)

📁 Project Structure
expense-tracker-cli
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
⚙️ Installation

Clone the repository:

git clone https://github.com/yourusername/expense-tracker-cli.git

Navigate into the project folder:

cd expense-tracker-cli

Install dependencies:

npm install
▶️ Running the CLI

Start the application with:

node index.js

You will see a menu like this:

What would you like to do?

❯ Add Expense
  View Expenses
  Show Total
  Edit Expense
  Delete Expense
  Exit
🧾 Example Usage
Add Expense
What did you buy?
> Groceries

How much did it cost?
> 5000

Result:

Expense added successfully!
View Expenses
1. Groceries: ₦5,000.00
2. Transport: ₦1,200.00
Show Total
The total is: ₦6,200.00
🧠 Learning Goals

This project demonstrates:

Working with arrays of objects

Using Inquirer.js prompts

Building interactive CLI applications

Performing CRUD operations in JavaScript

Handling user input validation


👤 Author

CrufusInTech



📜 License

This project is open source and available under the MIT License.
