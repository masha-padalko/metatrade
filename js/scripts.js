$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1, 
    slidesToScroll: 1,
    mobileFirst:true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '200px',
          centerMode: true,
          
        }
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: '350px',
          centerMode: true,
          dots: true,
        }
      },
    ]
  });
});

