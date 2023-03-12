$(document).ready(function () {
  $(".top-slider").slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
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
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

let navbar = document.getElementById("header").classList;
let active_class = "header_scrolled";

window.addEventListener("scroll", (e) => {
  if (scrollY > 500) navbar.add(active_class);
  else navbar.remove(active_class);
});
