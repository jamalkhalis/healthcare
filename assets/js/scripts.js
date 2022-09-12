const menu = document.querySelector('.navigation-nemu');

window.onscroll = function(e) {
  menu.style.backgroundColor = "#fff";
  // menu.addClass('shadow-sm')
  menu.classList.add("shadow-sm")
  // menu.style.boxShadow: "0px 5px 50px rgb(50 112 252 / 8%)"; 
}

const img1 = document.querySelector('#img-1');
const img1Parent = document.querySelector("#img-1-Parent");

let heightImg1 = img1.clientHeight;
  img1Parent.style.paddingTop = String(heightImg1)+"px";

window.addEventListener("resize", function(event) {

  heightImg1 = img1.clientHeight;
  img1Parent.style.paddingTop = String(heightImg1)+"px";

})

var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000
});