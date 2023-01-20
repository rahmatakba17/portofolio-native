// INI JS TOOGLE
const menuToggle = document.querySelector('.menu-toggle input');
  const nav = document.querySelector('nav ul');
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
  });

  // dark mode
function myFunction(){
  var element = document.body;
  element.classList.toggle('dark-mode');
}
