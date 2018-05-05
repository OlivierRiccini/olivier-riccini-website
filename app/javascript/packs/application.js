/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

//= require jquery
//= require jquery_ujs
//= require jquery_ui
//= require bootstrap-sprockets
//= require_tree .

console.log('Hello World from Webpacker')

import 'fullpage.js';

import '../components/_custom_fullpage.js';
import '../components/_background.js';
import '../components/_form.js';

$('.filter-button-dropdown').click(function() {
  $('.container-tags-dropdown').slideToggle();
  if ($(this).html() === 'Filter <i class="fa fa-caret-up"></i>' ) {
    $(this).html('Filter <i class="fa fa-caret-down"></i>');
  } else {
    $(this).html('Filter <i class="fa fa-caret-up"></i>');
  }
});

/* Filters */
const arrowFilter = document.querySelector('.arrow-toggle-filters');
const menuFilter = document.querySelector('.filters-right-slide');


let intervalAnimArrow = null;

function defintervalAnimArrow() {
  arrowFilter.innerText = 'Filters ';
  intervalAnimArrow = setInterval(arrowFilterAnim, 600);
}


$('.arrow-toggle-filters').click(function() {
  $('.custom-nav-bar').toggleClass('nav-display-none');
  $('.filters-right-slide').toggleClass('filters-right-slide-active');
  if ( arrowFilter.dataset.clicked === 'false' || arrowFilter.innerText === 'Filters ->' ) {
    arrowFilter.innerText = '<- Close';
    arrowFilter.dataset.clicked = 'true';
    arrowFilter.classList.remove('filers-active');
    arrowFilter.classList.add('filers-inactive');
  } else {
    arrowFilter.innerText = 'Filters ->';
    arrowFilter.dataset.clicked = 'false';
    arrowFilter.classList.remove('filers-inactive');
    arrowFilter.classList.add('filers-active');
  }
});

/* Popup */
const popUps = document.querySelectorAll('.pop-up-project');
const navBar = document.querySelector('.custom-nav-bar');
const arrowDown = document.querySelector('.arrow-down-container');

function showPopUp(projectId) {
  popUps.forEach(function(popUp) {

    if ( popUp.dataset.belongsToProjectId === projectId ) {
      $(popUp).slideToggle();
      navBar.classList.toggle('nav-display-none');
      arrowDown.classList.toggle('nav-display-none');
      $('.triangle').click(function() {
        $(popUp).slideUp();
        navBar.classList.remove('nav-display-none');
        arrowDown.classList.remove('nav-display-none');
      });
    }
  });
}

const projectBoxes =  document.querySelectorAll('.project-box-image');
const triangles =  document.querySelectorAll('.triangles');


projectBoxes.forEach(function(projectBox) {
  projectBox.addEventListener('click', function() {
    showPopUp(this.dataset.projectId) }
  );
});


/* Drawing Logo */
const path = document.querySelectorAll('#logo-inho path');
const logo = document.getElementById('logo-inho');

let intervalDraw = null;

let i = 255;
function draw() {
  i += 0.1;
  path.forEach(function(element) {
    element.style.strokeDasharray = `${i}`;
    if(i >= 300) {
      clearInterval(intervalDraw);
    }
  });
}

function defIntervalDraw() {
  i = 255;
  intervalDraw = setInterval(draw, 5);
}

defIntervalDraw();
logo.addEventListener('mouseover', defIntervalDraw);
