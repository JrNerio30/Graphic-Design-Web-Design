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

const navArrayBlackWhite = [mainNavigation, logoLink, allLinks,  ]
const shopJoinMain = document.querySelectorAll('section.shop-join-menu button')

/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\
MAIN SEACTION FEATURES
\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// Reveal Text feature on main section 
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

// Hover over the learn more button displays the right arrow icon
mainLearnMoreBtn.addEventListener('mouseover', function() {
  mainArrowIcon.classList.add('hovering');
});

mainLearnMoreBtn.addEventListener('mouseout', function() {
  mainArrowIcon.classList.remove('hovered');
});

/* 
When section is fully on the screen, activate 'on-screen' 
classlist to change background colour and text color to black and white 
*/


const naviLinks = document.querySelectorAll('a.links');
console.log(naviLinks)
const artSection = document.querySelector('section.art')
const mainTextArray = [headingColorChange, paraColorChange];
window.addEventListener('scroll', function() {
const artSecPosition = artSection.getBoundingClientRect();

  naviLinks.forEach(function(menus) {
    if(artSecPosition.top <= 362.2578125 && artSecPosition.bottom >= 878.2578125){
      menus.classList.add('white');
    }else{
      menus.classList.remove('white');
    }
  });

  mainTextArray.forEach(function(activate){
    if(artSecPosition.top <= 362.2578125 && artSecPosition.bottom >= 878.2578125) {
      artSection.classList.add('on-screen');
      mainNavigation.classList.add('bg-black');
      activate.classList.add('change');
      logoLink.classList.add('white');
      joinButton.classList.add('invert');
      shopButton.classList.add('invert');
    }else{
      artSection.classList.remove('on-screen');
      mainNavigation.classList.remove('bg-black');
      activate.classList.remove('change');
      logoLink.classList.remove('white');
      joinButton.classList.remove('invert');
      shopButton.classList.remove('invert');
    }
  })
});




  




