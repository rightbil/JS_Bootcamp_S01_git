// Simulating a banking API
function deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0) {
          resolve("Deposit successful");
        } else {
          reject("Invalid deposit amount");
        }
      }, 1000);
    });
  }
  
  function withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0) {
          resolve("Withdrawal successful");
        } else {
          reject("Invalid withdrawal amount");
        }
      }, 1000);
    });
  }
  
  // Example of using Promises with async/await
  async function bankingExample() {
    try {
      debugger
      const depositResult = await deposit(1000);
      console.log(depositResult);
  
      const withdrawResult = await withdraw(500);
      console.log(withdrawResult);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the bankingExample function
  bankingExample();
  