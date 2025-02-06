let display = document.getElementById('display');
        let currentInput = '';
        let currentOperator = null;
        let firstOperand = '';

        function appendNumber(number) {
            currentInput += number;
            display.textContent = currentInput;
        }

        function appendOperator(operator) {
            if (currentInput === '') return;
            if (firstOperand === '') {
                firstOperand = currentInput;
                currentInput = '';
            }
            currentOperator = operator;
            display.textContent += ' ' + operator + ' ';
        }

        function clearDisplay() {
            currentInput = '';
            firstOperand = '';
            currentOperator = null;
            display.textContent = '0';
        }

        function deleteNumber() {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        }

        function calculateResult() {
            if (currentOperator === null || currentInput === '') return;
            let result;
            const num1 = parseFloat(firstOperand);
            const num2 = parseFloat(currentInput);

            switch (currentOperator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                case '%':
                    result = num1 % num2;
                    break;
                default:
                    return;
            }

            display.textContent = result;
            currentInput = result.toString();
            firstOperand = '';
            currentOperator = null;
        }