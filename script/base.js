/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
REVEAL TEXT FEATURE ON MAIN SECTION
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
const mainFirstReveal = document.querySelector('.main-first-reveal');
const mainSecondReveal = document.querySelector('.main-second-reveal');
const mainThirdReveal = document.querySelector('.main-third-reveal');
const revealArray = [mainFirstReveal, mainSecondReveal, mainThirdReveal];

// Reveals the headings/paragraph from main section
window.addEventListener('scroll', function() {
  const mainSectionPosition = triggerTextReveal.getBoundingClientRect();

  revealArray.forEach(function(activate) {
  if(mainSectionPosition.top < window.innerHeight && mainSectionPosition.bottom >= 0 ){
      activate.classList.add('active');
    }
  });
});

/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\
NAVIGATION FEATURES
\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
const hamburgerButton = document.querySelector('.hamburger-menu');
const logoLink = document.querySelector('.logo');
const navArray = [mainNavigation, menuLinks];
const allLinks = document.querySelectorAll('.links');
const hamburgerLines = document.querySelectorAll('section.hamburger-menu > span');


// Clicking Hamburger button will drop menus
hamburgerButton.addEventListener('click', function() {
  navArray.forEach(function(dropdown) {
    dropdown.classList.toggle('dropdown');
  });
});

// Clicking each menu links removes each "dropdown" classname
allLinks.forEach(function(links){
  navArray.forEach(function(remove){
    links.addEventListener('click', function() {
      remove.classList.remove('dropdown')
    });
  });
});

// Clicking on logo removes each "dropdown" classname
logoLink.addEventListener('click', function() {
  navArray.forEach(function(dropdown) {
    dropdown.classList.toggle('dropdown');
  });
});

// Clicking hamburger menu changes to an "X" 
hamburgerButton.addEventListener('click', function() {
  hamburgerLines.forEach(function(activate) {
    activate.classList.toggle('active')
  });
});





  




