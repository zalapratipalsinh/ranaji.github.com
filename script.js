document.addEventListener("DOMContentLoaded", function () {
    var scrollArrows = document.getElementById("scroll-arrows");

    function updateScrollArrows() {
        if (window.scrollY > 100) {
            scrollArrows.style.opacity = "1";
        } else {
            scrollArrows.style.opacity = "0";
        }
    }

    window.addEventListener("scroll", function () {
        updateScrollArrows();
    });

    // Smooth scrolling when clicking the arrows
    document.querySelector('.scroll-up').addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelector('.scroll-down').addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});
