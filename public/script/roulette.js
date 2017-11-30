function openchat(){
  document.getElementById("closed-chat").style.display="none";
  document.getElementById("live-chat").style.display="block";
}

function closechat(){
  document.getElementById("closed-chat").style.display="block";
  document.getElementById("live-chat").style.display="none";
}

function spinning(){
  document.getElementsByClassName("image-roulette")[0].style.display="none";
  document.getElementsByClassName("image-roulette-spin")[0].style.display="inline-block";
}

function no_spinning(){
  document.getElementsByClassName("image-roulette-spin")[0].style.display="none";
  document.getElementsByClassName("image-roulette")[0].style.display="inline-block";
}

function sendForgotPassword() {
  alert("The email has been sent correctly. Please check your email");
}

function setCookies(form) {
    if (validation()) {
        document.cookie = "username=" + document.forms["formSignIn"]["username"].value + ";path=/";
        document.cookie = "password=" + document.forms["formSignIn"]["password"].value + ";path=/";
        document.getElementsByClassName("signInModalWindow")[0].style.display = "none";
        var email = document.forms["formSignIn"]["email"].value;
        window.open('mailto:' + email + '?subject=Sign in Tripod&body=You just registered in our webpage. Welcome!');
        alert("Your user has been created correctly");
    } else {
        alert("Your user has NOT been created correctly");
    }
}

function getCookies(cookiename) {
    var name = cookiename + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookies() {
    var user = getCookies("username");
    var pass = getCookies("password");
    if (user == document.forms["formLogIn"]["username"].value && pass == document.forms["formLogIn"]["password"].value && user != null && user != "" && pass != null && pass != "") {
        alert("Welcome again " + user);
        window.location.href = "board.html";
        return user;
    } else {
        alert("Wrong user or password");
    }
}

function validation() {
    var result = false;
    var nameForm = document.forms["formSignIn"]["name"].value;
    var userName = document.forms["formSignIn"]["username"].value;
    var password = document.forms["formSignIn"]["password"].value;
    var password_length = document.forms["formSignIn"]["password"].length;
    var email = document.forms["formSignIn"]["email"].value;

    if (document.getElementById("policies").checked == false) {
        alert("You have to accept the terms of use, privacy and cookies");
        return result;
    }

    if (nameForm == null || nameForm == "") {
        alert("Name must be filled out");
        return result;
    }

    if (userName == null || userName == "") {
        alert("Username must be filled out");
        return result;
    }

    //for password
    if (password == null || password == "") {
        alert("Password must be filled out");
        return result;
    }
    if (password_length > 8) {
        alert("Password must be smaller than 8 characters and larger than 2, including one letter and one number");
        return result;
    }
    if (!password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)) {
        alert("Password must be smaller than 8 characters and larger than 2, including one letter and one number");
        return result;
    }

    if (!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$/)) {
        alert("Not a valid e-mail address");
        return result;
    }

    if (email == null || email == "") {
        alert("Email must be filled out");
        return result;
    }
    result = true;
    return result;
}
