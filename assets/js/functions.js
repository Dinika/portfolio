window.addEventListener("load", function()
{
  var loadScreen = document.getElementById('loadScreen');
  document.body.removeChild(loadScreen);
});

if (!document.hidden) {
 (function(){
    var section0 =
    {
        home: $('header'),
        init: function()
              {
                var diamond = $('.diamond').addClass('dAnimate');
                $('.rightMenu .downArrow').on('click', this.hide);
              },
        hide: function()
              {
                var sh = section0.home;
                sh.addClass('hExit');
                section1.init();
              }
    }

    var section1 =
    {
        init: function()
        {
          var element = document.querySelector('.hiddenWaitMessage');
              element.classList.add('waitMessage');

        }
    }
    section0.init();
})();
};
