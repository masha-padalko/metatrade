$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1, // Number of slides to show initially
    slidesToScroll: 1,
    mobileFirst:true,
    responsive: [
      // {
      //   breakpoint: 500,
      //   settings: {
      //     centerPadding: '100px',
      //     centerMode: true,
      //   }
      // },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: '408px',
          centerMode: true,
        }
      },
    ]
  });
  
});

