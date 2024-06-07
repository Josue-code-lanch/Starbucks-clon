document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const navbar = document.querySelector('.navbar');

    dropdownBtn.addEventListener('click', function () {
        navbar.classList.add('show');
    });
});