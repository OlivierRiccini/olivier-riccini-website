import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

flatpickr('.datepicker', {
  inline: true,
  allInput: true,
  minDate: "today",
  enableTime: true
});


const appointmentForm = document.querySelector('.appointment-form');
const closeCalendar = document.querySelector('.close-calendar');
const boxInup = document.getElementById('message_object_appointment');
const navBar = document.querySelector('.custom-nav-bar');
const customFooter = document.querySelector('.custom-footer');

boxInup.dataset.clicked = false;

function displayAppointment() {
  if ( boxInup.dataset.clicked === "false" ) {
    boxInup.dataset.clicked = true;
  } else {
    boxInup.dataset.clicked = false;
  }
  if ( window.innerWidth <= 1000 && boxInup.dataset.clicked === "true" ) {
    $('.appointment-form').slideToggle();
    appointmentForm.classList.add('appointment-form-enabled');
    navBar.style.display = 'none';
    customFooter.style.display = 'none';
  }
  if ( checkBoxAppointment.value === "appointment" && window.innerWidth > 1000 ) {
    appointmentForm.classList.toggle('appointment-form-enabled');
  }
}

function slideUpCalendar() {
  $('.appointment-form').slideUp();
  appointmentForm.classList.remove('appointment-form-enabled');
  navBar.style.display = 'block';
  customFooter.style.display = 'block';
}

const checkBoxAppointment = document.getElementById('message_object_appointment');
checkBoxAppointment.addEventListener('click', displayAppointment);
closeCalendar.addEventListener('click', slideUpCalendar);

const appointmentDate = document.getElementById('message_appointment_date');
const message = document.getElementById('message_content');

function messageTextForAppointment(event) {
  let date = appointmentDate.value;
  if ( event.type === "click" && boxInup.dataset.clicked === "false" ) {
       message.innerText = "";
  } else if ( event.type === "change" || (event.type === "click" && boxInup.dataset.clicked === "true" && date )) {
  message.innerText =
  `Hi Olivier le big boss, what's up!? I would like to book an appointment with you ${date}, good for you bro?`;
  }
}

appointmentDate.addEventListener('change', messageTextForAppointment);
checkBoxAppointment.addEventListener('click', messageTextForAppointment);






