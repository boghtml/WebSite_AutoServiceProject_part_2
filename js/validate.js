document.addEventListener('DOMContentLoaded', function() {
    var phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('blur', function() {
        var phoneRegex = /^(\+38)?(0\d{9})$/; // Приклад регулярного виразу для міжнародного номера телефону
        if (!phoneRegex.test(phoneInput.value)) {
            alert('Будь ласка, введіть номер телефону в правильному форматі.');
            // Тут ви можете додати додаткову логіку, наприклад, підсвітити поле вводу червоним
        }
    });
});