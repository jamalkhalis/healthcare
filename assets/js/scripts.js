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

// var flkty = new Flickity( '.main-gallery', {
//   cellAlign: 'left',
//   contain: true,
//   wrapAround: true,
//   prevNextButtons: false,
//   autoPlay: 5000
// });

let nameFormInput = "";
let emailFormInput = "";
let phoneFormInput = "";
let subjectFormInput = "";
let messageFormInput = "";

const sendMessage = document.getElementById('sendMessage');
const nameForm = document.getElementById('nameForm');
const emailForm = document.getElementById('emailForm');
const phoneForm = document.getElementById('phoneForm');
const subjectForm = document.getElementById('subjectForm');
const messageForm = document.getElementById('messageForm');
const yourMessageIsSent = document.getElementById('yourMessageIsSent');


nameForm.addEventListener('input', function(event) {
  nameFormInput = event.target.value;
})

emailForm.addEventListener('input', function(event) {
  emailFormInput = event.target.value;
})

phoneForm.addEventListener('input', function(event) {
  phoneFormInput = event.target.value;
})

subjectForm.addEventListener('input', function(event) {
  subjectFormInput = event.target.value;
})

messageForm.addEventListener('input', function(event) {
  messageFormInput = event.target.value;
})


sendMessage.addEventListener('click', function(event) {

  let messageObject = {
    name: nameFormInput,
    emailAddress: emailFormInput,
    phone: phoneFormInput,
    subject: subjectFormInput,
    message: messageFormInput
  }

  fetch("https://babaccm-com-server.herokuapp.com/contact", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageObject)
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);

    if (result) {
      yourMessageIsSent.textContent = `Your message is sent! we will contact you, thank you so mush`;
      nameForm.value = "";
      emailForm.value = "";
      phoneForm.value = "";
      subjectForm.value = "";
      messageForm.value = "";
    }

  })



})