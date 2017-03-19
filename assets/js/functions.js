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
                $('.rightMenu .downArrow').on('click', section0.hide);
              },
        hide: function()
              {
                var sh = section0.home;
                sh.fadeOut(500);
                section1.init();
              },
    }

    var section1 =
    {
        skills: $('.section1'),
        init: function()
        {
            $('.section1').delay(500).fadeIn(1000);
            $('.rightMenu .downArrow').on('click', this.hide);
        },
        hide: function()
        {
          section1.skills.fadeOut(300);
          section1.skills.addClass('skillsHide');
          section2.init();
        },
    }

    var section2 =
    {
        work: $('#section2'),
        init: function()
        {
            section2.work.delay(800).fadeIn(200);
            $('.rightMenu .downArrow').on('click', this.hide);
        },
        hide: function()
        {
            section2.work.fadeOut(300);
            section2.work.addClass('skillsHide');
            section3.init();
        },
      }
      var section3 =
      {
          blog: $('#section3'),
          init: function()
          {
              section3.blog.delay(800).fadeIn(200);
              $('.rightMenu .downArrow').on('click', this.hide);
          },
          hide: function()
          {
            section3.blog.fadeOut(300);
            section3.blog.addClass('skillsHide');
            section4.init();
          }
      }
      var section4 =
      {
        contact: $('#section4'),
        init: function()
        {
          section4.contact.delay(800).fadeIn(200);

        },
      }


    section0.init();
})();
};
