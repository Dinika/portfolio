window.addEventListener("load", function()
{
  var loadScreen = document.getElementById('loadScreen');
  document.body.removeChild(loadScreen);
});

if (!document.hidden) {
 (function(){

    var diamond = $('.diamond').addClass('dAnimate');
    $('.rightMenu .downArrow').on('click', function()
      {
          var element = document.querySelector('.hiddenWaitMessage');

          element.classList.add('waitMessage');

      });

})();
};
