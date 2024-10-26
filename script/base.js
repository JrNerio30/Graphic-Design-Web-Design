/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
REVEAL TEXT FEATURE ON MAIN SECTION
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
const textRevealMain = document.querySelector('.main-first-reveal');
const revealArray = [mainFirstReveal, mainSecondReveal, mainThirdReveal];
// Reveals the headings/paragraph from main section
window.addEventListener('scroll', function() {
  const mainSectionPosition = textRevealMain.getBoundingClientRect();

  revealArray.forEach(function(activate) {
  if(mainSectionPosition.top < window.innerHeight && mainSectionPosition.bottom >= 0 ){
      activate.classList.add('active');
    }
    else{
      activate.classList.remove('active');
    }
  });
});

/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\
NAVIGATION FEATURES
\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const hamburgerLines = document.querySelectorAll('section.hamburger-menu > span');
const navArray = [mainNavigation, menuLinks];
const allLinks = document.querySelectorAll('.links');


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

/* Clicking on logo removes each "dropdown" 
  classname as well as the active hamburger lines
*/
logoLink.addEventListener('click', function() {
  navArray.forEach(function(dropdown) {
    dropdown.classList.toggle('dropdown');
  });
  hamburgerLines.forEach(function(inactive) {
    inactive.classList.remove('active');
  });
});

// Clicking hamburger menu changes to an "X" 
hamburgerButton.addEventListener('click', function() {
  hamburgerLines.forEach(function(activate) {
    activate.classList.toggle('active')
  });
});

// Clicking all links remove "active" class name on hamburger button
allLinks.forEach(function(links) {
  links.addEventListener('click', function() {
    hamburgerLines.forEach(function(remove) {
      remove.classList.remove('active');
    });
  });
});


/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\
MAIN SEACTION FEATURES
\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

// Hover over the learn more button displays the right arrow icon
mainLearnMoreBtn.addEventListener('mouseover', function() {
  mainArrowIcon.classList.add('hovered');
});

mainLearnMoreBtn.addEventListener('mouseout', function() {
  mainArrowIcon.classList.remove('hovered');
});




  




