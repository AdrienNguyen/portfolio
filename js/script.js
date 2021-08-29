document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const navigationLinks = document.querySelectorAll(".navigation__link");
const checkbox = document.querySelector(".navigation__checkbox");
navigationLinks.forEach(x => {
    x.addEventListener("click", () => {
        checkbox.checked = false;
    })
})