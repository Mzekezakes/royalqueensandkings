//signup fuction

function Signup() {
var userId = document.getElementById("userId").value;
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
sessionStorage.setItem("userId",userId);
sessionStorage.setItem("name",name);
sessionStorage.setItem("email",email);
sessionStorage.setItem("phone",phone);
sessionStorage.setItem("profession",profession);
sessionStorage.setItem("location",location);
sessionStorage.setItem("password",password);
sessionStorage.setItem("status",status);

document.getElementById("userId").innerHTML=userID;
document.getElementById("Name").innerHTML=Name;
document.getElementById("email").innerHTML=email;
document.getElementById("phone").innerHTML=phone;
document.getElementById("profession").innerHTML=profession;
document.getElementById("location").innerHTML=location;
document.getElementById("password").innerHTML=password;
document.getElementById("status").innerHTML=status;

//Redirect to landing page
window.location.href = "index.html";

// Display success message
alert("Signup successful.");
}

//function Userprofile() {
// // Display user details in session memory
// document.getElementById("User ID").innerHTML = User ID;
// document.getElementById("Name").innerHTML = Name;
// document.getElementById("Email Address").innerHTML = Email Address;
// document.getElementById("Phone").innerHTML = Phone;
// document.getElementById("Profession").innerHTML = Profession;
// document.getElementById("Location").innerHTML = Location;
// document.getElementById("Status").innerHTML = Status;}
