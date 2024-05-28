// Отримуємо форму
const bookingForm = document.querySelector('.booking-form');

// Отримуємо поля вводу
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const phoneInput = document.getElementById('phone');
const carMakeInput = document.getElementById('car-make');
const carModelInput = document.getElementById('car-model');
const carYearInput = document.getElementById('car-year');
const visitDateInput = document.getElementById('visit-date');
const commentInput = document.getElementById('message');
// Отримуємо кнопку "Записатись"
const submitButton = document.getElementById('submitBtn');


bookingForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: nameInput.value,
    surname: surnameInput.value,
    phone: phoneInput.value,
    brand: carMakeInput.value,
    model: carModelInput.value,
    year: carYearInput.value,
    date: visitDateInput.value,
    comment: commentInput.value,
    viewed: false,
    status: "Очікується"
  };

  try {
    // Відправляємо дані на сервер
    const response = await fetch('http://localhost:3000/submit-appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      // Обробляємо успішну відповідь від сервера
      alert('Ваші дані успішно збережені!');
      bookingForm.reset(); // Очищаємо форму після успішного запису
    } else {
      // Обробляємо помилку при запиті
      alert('Сталася помилка при збереженні даних. Спробуйте пізніше.');
    }
  } catch (error) {
    // Обробляємо помилку при відправці запиту
    console.error('Помилка:', error);
    alert('Сталася помилка при збереженні даних. Спробуйте пізніше.');
  }
});
