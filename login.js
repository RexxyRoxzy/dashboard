document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;
    // Simuler une connexion (remplace par une vraie API plus tard)
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        window.location.href = "stats.html";
    } else {
        alert("Invalid credentials!");
    }
});
