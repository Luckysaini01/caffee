// ===============================
// MY CAFE - JAVASCRIPT
// ===============================


// 1. Visit Us Button
function visitCafe() {

    alert("☕ Welcome to My Cafe!\n\nWe are happy to serve you.");

}


// 2. Show Menu
function showMenu() {

    alert(
        "☕ MY CAFE MENU\n\n" +
        "Espresso       ₹100\n" +
        "Latte          ₹140\n" +
        "Cappuccino     ₹150\n" +
        "Cold Coffee    ₹160\n" +
        "Mocha          ₹170"
    );

}


// 3. Welcome Message
function welcomeMessage() {

    console.log("Welcome to My Cafe ☕");

}

welcomeMessage();


// 4. Order Coffee
function orderCoffee(coffee) {

    alert("Your " + coffee + " order has been received! ☕");

}


// 5. Contact Button
function contactCafe() {

    alert(
        "📞 Contact My Cafe\n\n" +
        "Phone: +91 9876543210\n" +
        "Email: mycafe@gmail.com"
    );

}


// 6. Change Background
function changeBackground() {

    document.body.style.backgroundColor = "#f5e6d3";

}


// 7. Dark Mode
function darkMode() {

    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";

}


// 8. Light Mode
function lightMode() {

    document.body.style.backgroundColor = "#fffaf3";
    document.body.style.color = "#3b1f1f";

}


// 9. Scroll to Menu
function goToMenu() {

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}


// 10. Scroll to Contact
function goToContact() {

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

}


// 11. Page Loaded
window.onload = function () {

    console.log("My Cafe website is ready!");

};