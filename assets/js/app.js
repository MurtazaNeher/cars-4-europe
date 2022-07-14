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
        document
            .getElementById("header-tab1")
            .classList.remove("l-tab");
        document
            .getElementById("header-tab2")
            .classList.add("r-tab");

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
        document
            .getElementById("header-tab2")
            .classList.remove("r-tab");
        document
            .getElementById("header-tab1")
            .classList.add("l-tab");
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

function triggerDropdown() {
    if (document.getElementById("index-header-d1-con").style.display === "none") {
        document.getElementById("index-header-d1-con").style.display = "block";
        document.getElementById("index-header-d1-con").style.borderTop = "none";
        document.getElementById("index-header-d1-btn").style.borderBottom = "none";
    } else {
        document.getElementById("index-header-d1-con").style.display = "none";
        document.getElementById("index-header-d1-btn").style.borderBottom = "1px solid #39379a4d";
    }
}

function setDropdownVal(val) {
    document.getElementById("index-header-d1-btn-p").innerText = val;
    document.getElementById("hcs-clear-btn").style.display = "block";
    document.getElementById("open-dd").style.display = "none";

    triggerDropdown();

}

function clearDD() {
    document.getElementById("index-header-d1-btn-p").innerText = "Honda";
    document.getElementById("hcs-clear-btn").style.display = "none";
    document.getElementById("open-dd").style.display = "block";


};

// Tootltip
function showToolTip(mssg) {
    console.log(mssg)
}