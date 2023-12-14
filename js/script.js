const hamburger = document.querySelector(".nav-hamburger");
const span1 = hamburger.querySelector("span:first-child");
const span2 = hamburger.querySelector("span:nth-child(2)");
const span3 = hamburger.querySelector("span:last-child");
const item = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
    item.classList.toggle("active");
    // setTimeout(() => {
    //     item.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    // }, 500);
});

document.addEventListener("click", (e) => {
    if (e.target !== hamburger && e.target !== span1 && e.target !== span2 && e.target !== span3) {
        item.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetOffset = targetElement.offsetTop - 100;

                window.scroll({
                    top: targetOffset,
                    behavior: "smooth",
                });
            }
        });
    });
});
