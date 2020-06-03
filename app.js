const navSlide = () => {
    const mobileMenu = document.querySelector('.mobileMenu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // toggle nav
    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
            }  
        });
    });
}

 
navSlide();

function imageGallery() {
    const highlight = document.querySelector(".gallery-hightlight");
    const previews = document.querySelectorAll(".room-preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("room-active"));
        highlight.src = bigSrc;
        preview.classList.add("room-active");
      });
    });
  }
  
  imageGallery();

