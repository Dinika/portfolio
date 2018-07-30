window.addEventListener("load", function()
{
  var loadScreen = document.getElementById('loadScreen');
  document.body.removeChild(loadScreen);
  revealContent();
});

if (!document.hidden) {
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
};
