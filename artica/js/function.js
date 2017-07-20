/**
 * Created by Administrator on 2017-07-19.
 */

$(function(){

  // gnb
  $('.btn-menu-toggle').data({'open' : 'false'}).on('click', function(){

    if( $(this).data('open') == 'false' ){

      $('.gnb').css({right : 0});
      $(this).data({'open' : 'true'});

    } else {

      $('.gnb').css({right : -340});
      $(this).data({'open' : 'false'});

    }

  });

  $('.btn-menu-close').on('click', function(){
    $('.gnb').css({right : -340});
    $('.btn-menu-toggle').data({'open' : 'false'});
  });

  $('.gnb-link').on('click', function(e){

    e.preventDefault();

    var href = $(this).attr('href');

    var scrollPosition = $(href).offset().top;

    $('body').stop().animate({
      scrollTop : scrollPosition
    });

  });

  // about us - my story
  $('.item-photo-mask').on('click', function(){

    $(this).parent().next().css({height : 279});

  });

});