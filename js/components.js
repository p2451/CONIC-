// Carrega header e footer dinamicamente com Template Literals
async function loadComponent(selector, file) {
  const container = document.querySelector(selector);
  if (!container) return;

  try {
    const response = await fetch(file);
    const html = await response.text();
    container.innerHTML = `${html}`; // template literal
  } catch (err) {
    console.error(`Erro ao carregar ${file}:`, err);
  }
}

// Executa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "componentes/header.html");
  loadComponent("footer", "componentes/footer.html");
});


// components.js - simple hamburger toggle
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', function(){
      const visible = nav.style.display === 'block';
      nav.style.display = visible ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!visible));
    })
  }
});

// MENU HAMBÚRGUER RESPONSIVO
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector("#mobile_menu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll("#mobile_nav_list a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  });
});
