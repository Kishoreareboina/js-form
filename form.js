document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "kishore@aithcloud.com" && password === "Aithcloud@12") {
        alert("Welcome, kishore! You are loged in");
        
    } 
     else {
        alert("Invalid username or password!");
        
    }
});