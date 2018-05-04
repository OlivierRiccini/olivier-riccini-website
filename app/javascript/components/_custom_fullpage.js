const home = document.getElementById('home');
const projects = document.getElementById('projects');
const services = document.getElementById('services');
const contact = document.getElementById('contact');

const homeP = document.getElementById('home-p');
const projectsP = document.getElementById('projects-p');
const servicesP = document.getElementById('services-p');
const contactP = document.getElementById('contact-p');

const spanHome = document.querySelector('#home.span1');
const spanProjects = document.querySelector('#projects.span1');
const spanServices = document.querySelector('#services.span1');
const spanContact = document.querySelector('#contact.span1');

const arrow = document.querySelector('.arrow-down-container');

function navHomeAnim() {

  homeP.classList.add('display-class');
  spanHome.classList.add('span-active');

  projectsP.classList.remove('display-class');
  spanProjects.classList.remove('span-active');

  servicesP.classList.remove('display-class');
  spanServices.classList.remove('span-active');

  contactP.classList.remove('display-class');
  spanContact.classList.remove('span-active');

  $('.arrow-down-container').fadeIn();
  $('.custom-footer').fadeOut();
}

function navProjectsAnim() {

  homeP.classList.remove('display-class');
  spanHome.classList.remove('span-active');

  projectsP.classList.add('display-class');
  spanProjects.classList.add('span-active');

  servicesP.classList.remove('display-class');
  spanServices.classList.remove('span-active');

  contactP.classList.remove('display-class');
  spanContact.classList.remove('span-active');

  $('.arrow-down-container').fadeIn();
  $('.custom-footer').fadeOut();
}

function navServicesAnim() {

  homeP.classList.remove('display-class');
  spanHome.classList.remove('span-active');

  projectsP.classList.remove('display-class');
  spanProjects.classList.remove('span-active');

  servicesP.classList.add('display-class');
  spanServices.classList.add('span-active');

  contactP.classList.remove('display-class');
  spanContact.classList.remove('span-active');

  $('.arrow-down-container').fadeIn();
  $('.custom-footer').fadeOut();
}

function navContactAnim() {

  homeP.classList.remove('display-class');
  spanHome.classList.remove('span-active');

  projectsP.classList.remove('display-class');
  spanProjects.classList.remove('span-active');

  servicesP.classList.remove('display-class');
  spanServices.classList.remove('span-active');

  contactP.classList.add('display-class');
  spanContact.classList.add('span-active');

  $('.arrow-down-container').fadeOut();
  $('.custom-footer').css('display', 'flex');
}

$(document).ready(function() {

  $('#fullpage').fullpage({
    afterLoad: function() {
      if (this[0].id === "home-section" ) {
        navHomeAnim();
      } else if ( this[0].id === "projects-section" ) {
        navProjectsAnim();
      } else if ( this[0].id === "services-section" ) {
        navServicesAnim();
      } else {
        navContactAnim();
      }
    },

    onLeave: function() {
      if (this[0].id === "home-section" ) {
      } else if ( this[0].id === "projects-section" ) {
        // navProjectsAnim();

        /* Closing project all pop-ups */
        const popUps = document.querySelectorAll('.pop-up-project');

        popUps.forEach(function(popUp) {
          $(popUp).slideUp();
          $('.custom-nav-bar').removeClass('nav-display-none');
        });
        ///////////////////////////

      } else {
        // navContactAnim();
      }

      if (this[0].id === "projects-section" ) {
        $('.filters-right-slide').removeClass('filters-right-slide-active');
        $('.arrow-toggle-filters').addClass('filers-active');
        $('.arrow-toggle-filters').removeClass('filers-inactive');
        $('.arrow-toggle-filters').text('Filters ->');
      }
    }
  });

  $('#home').click(function(){
    $.fn.fullpage.moveTo(1);
    return false;
  });
  $('#projects').click(function(){
    $.fn.fullpage.moveTo(2);
    return false;
  });
  $('#services').click(function(){
    $.fn.fullpage.moveTo(3);
    return false;
  });
  $('#contact').click(function(){
    $.fn.fullpage.moveTo(4);
    return false;
  });
});


function slideLeft(item) {
  item.style.right = 0;
}

function slideRight(item) {
  item.style.right = `-100%`;
}

// function display(item) {
//   if ( item === homeP ) {
//     navHomeAnim();
//   } else if ( item === projectsP ) {
//     navProjectsAnim();
//   } else {
//     navContactAnim();
//   }
// }

home.addEventListener('mouseover', function() { slideLeft(homeP) });
projects.addEventListener('mouseover', function() { slideLeft(projectsP) });
services.addEventListener('mouseover', function() { slideLeft(servicesP) });
contact.addEventListener('mouseover', function() { slideLeft(contactP) });

home.addEventListener('mouseleave', function() { slideRight(homeP) });
projects.addEventListener('mouseleave', function() { slideRight(projectsP) });
services.addEventListener('mouseleave', function() { slideRight(servicesP) });
contact.addEventListener('mouseleave', function() { slideRight(contactP) });

// home.addEventListener('click', function() { display(homeP) });
// projects.addEventListener('click', function() { display(projectsP) });
// contact.addEventListener('click', function() { display(contactP) });

// /* Arrow pulse bottom */
const arrowDownContainer = document.querySelectorAll('.arrow-down-container');

function globalArrowDownAnimation() {
  arrowDownContainer.forEach(function(arrow) {
    const arrowDown = arrow.querySelectorAll('.arrow-down');
    let intervalArrowDown = null;

    function defIntervalArrowDown() {
      intervalArrowDown = setInterval(arrwoDownAnimation, 50);
    }

    let arrowDownIndex = 5;
    let arrowDownColorIndex = 0;

    function arrwoDownAnimation() {
      arrowDownIndex += 1;
      arrowDownColorIndex += 0.05;
      arrowDown[0].style.top = `${arrowDownIndex}px`;
      arrowDown[0].style.borderColor = `rgba(255, 110, 36, ${arrowDownColorIndex})`;
      if (arrowDownColorIndex >= 1) {
        arrowDownColorIndex = 0;
      }
      if (arrowDownIndex >= 20) {
        arrowDownIndex = 5;
      }
    }

    /* calling scroll down function using index defining scrolling height */
    arrow.addEventListener("click", function(){$.fn.fullpage.moveSectionDown()});

  defIntervalArrowDown();

  });
}

globalArrowDownAnimation();
