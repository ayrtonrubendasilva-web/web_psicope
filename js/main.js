// JavaScript de la página

console.log("Web de Psicopedagogía cargada correctamente.");

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    function cerrarMenu() {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
    }

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");

        const abierto = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", abierto);
        menuToggle.setAttribute(
            "aria-label",
            abierto ? "Cerrar menú" : "Abrir menú"
        );
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", cerrarMenu);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            cerrarMenu();
        }
    });
}