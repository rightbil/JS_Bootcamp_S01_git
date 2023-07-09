// Example 1: Callback function as an argument

function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("John", sayGoodbye);
  

  // Example 2: Callback function with asynchronous operation

function fetchData(callback) {
  setTimeout(function () {
    const data = "Some data";
    callback(data);
  }, 2000);
}

function process(data) {
  console.log("Processing data: " + data);
}

fetchData(process);
