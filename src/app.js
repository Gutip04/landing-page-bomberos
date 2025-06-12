document.addEventListener('DOMContentLoaded', () => {
  // Inicializa AOS
  AOS.init({
    duration: 800,
    once: false,
  });

  // Botón hamburguesa
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Botón LTR/RTL
  const textBtn = document.getElementById('toggle-direction');
  const html = document.documentElement;

  textBtn.addEventListener('click', () => {
    const isRTL = html.getAttribute("dir") === "rtl";
    html.setAttribute("dir", isRTL ? "ltr" : "rtl");
    textBtn.textContent = isRTL ? "RTL" : "LTR";
  });

  // Botón "subir"
  const up = document.getElementById('up');

  window.addEventListener("scroll", function () {
    const section = document.getElementById('home');
    const sectionBtn = section.offsetTop + section.offsetHeight;

    if (window.scrollY > sectionBtn) {
      up.classList.remove("opacity-0", "pointer-events-none");
      up.classList.add("opacity-100", "pointer-events-auto");
      AOS.refresh();
    } else {
      up.classList.add("opacity-0", "pointer-events-none");
      up.classList.remove("opacity-100", "pointer-events-auto");
    }
  });






  

});
