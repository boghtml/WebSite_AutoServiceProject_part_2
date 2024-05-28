const express = require('express');
const app = express();
const mongoose = require('mongoose');

console.log('Start.');

// Підключення до бази даних MongoDB

mongoose.connect('mongodb+srv://boghtml:1234567890HTML@cluster0.prceocq.mongodb.net/auto_service?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connect("mongodb+srv://boghtml:1234567890HTML@cluster0.prceocq.mongodb.net/auto_service?retryWrites=true&w=majority").then(() => {
  console.log('Successfully connected to MongoDB.');
}).catch(err => {
  console.error('Connection error:', err);
});

const appointmentSchema = new mongoose.Schema({
  name: String,
  surname: String,
  phone: String,
  brand: String,
  model: String,
  year: String,
  date: String,
  comment: String,
  viewed: Boolean,
  status: String 
}, { versionKey: false });
const Appointment = mongoose.model('Appointment', appointmentSchema, 'appointments');

app.use(express.json());
const cors = require('cors');
app.use(cors());

function convertDateToDDMMYYYY(dateString) {
  const dateParts = dateString.split("-"); 
  if (dateParts.length === 3) {
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  } else {
    return dateString;
  }
}
app.post('/submit-appointment', async (req, res) => {
  try {
    const { name, surname, phone, brand, model, year, date, comment } = req.body; // Отримайте коментар із req.body
    const formattedDate = convertDateToDDMMYYYY(date);

    const newAppointment = new Appointment({
      name,
      surname,
      phone,
      brand,
      model,
      year,
      date: formattedDate,
      comment,
      viewed: false,
      status: "Очікується"
    });

    await newAppointment.save();
    res.status(200).json({ message: 'Запис успішно збережений' });
  } catch (error) {
    console.error('Помилка при збереженні запису:', error);
    res.status(500).json({ message: 'Сталася помилка при збереженні даних' });
  }
});

app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});