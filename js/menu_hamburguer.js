function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector("#mobile_menu");

  if (!hamburger || !mobileMenu) {
    console.warn("Menu ainda não carregado. Tentando novamente...");
    setTimeout(initHamburgerMenu, 300);
    return;
  }

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  document.querySelectorAll("#mobile_nav_list a").forEach(link => {
    link.addEventListener("click", () => mobileMenu.classList.remove("show"));
  });

  console.log("✅ Menu hambúrguer ativo!");
}

// roda quando a página carrega
document.addEventListener("DOMContentLoaded", initHamburgerMenu);

// Corrige automaticamente links do header carregado via fetch
function corrigirLinksHeader() {
  const links = document.querySelectorAll("header a[href]");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("http") && !href.startsWith("/") && !href.startsWith("#")) {
      link.setAttribute("href", "/" + href);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(corrigirLinksHeader, 300);
});


