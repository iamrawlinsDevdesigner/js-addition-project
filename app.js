function performOperation() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.querySelector('input[name="operation"]:checked').value;

  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Please enter valid numbers.';
  } else {
    switch (operation) {
      case 'add':
        result = `The result is: ${num1 + num2}`;
        break;
      case 'subtract':
        result = `The result is: ${num1 - num2}`;
        break;
      case 'multiply':
        result = `The result is: ${num1 * num2}`;
        break;
      case 'divide':
        result = num2 !== 0 ? `The result is: ${num1 / num2}` : 'Cannot divide by zero';
        break;
      default:
        result = 'Please select an operation.';
    }
  }

  document.getElementById('result').innerText = result;
}
