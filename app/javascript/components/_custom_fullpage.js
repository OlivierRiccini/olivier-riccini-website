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

const spanHome = document.querySelector('#home.span1');
const spanProjects = document.querySelector('#projects.span1');
const spanContact = document.querySelector('#contact.span1');

function slideLeft(item) {
  item.style.right = 0;
}

function slideRight(item) {
  item.style.right = `-100%`;
}

function display(item) {
  if ( item === homeP ) {
    homeP.classList.add('display-class');
    spanHome.classList.add('span-active');
    projectsP.classList.remove('display-class');
    contactP.classList.remove('display-class');
    spanProjects.classList.remove('span-active');
    spanContact.classList.remove('span-active');
  } else if ( item === projectsP ) {
    homeP.classList.remove('display-class');
    spanHome.classList.remove('span-active');
    projectsP.classList.add('display-class');
    contactP.classList.remove('display-class');
    spanProjects.classList.add('span-active');
    spanContact.classList.remove('span-active');
  } else {
    homeP.classList.remove('display-class');
    spanHome.classList.remove('span-active');
    projectsP.classList.remove('display-class');
    contactP.classList.add('display-class');
    spanProjects.classList.remove('span-active');
    spanContact.classList.add('span-active');
  }
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

/* Arrow to top 0 */
$(document).ready(function(){
  $('.arrow-top-0').click(function(){
    $.fn.fullpage.moveTo(1);
    return false;
  });
});

/* Arrow pulse bottom */
const arrowDownCircle = document.querySelectorAll('.arrow-down-circle');

function globalArrowDownAnimation() {
  arrowDownCircle.forEach(function(arrow) {
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
      arrowDown[0].style.borderColor = `rgba(0,0,0,${arrowDownColorIndex})`;
      if (arrowDownColorIndex >= 1) {
        arrowDownColorIndex = 0;
      }
      if (arrowDownIndex >= 20) {
        arrowDownIndex = 5;
      }
    }

    /* calling scroll down function using index defining scrolling height */
    arrow.addEventListener("click", function(){$.fn.fullpage.moveSectionDown()});

    if (arrow.dataset.arrowDown == nbProjects + 1) {
      arrow.style.display = 'none';
    }

  defIntervalArrowDown();

  });
}
globalArrowDownAnimation();


/* Arrow pulse up */
const arrowUpCircle = document.querySelectorAll('.arrow-up-circle');

function globalArrowUpAnimation() {
  arrowUpCircle.forEach(function(arrow) {
    const arrowUp = arrow.querySelectorAll('.arrow-up');
    let intervalArrowUp = null;

    function defIntervalArrowUp() {
      intervalArrowUp = setInterval(arrwoUpAnimation, 50);
    }

    let arrowUpIndex = 5;
    let arrowUpColorIndex = 0;

    function arrwoUpAnimation() {
      arrowUpIndex += 1;
      arrowUpColorIndex += 0.05;
      arrowUp[0].style.top = `${arrowUpIndex}px`;
      arrowUp[0].style.borderColor = `rgba(0,0,0,${arrowUpColorIndex})`;
      if (arrowUpColorIndex >= 1) {
        arrowUpColorIndex = 0;
      }
      if (arrowUpIndex >= 20) {
        arrowUpIndex = 5;
      }
    }

    /* calling scroll down function using index defining scrolling height */
    arrow.addEventListener("click", function(){$.fn.fullpage.moveSectionUp();});

  defIntervalArrowUp();

  });
}
globalArrowUpAnimation();
