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

  // portfolio list
  $('.pofol-list-item>.thumb').on('click', function(){

    var indexNumber = $(this).parent().index('.pofol-list-item');

    var lineNumber = Math.floor(indexNumber/4);

    var detailTop = parseInt( $('.detail-wrap').css('top') ) + ( lineNumber * 230 );

    $(this).next().css({
      top : detailTop,
      height : 486
    });

    for(var k=0; k<=3; k++){
      $('.pofol-list-item').eq( lineNumber*4 + k ).css({'padding-bottom' : 490});
    }

/*
    if( indexNumber >= 0 && indexNumber <=3 ){
      for(var i=0; i<=3; i++){
        $('.pofol-list-item').eq(i).css({'padding-bottom' : 490});
      }
    } else if( indexNumber >= 4 && indexNumber <= 7 ){
      for(var j=4; j<=7; j++){
        $('.pofol-list-item').eq(j).css({'padding-bottom' : 490});
      }
    }
*/

  });

  $('.pofol-list-item .btn-pop-close').on('click', function(){

    var indexNumber = $(this).parents('.pofol-list-item').index('.pofol-list-item');

    var lineNumber = Math.floor(indexNumber/4);

    $('.detail-wrap').css({height : 0});

    for(var k=0; k<=3; k++){
      $('.pofol-list-item').eq( lineNumber*4 + k ).css({'padding-bottom' : 0});
    }

  });

});