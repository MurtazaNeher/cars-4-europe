function switchHeaderForm(num) {
  if (num == 1) {
    document.getElementById("header-form1").style.display = "block";
    document.getElementById("header-form2").style.display = "none";
    document.getElementById("header-tab1").classList.add("header-tab-active");
    document
      .getElementById("header-tab1")
      .classList.remove("header-tab-inactive");
    document.getElementById("header-tab2").classList.add("header-tab-inactive");
    document
      .getElementById("header-tab2")
      .classList.remove("header-tab-active");
  } else {
    document.getElementById("header-form1").style.display = "none";
    document.getElementById("header-form2").style.display = "block";
    document.getElementById("header-tab2").classList.add("header-tab-active");
    document
      .getElementById("header-tab2")
      .classList.remove("header-tab-inactive");
    document.getElementById("header-tab1").classList.add("header-tab-inactive");
    document
      .getElementById("header-tab1")
      .classList.remove("header-tab-active");
  }
}

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Show password : Registration page
function showRcPass() {
  var x = document.getElementById("rc-pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//   Select List Logic

function setSelectBtn() {
    let selectForm = document.getElementById("home-company-select");
  if (selectForm.options[selectForm.selectedIndex] !== 0) {

    document.getElementById("hcs-clear-btn").style.display = "block";
    selectForm.style.background = "transparent"

  }
}
function clearSelect() {
let selectForm = document.getElementById("home-company-select");

  if (selectForm.selectedIndex != 0) {
    selectForm.selectedIndex = 0;
    document.getElementById("hcs-clear-btn").style.display = "none";

  }
}

