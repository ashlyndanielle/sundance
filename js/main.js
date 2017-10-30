$(document).ready(function(){
  

  let deviceWidth = $(window).width();
  let deviceHeight = $(window).height();
  console.log('width: ', deviceWidth);
  console.log('height: ', deviceHeight);

    // set position of clouds
    $('.top').css( {'bottom': deviceHeight - 200});
    $('.bottom').css( {'left': deviceWidth, 'bottom': deviceHeight - 400} );
    // set position of moon relative to the width of screen
    $('.moon').css( {'left': deviceWidth - 250} );

    
  
  // function to change background color
  const changeBackground = color => {
    jQuery(".container").stop().animate({
      backgroundColor: color
    }, 600 );
  }

  // colors
  const day = '#5283A0';
  const night = '#021C2C';

  /**********************/
  /**** CREATE NIGHT ****/
  /**********************/

    $('.sun').on('click', function(){
      console.log('Sun Clicked')

      $('.sun').animate({top: '-=20'}, 500, function(){
        $('.sun').animate({top: '+=1000'}, 1200, function(){
          changeBackground(night);
          $('.night-time').show('slow', function(){
            $('.daytime').fadeOut('fast', function(){
              $('.mountain-night').fadeIn('slow', function(){
                $('.moon').animate({top: '-=1000'}, 1000, function(){
                  $('.mountain-day').hide();
                })
              })
            })
          })
        })
      })
    });

  /********************/
  /**** CREATE DAY ****/
  /********************/    

    $('.moon').on('click', function(){
      console.log('Moon Clicked');
      
      $('.moon').animate({top: '-=20'}, 500, function(){
        $('.moon').animate({top: '+=1000'}, 1200, function(){
          $('.daytime').fadeIn('fast', function(){
            changeBackground(day);
            $('.night-time').hide('fast', function(){
              $('.mountain-day').fadeIn('slow', function(){
                $('.sun').animate({top: '-=1000'}, 1000, function(){
                  $('.mountain-night').hide();
                })
              })
            })
          })
        })
      })
    })
  });