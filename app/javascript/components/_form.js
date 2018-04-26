import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

flatpickr('.datepicker', {
  inline: true,
  allInput: true,
  enableTime: true
});


const appointmentForm = document.querySelector('.appointment-form');
const closeCalendar = document.querySelector('.close-calendar');
const boxInup = document.getElementById('message_object_appointment');
const navBar = document.querySelector('.custom-nav-bar');

boxInup.dataset.clicked = false;

function displayAppointment() {
  if ( boxInup.dataset.clicked === "false" ) {
    boxInup.dataset.clicked = true;
  } else {
    boxInup.dataset.clicked = false;
  }
  if ( window.innerWidth <= 1000 && boxInup.dataset.clicked === "true" ) {
    $('.appointment-form').slideToggle();
    appointmentForm.classList.toggle('appointment-form-enabled');
    navBar.style.display = 'none';
  }
  if ( checkBoxAppointment.value === "appointment" && window.innerWidth > 1000 ) {
    appointmentForm.classList.toggle('appointment-form-enabled');
  }
}

function slideUpCalendar() {
  $('.appointment-form').slideUp();
  appointmentForm.classList.remove('appointment-form-enabled');
  navBar.style.display = 'block';
}

const checkBoxAppointment = document.getElementById('message_object_appointment');
checkBoxAppointment.addEventListener('click', displayAppointment);
closeCalendar.addEventListener('click', slideUpCalendar);
