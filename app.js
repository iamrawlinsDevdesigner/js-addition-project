function performOperation() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.querySelector('input[name="operation"]:checked').value;

  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = '⚠️ Please enter valid numbers.';
  } else {
    let calculation;

    switch (operation) {
      case 'add':
        calculation = num1 + num2;
        break;
      case 'subtract':
        calculation = num1 - num2;
        break;
      case 'multiply':
        calculation = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          result = '❌ Cannot divide by zero.';
        } else {
          calculation = num1 / num2;
        }
        break;
      default:
        result = 'Please select an operation.';
    }

    if (calculation !== undefined) {
      // Format result: add commas and limit to 2 decimal places
      const formatted = calculation.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });

      result = `✅ The result is: <strong>${formatted}</strong>`;
    }
  }

  document.getElementById('result').innerHTML = result;
}
