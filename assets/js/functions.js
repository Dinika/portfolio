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
        revealContent();
      });
    }
  });

  projects.map( project => {
    if(document.getElementById(project.name)) {
      document.getElementById(project.name).addEventListener('click', function() {
        currentSection = sectionsMap[2];
      })
    }
  });

  function revealContent() {
    var lineMaker = new LineMaker({
        parent: { element: document.body, position: 'append' },
        position: 'fixed',
        lines: [
          {top: 0, left: '0', width: '20vw', height: '100vh', color: '#F85659', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 0, direction: 'TopBottom' }},
          {top: 0, left: '20vw', width: '20vw', height: '100vh', color: '#7030a0', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 150, direction: 'BottomTop' }},
          {top: 0, left: '40vw', width: '20vw', height: '100vh', color: '#F85659', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 300, direction: 'TopBottom' }},
          {top: 0, left: '60vw', width: '20vw', height: '100vh', color: '#7030a0', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 450, direction: 'BottomTop' }},
          {top: 0, left: '80vw', width: '20vw', height: '100vh', color: '#F85659', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 600, direction: 'TopBottom' }}
        ]
    });
    
    setTimeout(function() {
      lineMaker.animateLinesOut();
    }, 0);
  }


  function displayProjectCaseStudy() {

  }
};
