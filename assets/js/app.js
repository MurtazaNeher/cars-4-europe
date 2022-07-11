function switchHeaderForm(num) {
    if (num == 1) {
        document.getElementById("header-form1").style.display = "block";
        document.getElementById("header-form2").style.display = "none";
        document.getElementById("header-tab1").classList.add("header-tab-active");
        document.getElementById("header-tab1").classList.remove("header-tab-inactive");
        document.getElementById("header-tab2").classList.add("header-tab-inactive");
        document.getElementById("header-tab2").classList.remove("header-tab-active");

    } else {
        document.getElementById("header-form1").style.display = "none";
        document.getElementById("header-form2").style.display = "block";
        document.getElementById("header-tab2").classList.add("header-tab-active");
        document.getElementById("header-tab2").classList.remove("header-tab-inactive");
        document.getElementById("header-tab1").classList.add("header-tab-inactive");
        document.getElementById("header-tab1").classList.remove("header-tab-active");
    }
};

$('#main').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    pageSize: 5,
    showPrevious: false,
    showNext: false,
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
})