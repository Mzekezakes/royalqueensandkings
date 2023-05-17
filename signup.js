//signup fuction

function Signup() {
var userId = document.getElementById("user Id").value;
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("contact").value;
var profession = document.getElementById("profession").value;
var location = document.getElementById("location").value;
var password = document.getElementById("password").value;
var status = document.getElementById("status").value;

// Perform form validation
if (userId === "") {
    alert("Please enter a userId");
    return;
}
if (name === "") {
    alert("Please enter a name");
    return;
}
if (email === "") {
    alert("Please enter an email address");
    return;
}
if (phone === "") {
    alert("Please enter a phone number");
    return;
}
if (profession === "") {
    alert("Please enter profession");
    return;
}
if (location === "") {
    alert("Please enter locaton");
    return;
}
if (password === "") {
    alert("Please enter a password");
    return;
}
if (status === "") {
    alert("please enter status");
    return;
}

// Save form data in session memory
sessionStorage.setItem("user Id",userId);
sessionStorage.setItem("name",name);
sessionStorage.setItem("email",email);
sessionStorage.setItem("phone",phone);
sessionStorage.setItem("profession",profession);
sessionStorage.setItem("location",location);
sessionStorage.setItem("password",password);
sessionStorage.setItem("status",status);

//Redirect to landing page
window.location.href = "index.html";

// Display success message
alert("Signup successful.");
}

