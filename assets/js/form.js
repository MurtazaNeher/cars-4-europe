// validation
var $registrationForm = $("#registration-form")
$.validator.addMethod("letters", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$registrationForm.validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            letters: true
        },
        email: {
            required: true,
            email: true
        },
        confirm_email: {
            required: true,
            email: true,
            equalTo : "#email"
        },
        password : {
            required: true,
            minlength : 8
        },
        password_confirm : {
            required: true,
            minlength : 8,
            equalTo : "#password"
        },
        nip:{
            minlength : 10,
            required : true,
            digits: true
        },
        phone:{
            minlength : 10,
            required : true,
            digits: true
        }
    },
    errorPlacement:function(error, el){
        var p = el.parent().parent();
        var temp = `<div class="error"></div>`;
        p.append(temp);
        p.find('div.error').append(error);
    },
    messages: {
        name: "Please specify your name (only letters and spaces are allowed)",
        email: "Please specify a valid email address",
        confirm_email:{
            required: "This field is required",
            equalTo: "Email address should be same as above"
        }
    },
    submitHandler: function () {
        alert("success");
    }
});


// validation
var $login = $("#login-form")
$.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$login.validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8
        }
    },
    errorPlacement: function(error, el) {
        var p = el.parent().parent();
        var temp = `<div class="error"></div>`;
        p.append(temp);
        p.find('div.error').append(error);
    },
    messages: {
        name: "Please specify your name (only letters and spaces are allowed)",
        email: "Please specify a valid email address"
    },
    submitHandler: function() {
        alert("success");
    }
});
// validation
var $problem = $("#problem-form")
$.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$problem.validate({
    rules: {
        email: {
            required: true,
            email: true
        }
    },
    errorPlacement: function(error, el) {
        var p = el.parent().parent();
        var temp = `<div class="error"></div>`;
        p.append(temp);
        p.find('div.error').append(error);
    },
    messages: {
        name: "Please specify your name (only letters and spaces are allowed)",
        email: "Please specify a valid email address"
    },
    submitHandler: function() {
        alert("success");
    }
});