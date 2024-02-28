// DECLARING VARIABLES

const sidemenu = document.getElementById("sidemenu");
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-content");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx_XENYx87JCy6HXcVLPMO8pEwoTKM56n0_yjZr6oHlL7IYXGMDJ5WNz_9_3dYrV4av/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

// FUNCTIONS

function opentab(tabname) {
  Array.from(tablinks).forEach((tablink) => {
    tablink.classList.remove("active-link");
  });
  Array.from(tabcontents).forEach((tabcontent) => {
    tabcontent.classList.remove("active-tab");
  });

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// EVENT LISTENERS

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
