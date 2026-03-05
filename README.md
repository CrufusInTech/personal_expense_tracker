# 💰 Personal Expense Tracker CLI

> An interactive, high-performance command-line tool built to manage your finances without ever leaving your terminal.

This project marks my "return to glory" after a 3-month hiatus, focusing on mastering **Node.js** asynchronous logic and **CRUD** operations.

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)
![Inquirer.js](https://img.shields.io/badge/Inquirer.js-8.0+-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

---

## 🚀 Features

- ✅ **Add Expense** – Record purchases with automated name and cost mapping
- ✅ **View Expenses** – Formatted list view of all transactions with proper currency formatting
- ✅ **Show Total** – Real-time calculation using optimized JavaScript `.reduce()` logic
- ✅ **Edit/Delete** – Full control over your data with interactive selection
- ✅ **Input Validation** – Prevents invalid entries with helpful error messages
- ✅ **Interactive UI** – Built with `Inquirer.js` (CLI) or EJS templates (Web)
- ✅ **Currency Formatting** – Nigerian Naira (₦) with comma separators

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Node.js** | JavaScript Runtime Environment |
| **Inquirer.js** | Interactive Command Line User Interface |
| **JavaScript (ESM)** | Modern Module System (import/export) |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

1️⃣ **Clone the repository**
```bash
git clone https://github.com/CrufusInTech/personal_expense_tracker
cd personal_expense_tracker
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Run the application**
```bash
node index.js
```

---

## 📖 Usage

After running `node index.js`, you'll see an interactive menu:

```
? What would you like to do? (Use arrow keys)
❯ Add Expense
  View Expenses
  Show Total
  Edit Expense
  Delete Expense
  Exit
```

**Add an Expense:**
```
? What did you buy?
→ New Laptop

? How much did it cost?
→ 250000
```

**View All Expenses:**
```
--- Your Expenses ---
1. New Laptop: ₦250,000.00
2. Groceries: ₦5,500.50
3. Internet Bill: ₦2,000.00
---------------------
```

**Show Total:**
```
The total is : ₦257,500.50
```

---

## 📁 Project Structure

```
personal_expense_tracker/
├── index.js                 # Main application file
├── package.json
├── package-lock.json
└── README.md
```

---

## 🎯 Key Concepts Learned

### Asynchronous Programming
- `async/await` for handling user input sequentially
- Promise-based API calls and request handling

### CRUD Operations
- **Create** – Add new expenses
- **Read** – View and display expenses
- **Update** – Edit expense details
- **Delete** – Remove expenses

### Data Validation
- Name field validation (non-empty)
- Amount validation (valid positive number)
- Error handling and user feedback

### Array Methods
- `.reduce()` – Calculate total expenses
- `.forEach()` – Display expenses
- `.map()` – Transform data
- `.filter()` – Remove items
- `.splice()` – Modify arrays

---

## 💡 Code Examples

### Add Expense with Validation
```javascript
const detailsOfExpense = await inquirer.prompt([
    {
        name: 'name',
        message: '\nWhat did you buy?\n',
        validate: function(value) {
            return value.trim() !== '' || 'Please enter a valid name';
        }
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
expenses.push({name: detailsOfExpense.name, amount: numericAmount});
```

### Calculate Total with Reduce
```javascript
function calculate(accumulator, curr) {
    const amount = isNaN(curr.amount) ? 0 : curr.amount;
    return accumulator + amount;
}

const total = expenses.reduce(calculate, 0);
console.log(`The total is : ₦${total.toLocaleString('en-NG', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
```


## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Style
- Use ESM modules (`import`/`export`)
- Follow async/await patterns
- Add validation for all inputs
- Include error handling

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**CrufusInTech**
- GitHub: [@CrufusInTech](https://github.com/CrufusInTech)
- Returning from hiatus with a focus on **Node.js mastery** ✨

---

## 🙏 Acknowledgments

- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) – For the amazing CLI framework
- [Express.js](https://expressjs.com/) – For the lightweight web framework
- The Node.js community – For endless learning resources

---


---

<div align="center">

**⭐ If you find this helpful, please consider giving it a star!**

Made with ❤️ while mastering Node.js

</div>
