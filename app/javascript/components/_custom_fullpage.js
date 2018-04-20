$(document).ready(function() {


  $('#fullpage').fullpage();

  $('#home').click(function(){
    $.fn.fullpage.moveTo(1);
    return false;
  });
  $('#projects').click(function(){
    $.fn.fullpage.moveTo(2);
    return false;
  });
  $('#contact').click(function(){
    $.fn.fullpage.moveTo(3);
    return false;
  });


  // $('.arrow-top-0').click(function(){
  //   $.fn.fullpage.moveTo(1);
  //   return false;
  // });

});

const home = document.getElementById('home');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

const homeP = document.getElementById('home-p');
const projectsP = document.getElementById('projects-p');
const contactP = document.getElementById('contact-p');


function slideLeft(item) {
  item.style.right = 0;
}

function slideRight(item) {
  item.style.right = `-100%`;
}

function display(item) {
  item.classList.add('display-class');
}

home.addEventListener('mouseover', function() { slideLeft(homeP) });
projects.addEventListener('mouseover', function() { slideLeft(projectsP) });
contact.addEventListener('mouseover', function() { slideLeft(contactP) });

home.addEventListener('mouseleave', function() { slideRight(homeP) });
projects.addEventListener('mouseleave', function() { slideRight(projectsP) });
contact.addEventListener('mouseleave', function() { slideRight(contactP) });

home.addEventListener('click', function() { display(homeP) });
projects.addEventListener('click', function() { display(projectsP) });
contact.addEventListener('click', function() { display(contactP) });








