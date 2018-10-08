window.addEventListener("load", function()
{
  var loadScreen = document.getElementById('loadScreen');
  document.body.removeChild(loadScreen);
  revealContent && revealContent();
});

if (!document.hidden) {
  const sectionsMap = [
    {
      name: 'header',
      number: 0
    },
    {
      name: 'skills',
      number: 1,
    },
    {
      name: 'work',
      number: 2,
    },
    {
      name: 'blog',
      number: 3,
    },
    {
      name: 'contact',
      number: 4,
    },
  ];

  let currentSection = sectionsMap[0];

  const projects = [
    {
      name: 'cern-dashboard',
    },
    {
      name: 'optimizing-critical-rendering-path',
    },
    {
      name: 'inspire'
    }
  ]

  //TODO: refactor
  sectionsMap.map( section => {
    if(document.getElementById(section.name) && document.getElementById(section.name).querySelector('.next-button')) {
      document.getElementById(section.name).querySelector('.next-button').addEventListener('click', function(){
        let nextSection = sectionsMap[currentSection.number + 1];
        let nextSectionDiv = document.getElementById(nextSection.name);
        let currentSectionDiv = document.getElementById(currentSection.name);
        nextSectionDiv.classList.toggle('hide');
        currentSectionDiv.classList.toggle('hide');
        currentSection = sectionsMap[nextSection.number];
        highlightClickedNavOption(currentSection.number);
        revealContent();
      });
    }
  });

  //TODO: refactor
  sectionsMap.map( section => {
    if(document.getElementById(section.name) && document.getElementById(section.name).querySelector('.previous-button')) {
      document.getElementById(section.name).querySelector('.previous-button').addEventListener('click', function(){
        let nextSection = sectionsMap[currentSection.number - 1];
        let nextSectionDiv = document.getElementById(nextSection.name);
        let currentSectionDiv = document.getElementById(currentSection.name);
        nextSectionDiv.classList.toggle('hide');
        currentSectionDiv.classList.toggle('hide');
        currentSection = sectionsMap[nextSection.number];
        highlightClickedNavOption(currentSection.number);
        revealContent();
      });
    }
  });

  if(document.getElementsByClassName('navigation-option')){
    let navigationOptions = document.getElementsByClassName('navigation-option');
    for(var i = 0; i <= navigationOptions.length; i++) {
        navigationOptions[i] && navigationOptions[i].addEventListener('click', navigateToSection.bind(navigationOptions[i], i));
    }
  }

  function navigateToSection(sectionIndex) {
    highlightClickedNavOption(sectionIndex);
    currentSectionDiv = document.getElementById(currentSection.name);
    currentSectionDiv.classList.toggle('hide');
    nextSectionDiv = document.getElementById(sectionsMap[sectionIndex]['name']);
    nextSectionDiv.classList.toggle('hide');
    currentSection = sectionsMap[sectionIndex];
    revealContent();
  }

  function highlightClickedNavOption(clickedSectionIndex) {
    document.querySelector('.navigation-option.active').classList.toggle('active');
    document.querySelector('nav').children[clickedSectionIndex].classList.toggle('active');
  }

  function revealContent() {
    var lineMaker = new LineMaker({
        parent: { element: document.body, position: 'append' },
        position: 'fixed',
        lines: [
          {top: 0, left: '0', width: '20vw', height: '100vh', color: '#3c3c3c', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 0, direction: 'TopBottom' }},
          {top: 0, left: '20vw', width: '20vw', height: '100vh', color: '#E0E0E0', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 150, direction: 'BottomTop' }},
          {top: 0, left: '40vw', width: '20vw', height: '100vh', color: '#3c3c3c', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 300, direction: 'TopBottom' }},
          {top: 0, left: '60vw', width: '20vw', height: '100vh', color: '#E0E0E0', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 450, direction: 'BottomTop' }},
          {top: 0, left: '80vw', width: '20vw', height: '100vh', color: '#3c3c3c', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 600, direction: 'TopBottom' }}
        ]
    });
    
    setTimeout(function() {
      lineMaker.animateLinesOut();
    }, 0);
  }
};
