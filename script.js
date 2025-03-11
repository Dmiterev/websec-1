document.getElementById('calculateButton').addEventListener('click', function () {
    const inputValue = document.getElementById('inputValue').value; // Первое число
    const secondInputValue = document.getElementById('secondInputValue').value; // Второе число
    const operation = document.getElementById('operationSelect').value; // Выбранная операция
    const errorMessage = document.getElementById('errorMessage'); // Поле для ошибок
    const historyField = document.getElementById('history'); // Поле для истории операций

    // Сброс сообщений об ошибках
    errorMessage.textContent = '';

    // Преобразуем вводимые значения в числа
    const number1 = parseFloat(inputValue);
    const number2 = parseFloat(secondInputValue);

    // Проверяем корректность ввода чисел
    if (isNaN(number1) || isNaN(number2) || inputValue.trim() === '' || secondInputValue.trim() === '') {
        errorMessage.textContent = 'Ошибка: Введите корректные числа.';
        return;
    }

    let result;

    // Выполняем выбранную операцию
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                errorMessage.textContent = 'Ошибка: Деление на ноль.';
                return;
            }
            result = number1 / number2;
            break;
        default:
            errorMessage.textContent = 'Ошибка: Неизвестная операция.';
            return;
    }

    // Добавляем операцию в историю
    const historyEntry = document.createElement('div');
    historyEntry.textContent = `${number1} ${operation} ${number2} = ${result}`;
    historyField.appendChild(historyEntry);
});
