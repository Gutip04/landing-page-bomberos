// boton-hambrguesa
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });


  // elemntos ltr/rtl
  const textBtn = document.getElementById('toggle-direction');
  const html = document.documentElement;
  
  textBtn.addEventListener('click', () =>{
    const isRTL = html.getAttribute("dir") === "rtl";
    html.setAttribute("dir", isRTL ? "ltr" : "rtl"); 
    textBtn.textContent = isRTL ? "RTL" : "LTR"; //cambia el contenido del boton
  })


// boton para subir
const up = document.getElementById('up');

window.addEventListener("scroll", function(){
  const section = document.getElementById('home');
  const sectionBtn = section.offsetTop + section.offsetHeight;

  if (this.window.scrollY > sectionBtn){
    up.classList.remove("hidden");
  }else{
    up.classList.add("hidden");
  }
});





