const hamburger = document.querySelector(".nav-hamburger");
const span1 = hamburger.querySelector("span:first-child");
const span2 = hamburger.querySelector("span:nth-child(2)");
const span3 = hamburger.querySelector("span:last-child");
const item = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
    item.classList.toggle("active");
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

const dataProject = [
    {
        jenis: "Wedding Package Website",
        nama: "Hati Kita",
        logo: "wedding.png",
        preview: ["wedding-home.png", "wedding-bundle.png"],
        deskripsi:
            "This site, designed and developed by me using HTML and CSS, focuses on providing comprehensive information about various wedding packages, supported by a gallery of wedding results as a source of inspiration. The site's elegant and professional design reflects creativity, while the goal is to provide clear guidance for brides-to-be to choose a wedding package that suits them.",
        url: "https://hati-kita.netlify.app/",
    },
    {
        jenis: "Korean Food Website",
        nama: "Resep Joss",
        logo: "korea.png",
        preview: ["resepjoss-home.png", "resepjoss-detail.png"],
        deskripsi:
            "The site was built using HTML and CSS, resulting in an attractive and clean look. There are two unique pages that provide comprehensive information about Korean food. The first page provides an overview of Korea's culinary diversity with a list of available foods. The second page offers in-depth details about each dish, including its origin, ingredients, and how it is served. The responsive design ensures user convenience across various devices, making it easy for visitors to explore and enjoy the information. In addition to satisfying culinary appetites, the site also introduces Korean culinary culture in an engaging and informative way, including featuring recipes and how they are made.",
        url: "https://resep-joss.netlify.app/",
    },
    {
        jenis: "Coffee Website",
        nama: "KOPI RAKYAT",
        logo: "coffee-maker.png",
        preview: ["kopi-rakyat-home.png", "kopi-rakyat-product.png"],
        deskripsi:
            "This site, designed and developed by me using HTML, CSS, and Javascript, presents a comprehensive catalog of quality coffee available for sale. Each coffee variant is accompanied by detailed information, including its flavor, and unique characteristics. The user-friendly interface ensures easy navigation and a pleasant shopping experience. Users can explore different types of coffee to find a flavor that suits their preferences. The diversity of products and responsive design create an exciting atmosphere for coffee lovers to explore and choose the best coffee.",
        url: "https://kopi-rakyat.netlify.app/",
    },
    {
        jenis: "Course Website",
        nama: "Geek Tutors",
        logo: "course.png",
        preview: ["geek_tutors-home.png", "geek_tutors-courses.png"],
        deskripsi:
            "This site was designed and developed by me using PHP and MySQL database, providing a dynamic learning experience. Presenting classes on HTML and CSS with structured and easy-to-understand material, the platform also includes website building exercises to enhance practical skills and hands-on experience in web development. A MySQL database system is used to track participants' progress, providing a customized learning experience. The user-friendly interface design ensures intuitive navigation, making it easy for users to explore the course material and exercises. The main goal of the platform is to provide an interactive and immersive learning approach, supporting learners in developing their skills in the world of web development.",
        url: "http://geek-tutors.rf.gd/",
    },
];

dataProject.forEach((project) => {
    const wrapper = document.querySelector("#project .wrapper");
    const containerItem = document.createElement("div");
    const box = document.createElement("div");
    const img = document.createElement("img");
    const desc = document.createElement("div");

    containerItem.classList.add("item");
    desc.classList.add("desc");
    desc.innerHTML = project["jenis"];
    box.classList.add("box");
    img.srcset = "imgs/" + project["logo"];
    box.append(img);
    containerItem.append(box);
    containerItem.append(desc);
    wrapper.append(containerItem);
});

const containerItems = document.querySelectorAll("#project .wrapper .item");
const overlayDetail = document.querySelector(".overlay-detail-project");
const detailItem = document.querySelector(".overlay-detail-project .detail");
const preview1 = overlayDetail.querySelector(".detail .left img:first-child");
const preview2 = overlayDetail.querySelector(".detail .left img:last-child");
const namaProject = overlayDetail.querySelector(".detail .right h1");
const deskripsiProject = overlayDetail.querySelector(".detail .right p");
const link = overlayDetail.querySelector(".detail .right a");
const btnClose = overlayDetail.querySelector(".close");

containerItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        namaProject.innerHTML = dataProject[index]["nama"];
        deskripsiProject.innerHTML = dataProject[index]["deskripsi"];
        preview1.src = "imgs/" + dataProject[index]["preview"][0];
        preview2.src = "imgs/" + dataProject[index]["preview"][1];
        link.href = dataProject[index]["url"];
        overlayDetail.style.display = "flex";
        detailItem.style.animation = "500ms fadeIn forwards";
    });
});

btnClose.addEventListener("click", () => {
    detailItem.style.animation = "500ms fadeOut forwards";
    setTimeout(() => {
        overlayDetail.style.display = "none";
    }, 500);
});
