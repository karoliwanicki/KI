$(function(){

  $('.tabs .tab-links a').on('click', function(e){
       var currentAttrValue = $(this).attr('href');
       $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
       $(this).parent('li').addClass('active').siblings().removeClass('active');
       e.preventDefault();
   });


   $("#test-circle").circliful({
          animationStep: 5,
          foregroundBorderWidth: 5,
          backgroundBorderWidth: 15,
          backgroundColor: '#ECECEA',
          foregroundColor: '#D9853B',
          fillColor: '#d2d2d1',
          fontColor: 'black',
          percentageTextSize: 36,
          percent: 65,

      });

      $("#test-circle1").circliful({
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        backgroundColor: '#ECECEA',
        foregroundColor: '#D9853B',
        fillColor: '#d2d2d1',
        fontColor: 'black',
        percentageTextSize: 36,
             percent: 35
         });

         $("#test-circle3").circliful({
           animationStep: 5,
           foregroundBorderWidth: 5,
           backgroundBorderWidth: 15,
           backgroundColor: '#ECECEA',
           foregroundColor: '#D9853B',
           fillColor: '#d2d2d1',
           fontColor: 'black',
           percentageTextSize: 36,
                percent: 68
            });
            $("#test-circle4").circliful({
              animationStep: 5,
              foregroundBorderWidth: 5,
              backgroundBorderWidth: 15,
              backgroundColor: '#ECECEA',
              foregroundColor: '#D9853B',
              fillColor: '#d2d2d1',
              fontColor: 'black',
              percentageTextSize: 36,
                   percent: 32
               });

























});
