import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

flatpickr('.datepicker', {
  inline: true,
  allInput: true,
  enableTime: true
});


const appointmentForm = document.querySelector('.appointment-form');

function displayAppointment() {
  if ( checkBoxAppointment.value === "appointment" ) {
    appointmentForm.classList.toggle('appointment-form-enabled');
  }
}

const checkBoxAppointment = document.getElementById('message_object_appointment');
checkBoxAppointment.addEventListener('click', displayAppointment);
