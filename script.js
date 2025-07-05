// Smooth scroll for internal links (if using nav links in the future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Highlight current section in nav (optional if nav is added later)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionTop = current.offsetTop - 100;
    const sectionHeight = current.offsetHeight;
    const id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelectorAll("nav a")
        .forEach(link => link.classList.remove("active"));
      const currentLink = document.querySelector("nav a[href='#" + id + "']");
      if (currentLink) currentLink.classList.add("active");
    }
  });
});