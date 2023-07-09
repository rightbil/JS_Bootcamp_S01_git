const readline = require("readline");
const fs = require("fs");

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define the path to the data file
const dataFilePath = "data.json";

// Load existing bank accounts from the data file
let bankAccounts = loadBankAccounts();

// Function to load bank accounts from the data file
function loadBankAccounts() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log("Error loading bank accounts:", err);
    return [];
  }
}

// Function to save bank accounts to the data file
function saveBankAccounts() {
  const data = JSON.stringify(bankAccounts);
  fs.writeFileSync(dataFilePath, data, "utf8");
}

// Function to display all bank accounts
function displayBankAccounts() {
  console.log("Bank Accounts:");
  bankAccounts.forEach((account) => {
    console.log(`Account Number: ${account.accountNumber}`);
    console.log(`Account Holder: ${account.accountHolder}`);
    console.log(`Balance: $${account.balance}`);
    console.log("-----------------------------");
  });
}

// Function to add a new bank account
function addBankAccount(accountNumber, accountHolder, initialBalance) {
  const newAccount = {
    accountNumber,
    accountHolder,
    balance: initialBalance,
  };
  bankAccounts.push(newAccount);
  console.log("Bank account added successfully.");
  saveBankAccounts();
}

// Function to update an existing bank account
function updateBankAccount(accountNumber, updatedAccount) {
  const index = bankAccounts.findIndex(
    (account) => account.accountNumber === accountNumber
  );
  if (index !== -1) {
    bankAccounts[index] = updatedAccount;
    console.log("Bank account updated successfully.");
    saveBankAccounts();
  } else {
    console.log("Bank account not found.");
  }
}

// Function to delete a bank account
function deleteBankAccount(accountNumber) {
  const index = bankAccounts.findIndex(
    (account) => account.accountNumber === accountNumber
  );
  if (index !== -1) {
    const deletedAccount = bankAccounts.splice(index, 1);
    console.log("Bank account deleted successfully.");
    saveBankAccounts();
  } else {
    console.log("Bank account not found.");
  }
}

// Function to handle user input for adding a bank account
function handleAddBankAccountInput() {
  rl.question("Enter account number: ", (accountNumber) => {
    rl.question("Enter account holder: ", (accountHolder) => {
      rl.question("Enter initial balance: ", (initialBalance) => {
        addBankAccount(accountNumber, accountHolder, parseFloat(initialBalance));
        displayBankAccounts();
        rl.prompt();
      });
    });
  });
}

// Function to handle user input for updating a bank account
function handleUpdateBankAccountInput() {
  rl.question("Enter account number to update: ", (accountNumber) => {
    rl.question("Enter updated account holder: ", (accountHolder) => {
      rl.question("Enter updated balance: ", (balance) => {
        const updatedAccount = {
          accountNumber,
          accountHolder,
          balance: parseFloat(balance),
        };
        updateBankAccount(accountNumber, updatedAccount);
        displayBankAccounts();
        rl.prompt();
      });
    });
  });
}

// Function to handle user input for deleting a bank account
function handleDeleteBankAccountInput() {
  rl.question("Enter account number to delete: ", (accountNumber) => {
    deleteBankAccount(accountNumber);
    displayBankAccounts();
    rl.prompt();
  });
}

// Function to handle user input for displaying bank accounts
function handleDisplayBankAccountsInput() {
  displayBankAccounts();
  rl.prompt();
}

// Function to handle user input for quitting the application
function handleQuitInput() {
  rl.close();
}

// Main function to start the application
function startApp() {
  console.log("Banking System Application");

  rl.setPrompt("Enter command (add/update/delete/display/quit): ");
  rl.prompt();

  rl.on("line", (input) => {
    const command = input.trim().toLowerCase();

    switch (command) {
      case "add":
        handleAddBankAccountInput();
        break;
      case "update":
        handleUpdateBankAccountInput();
        break;
      case "delete":
        handleDeleteBankAccountInput();
        break;
      case "display":
        handleDisplayBankAccountsInput();
        break;
      case "quit":
        handleQuitInput();
        break;
      default:
        console.log("Invalid command");
        rl.prompt();
        break;
    }
  });

  rl.on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });
}

// Start the application
startApp();


// In this code, we have created a Banking System application that allows users to perform CRUD operations on bank accounts. The bank accounts are stored as JSON objects. Here's a brief explanation of the functionality:

// Load existing bank accounts from the data file on startup.
// Allow the user to add a new bank account by providing the account number, account holder, and initial balance.
// Allow the user to update an existing bank account by providing the account number and updated account details.
// Allow the user to delete a bank account by providing the account number.
// Display all bank accounts with their account number, account holder, and balance.
// Save bank accounts to the data file after any modification.
// Quit the application.
// The bank accounts are stored in an array (bankAccounts), and the JSON file (data.json) is used to persist the bank accounts across application sessions. When the application starts, it loads the bank accounts from the file into memory. Any modifications made by the user are saved back to the file to ensure data persistence.

// You can run this code in a Node.js environment, and it will prompt you for commands to perform various actions on the bank accounts.