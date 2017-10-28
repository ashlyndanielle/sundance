$(document).ready(function(){

  let deviceWidth = $(window).width();
  console.log('width: ', deviceWidth);
  $('.bottom').css( {'left': deviceWidth} );

  $(window).scroll(function(){
    // positions of the top and bottom of view to top of page
    let scrollTop = $(window).scrollTop();
    let scrollBottom = $(window).scrollTop() + $(window).height();
    // colors
    const day = '#4F7286';
    const twilight = '#011C2C';
    const night = '#000407';

    // function to change background color
    const changeBackground = color => {
      jQuery(".container").stop().animate({
        backgroundColor: color
      }, 600 );
    }
    // change the background color based on scroll position
    if ( scrollTop >= 800 && scrollTop < 1600) {
      console.log('scrollTop: ', scrollTop)
      changeBackground(twilight);
    } else if ( scrollTop >= 1600) {
      changeBackground(night);
    } else {
      changeBackground(day);
    }

  })
});