    // Theme Switcher
        const themeSlider = document.getElementById('theme-slider');
        const body = document.body;

        // Initialize theme
        let currentTheme = 1;

        // Function to update theme
        function updateTheme(themeNumber) {
            // Remove all theme classes
            body.classList.remove('theme-1', 'theme-2', 'theme-3');
            // Add the new theme class
            body.classList.add(`theme-${themeNumber}`);
            currentTheme = themeNumber;
        }

        // Listen for slider changes
        themeSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            updateTheme(value);
        });

        // Set initial theme
        updateTheme(1);

        // Calculator Functionality
        const screen = document.getElementById('screen');
        let currentInput = '0';
        let previousInput = '';
        let operator = null;
        let shouldResetScreen = false;

        function updateScreen() {
            let displayValue = currentInput;
            if (displayValue.length > 12) {
                displayValue = parseFloat(displayValue).toExponential(6);
            }
            screen.textContent = displayValue;
        }

        function clearCalculator() {
            currentInput = '0';
            previousInput = '';
            operator = null;
            shouldResetScreen = false;
            updateScreen();
        }

        function deleteLast() {
            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = '0';
            }
            updateScreen();
        }

        function inputDigit(digit) {
            if (shouldResetScreen) {
                currentInput = '0';
                shouldResetScreen = false;
            }
            if (currentInput === '0' && digit !== '.') {
                currentInput = digit;
            } else {
                currentInput += digit;
            }
            updateScreen();
        }

        function inputDecimal() {
            if (shouldResetScreen) {
                currentInput = '0';
                shouldResetScreen = false;
            }
            if (!currentInput.includes('.')) {
                currentInput += '.';
            }
            updateScreen();
        }

        function handleOperator(op) {
            if (operator !== null) {
                calculate();
            }
            previousInput = currentInput;
            operator = op;
            shouldResetScreen = true;
        }

        function calculate() {
            if (operator === null || previousInput === '') return;
            
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            let result;
            
            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert('Cannot divide by zero!');
                        clearCalculator();
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }
            
            if (!Number.isInteger(result)) {
                result = parseFloat(result.toFixed(10));
            }
            
            currentInput = result.toString();
            operator = null;
            previousInput = '';
            shouldResetScreen = true;
            updateScreen();
        }

        // Keyboard support
        document.addEventListener('keydown', function(e) {
            const key = e.key;
            
            if (key >= '0' && key <= '9') {
                inputDigit(key);
            } else if (key === '.') {
                inputDecimal();
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                e.preventDefault();
                handleOperator(key);
            } else if (key === 'Enter' || key === '=') {
                e.preventDefault();
                calculate();
            } else if (key === 'Backspace') {
                deleteLast();
            } else if (key === 'Escape' || key === 'c' || key === 'C') {
                clearCalculator();
            }
        });

        // Event listeners for buttons
        document.querySelectorAll('.button button').forEach(button => {
            button.addEventListener('click', function() {
                const text = this.textContent;
                
                if (text >= '0' && text <= '9') {
                    inputDigit(text);
                } else if (text === '.') {
                    inputDecimal();
                } else if (text === '+' || text === '-' || text === '*' || text === '/') {
                    handleOperator(text);
                } else if (text === '=') {
                    calculate();
                } else if (text === 'DEL') {
                    deleteLast();
                } else if (text === 'Reset') {
                    clearCalculator();
                }
            });
        });

        // Initialize display
        updateScreen();