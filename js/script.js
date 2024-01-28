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
            "Situs ini merupakan hasil rancangan dan pengembangan saya menggunakan HTML dan CSS, dengan fokus menyajikan informasi lengkap mengenai berbagai paket pernikahan, didukung oleh galeri hasil pernikahan sebagai sumber inspirasi. Desain elegan dan profesional situs ini mencerminkan kreativitas, sementara tujuannya adalah memberikan panduan yang jelas bagi calon pengantin untuk memilih paket pernikahan yang sesuai dengan keinginan mereka.",
        url: "https://hati-kita.netlify.app/",
    },
    {
        jenis: "Korean Food Website",
        nama: "Resep Joss",
        logo: "korea.png",
        preview: ["resepjoss-home.png", "resepjoss-detail.png"],
        deskripsi:
            "Situs ini dibangun menggunakan HTML dan CSS, menghasilkan tampilan yang menarik dan bersih. Terdapat dua halaman unik yang memberikan informasi komprehensif tentang makanan Korea. Halaman pertama memberikan gambaran umum tentang keanekaragaman kuliner Korea dengan daftar makanan yang tersedia. Halaman kedua menawarkan rincian mendalam mengenai setiap hidangan, mencakup asal, bahan-bahan, dan cara penyajian. Desain responsif memastikan kenyamanan pengguna di berbagai perangkat, memudahkan pengunjung untuk menjelajahi dan menikmati informasi. Selain memuaskan selera kuliner, situs ini juga memperkenalkan budaya kuliner Korea dengan cara yang menarik dan informatif, termasuk menampilkan resep dan cara pembuatannya.",
        url: "https://resep-joss.netlify.app/",
    },
    {
        jenis: "Login Page",
        nama: "Login Page",
        logo: "login.png",
        preview: ["login-home.png", ""],
        deskripsi:
            "Situs ini saya kembangkan menggunakan HTML dan CSS dengan fokus pada elemen front-end, khususnya menciptakan tampilan halaman login yang bersih dan sederhana. Meskipun tidak memiliki fungsi back-end, halaman login ini dirancang agar user-friendly, memudahkan penggunaan tanpa kerumitan. Desain minimalis memastikan navigasi yang intuitif, memudahkan pengguna untuk masuk dengan cepat. Meskipun hanya front-end, perhatian terhadap detail menciptakan antarmuka yang menarik dan profesional. Keunggulan desain yang sederhana juga membuatnya mudah diintegrasikan dengan berbagai platform atau sistem back-end yang berbeda. Situs ini didesain untuk memberikan pengalaman pengguna efisien dalam masuk tanpa memerlukan fungsi back-end tambahan.",
        url: "https://aliefadam-login-page.netlify.app/",
    },
    {
        jenis: "Course Website",
        nama: "Geek Tutors",
        logo: "course.png",
        preview: ["geek_tutors-home.png", "geek_tutors-courses.png"],
        deskripsi:
            "Situs ini dirancang dan dikembangkan oleh saya menggunakan PHP dan database MySQL, memberikan pengalaman belajar yang dinamis. Menyajikan kelas-kelas tentang HTML dan CSS dengan materi yang terstruktur dan mudah dimengerti, platform ini juga menyertakan latihan pembuatan website untuk meningkatkan keterampilan praktis dan pengalaman langsung dalam pengembangan web. Sistem database MySQL digunakan untuk melacak kemajuan peserta, memberikan pengalaman belajar yang disesuaikan. Desain antarmuka yang ramah pengguna memastikan navigasi yang intuitif, memudahkan pengguna untuk menjelajahi materi kursus dan latihan. Tujuan utama platform ini adalah memberikan pendekatan pembelajaran interaktif dan mendalam, mendukung para pelajar dalam mengembangkan keterampilan mereka dalam dunia pengembangan web.",
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
    img.src = "imgs/" + project["logo"];
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
