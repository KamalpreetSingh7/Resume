// DECLARING VARIABLES

const sidemenu = document.getElementById("sidemenu");
const sidemenuBackdrop = document.querySelector("#sidemenu + .backdrop");
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-content");
const loadingModal = document.querySelector(".loading-modal");
const snackbar = document.querySelector("#snackbar");
const snackbarContent = snackbar?.querySelector(".text");

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
  sidemenu.classList.add("open");
}

function closemenu() {
  sidemenu.classList.remove("open");
}

function showSnackbar(text) {
  snackbar.classList.add("open");
  snackbarContent.textContent = text;
  snackbarContent.textContent = text;
  setTimeout(() => {
    snackbar.classList.remove("open");
  }, 2000);
}
// EVENT LISTENERS

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  loadingModal.classList.add("open");
  try {
    const res = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });
    if (res.ok) {
      showSnackbar("Message Sent Successfully");
      form.reset();
    } else {
      showSnackbar("Unable to send message");
    }
    loadingModal.classList.remove("open");
  } catch (e) {
    showSnackbar("Something went wrong");
    loadingModal.classList.remove("open");
  }
});
