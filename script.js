$(document).ready(function () {
  $(".top-slider").slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".persons-slider").slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
