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
                sh.fadeOut(500);
                section1.init();
              }
    }

    var section1 =
    {
        skills: $('#section1'),
        init: function()
        {
            $('#section1').delay(500).fadeIn(1000);
            $('.rightMenu .downArrow').on('click', this.hide);
        },
        hide: function()
        {
          section1.skills.fadeOut(300);
          section2.init();
        }
    }

    var section2 =
    {
        work: $('#section2'),
        init: function()
        {
            $('#section2').delay(800).fadeIn(200);
        }
    }


    section0.init();
})();
};
