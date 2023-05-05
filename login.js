//login function

function Loginform () {
    //Get form data
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //Retrieve login data from session storage
    var savedUsername = sessionStorage.getItem("username");
    var savedPassword = sessionStorage.getItem("password");

    //Check if login data matches form data
    if (username === savedUsername && password === savedPassword) {
        //Login successful
        alert("Login successful.");
        //Redirect to landing page
        window.location.href = "index.html";
    } else {
        //Login failed
        alert("Invalid username or password");
    }

    //Reset form
    document.getElementById("loginform").reset();
    
}