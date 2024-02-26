document.getElementById("menu-icon").addEventListener("click", function() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("active");
    
    if (!menu.classList.contains("active")) {
        menu.classList.add("slideMenuOut");
        setTimeout(function() {
            menu.classList.remove("slideMenuOut");
        }, 500);
    }
});
