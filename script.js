const navMove = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const intro = document.querySelector('#intro');

  hamburger.addEventListener('click', ()=> {
    //toggle navigation 
    nav.classList.toggle('nav-active');
    /*removing the #intro visibility only when the hamburger is clicked on, 
    /*but ONLY if the nav element contains the class 'nav-active'. */

    if(nav.classList.contains('nav-active')) {
      intro.style.display = 'none';
    }
    else {
      intro.style.display = 'block';
    }
    
    //animating links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      }); 
    });

}

const scroll = () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.nav-links li');
  const nav = document.querySelector('.nav-links');

  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      if(nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
      }
    });
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      });
  });
}

navMove();
scroll();