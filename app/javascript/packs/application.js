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

const popUps = document.querySelectorAll('.pop-up-project');
const navBar = document.querySelector('.custom-nav-bar');

function showPopUp(projectId) {
  popUps.forEach(function(popUp) {

    if ( popUp.dataset.belongsToProjectId === projectId ) {
      $(popUp).slideToggle();
      navBar.classList.toggle('nav-display-none');
      $('.triangle').click(function() {
        $(popUp).slideUp();
        navBar.classList.remove('nav-display-none');
        // navBar.style.display = 'block';
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
})
