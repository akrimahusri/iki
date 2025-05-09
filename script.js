tosp();
var klik = new Audio("https://files.dariku.my.id/mylove/klik.mp3");
klik.loop = false;
klik.autoplay = false;

// ======================================
var audio = new Audio(musik);
audio.loop = true;
audio.autoplay = false;

function playMusik() {
  audio.play();
}
var notif = new Audio("https://files.dariku.my.id/mylove/notif.mp3");

document.querySelector(".hilang1").addEventListener("click", notif1);
document.querySelector(".hilang2").addEventListener("click", notif2);
document.querySelector(".hilang3").addEventListener("click", notif3);
document.querySelector(".hilang4").addEventListener("click", kirimpesan);
if (pengirim) {
  document.querySelector(".nama1").innerHTML = pengirim;
  document.querySelector(".nama2").innerHTML = pengirim;
  document.querySelector(".nama3").innerHTML = pengirim;
}
if (background) {
  document.querySelector(".background").style.backgroundImage = "url('" + background + "')";
}
window.onload = start;
// ============================================
var swalo = Swal.mixin({ allowOutsideClick: false, confirmButtonText: "OK" });

function notif1() {
  audio.play();
  document.querySelector(".hilang1").style.display = "none";
  document.querySelector(".hilang2").style.display = "inline-block";
  notif.play();
  document.querySelector(".notif1").style.transform = "translateX(0)";
  typeWritersatu();
}

function notif2() {
  notif.play();
  document.querySelector(".hilang2").style.display = "none";
  document.querySelector(".hilang3").style.display = "inline-block";
  document.querySelector(".notif1").style.display = "none";
  document.querySelector(".notif2").style.transform = "translateX(0)";
  typeWriterdua();
}
function notif3() {
  notif.play();
  document.querySelector(".hilang3").style.display = "none";
  document.querySelector(".hilang4").style.display = "inline-block";
  document.querySelector(".notif2").style.display = "none";
  document.querySelector(".notif3").style.transform = "translateX(0)";

  typeWritertiga();
}
var i = 0;
var speed = 120;
var txtsatu = ucapansatu;
function typeWritersatu() {
  if (i < txtsatu.length) {
    if (txtsatu.charAt(i) == "#") {
      document.querySelector(".gombal1").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal1").innerHTML += txtsatu.charAt(i);
    }
    document.querySelector(".gombal1").scrollTop = document.querySelector(".gombal1").scrollHeight;

    i++;
    setTimeout(typeWritersatu, speed);
  }
}

var j = 0;
var txtdua = ucapandua;
function typeWriterdua() {
  if (j < txtdua.length) {
    if (txtdua.charAt(j) == "#") {
      document.querySelector(".gombal2").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal2").innerHTML += txtdua.charAt(j);
    }
    document.querySelector(".gombal2").scrollTop = document.querySelector(".gombal2").scrollHeight;

    j++;
    setTimeout(typeWriterdua, speed);
  }
}

var k = 0;
var txttiga = ucapantiga;
function typeWritertiga() {
  if (k < txttiga.length) {
    if (txttiga.charAt(k) == "#") {
      document.querySelector(".gombal3").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal3").innerHTML += txttiga.charAt(k);
    }
    document.querySelector(".gombal3").scrollTop = document.querySelector(".gombal3").scrollHeight;

    k++;
    setTimeout(typeWritertiga, speed);
  }
}

function tanggal() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let hari = days[d.getDay()];
  let tgl = d.getDate();
  let bln = months[d.getMonth()];
  document.querySelector(".tgl").innerHTML = hari + ", " + tgl + " " + bln;
}
function startTime() {
  tanggal();
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  h = checkTime(h);
  m = checkTime(m);
  document.getElementById("jam").innerHTML = h + ":" + m;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime();

function tosp() {
  var topp =
    '<div class="jam"><h1 id="jam"></h1></div><div class="tanggal"><p class="tgl"></p></div><div class="notif notif1"><div class="header"><div class="wa"><h3><i class="bi bi-whatsapp"></i></h3><h3>WHATSAPP</h3></div><div class="time"><p>Now</p></div></div><div class="nama nama1"><p>Your Love❤️</p></div><div class="isi"><p class="gombal1"></p></div></div><div class="notif notif2"><div class="header"><div class="wa"><h3><i class="bi bi-whatsapp"></i></h3><h3>WHATSAPP</h3></div><div class="time"><p>Now</p></div></div><div class="nama nama2"><p>Your Love❤️</p></div><div class="isi"><p class="gombal2"></p></div></div><div class="notif notif3"><div class="header"><div class="wa"><h3><i class="bi bi-whatsapp"></i></h3><h3>WHATSAPP</h3></div><div class="time"><p>Now</p></div></div><div class="nama nama3"><p>Your Love❤️</p></div><div class="isi"><p class="gombal3"></p></div></div>';
  var dtop = document.createElement("div");
  dtop.innerHTML = topp;
  var contentt = document.querySelector(".content");
  var btnmulaii = document.querySelector(".btn-mulai");
  contentt.insertBefore(dtop, btnmulaii);
}