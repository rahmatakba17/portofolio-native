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

// window.onscroll = () => {
//   let header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 100);
// }
document.addEventListener('scroll', () => {
   const header= document.querySelector('.header');
   header.classList.toggle('.sticky');
})