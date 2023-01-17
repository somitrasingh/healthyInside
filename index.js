var bar = document.getElementById("bar");
var close = document.getElementById("close");
var navbar = document.getElementById("navbar");

bar.addEventListener("click", function() {
    navbar.classList.add("active");
});

close.addEventListener("click", function() {
    navbar.classList.remove("active");
});