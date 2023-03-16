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

  var forms = $(".needs-validation");
  let password = document.getElementById("registration-password");
  var passwordconf = document.getElementById("registration-password-conf");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else if (form.name === "registration") {
          if (!(password.value === passwordconf.value)) {
            event.preventDefault();
            event.stopPropagation();
            // passwordconf.setCustomValidity("invalid");
            passwordconf.classList.add("is-invalid");
          }
        }

        if (password.value === passwordconf.value && form.checkValidity()) {
          passwordconf.setCustomValidity("");
          form.submit();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
});

let navbar = document.getElementById("header").classList;
let active_class = "header_scrolled";
var badge = document.getElementById("cart_badge");

var nftCount = 0;
var cardList = [];
var dropdownCard = document.getElementById("dropdown-card");
var dropdownMenuButton = document.getElementById("dropdownMenuButton");

window.addEventListener("scroll", (e) => {
  if (scrollY > 500) navbar.add(active_class);
  else navbar.remove(active_class);
});

const empty = document.createElement("p");
empty.innerHTML = "empty";
const icon = document.createElement("span");
icon.classList.add("bi", "bi-bag-x", "ms-3");
empty.appendChild(icon);
empty.id = "empty";
empty.classList.add("text-center", "m-0");
dropdownMenuButton.addEventListener("click", (e) => {
  if (nftCount == 0) {
    dropdownCard.appendChild(empty);
  } else document.getElementById("empty").remove();
});

function showbadge() {
  if (nftCount > 0) {
    badge.innerHTML = nftCount;
    badge.classList.add("show");
  } else badge.classList.remove("show");
}

function addCount() {
  nftCount++;
  showbadge();
}

function decrisCount() {
  nftCount--;
  showbadge();
}

var addButtons = document.getElementsByClassName("personal-card__button");
var removebtn = document.getElementsByClassName("removebtn");

for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", (e) => {
    let element = e.target
      .closest(".personal-card")
      .querySelector("#personal-card__profession").innerText;

    if (!cardList.includes(element)) {
      const card__item = document.createElement("div");
      card__item.classList.add("card__item");
      const p = document.createElement("p");
      const button = document.createElement("button");
      const img = document.createElement("img");
      p.innerHTML = element;
      button.classList.add("removebtn", "btn-danger");
      button.innerHTML = "X";
      button.addEventListener("click", (e) => {
        cardList.splice(cardList.indexOf(element), 1);
        decrisCount();
        e.target.parentElement.remove();
      });

      img.src = e.target
        .closest(".personal__item")
        .querySelector(".personal-image").src;
      img.width = 100;
      card__item.appendChild(p);
      card__item.appendChild(img);
      card__item.appendChild(button);
      dropdownCard.appendChild(card__item);
      cardList.push(element);
      addCount();
    }
  });
}
