/* SIDEBAR */
function toggleSidebar() {
    sidebar.classList.toggle("active");
    main.classList.toggle("shift");
}

/* ================= BACKGROUND HERO (ADMIN) ================= */
const hero = document.getElementById("hero");
const bgData = JSON.parse(localStorage.getItem("heroBackground"));

if (hero && bgData) {
    if (bgData.type === "image") {
        hero.style.background = `
            url(${bgData.value}) center / cover no-repeat
        `;
    } else if (bgData.type === "color") {
        hero.style.background = bgData.value;
    }
}
