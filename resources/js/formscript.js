let inputext, passtext, inputintext, passintext, formsy, submitbtn;

init();
//Add EventListeners
formsy.addEventListener("submit", (e) => {
  e.preventDefault();
});
inputext.addEventListener("focus", inputtoggle);
inputext.addEventListener("blur", inputblur);
passtext.addEventListener("focus", passtoggle);
passtext.addEventListener("blur", passblur);
submitbtn.addEventListener('click',checksubmit);

// functions
function checksubmit() {
    formsy.reset();
    inputintext.classList.remove("addanim");
    inputext.classList.add("defaultborder");
    inputext.classList.remove("addborder");

    passintext.classList.remove("addanim");
    passtext.classList.add("defaultborder");
    passtext.classList.remove("addborder");
}
function inputblur() {
  if (inputext.value.length ===0 ) {
    inputintext.classList.remove("addanim");
    inputext.classList.add("defaultborder");
    inputext.classList.remove("addborder");
  }
}
function passblur() {
  if (passtext.value.length ===0 ) {
    passintext.classList.remove("addanim");
    passtext.classList.add("defaultborder")
    passtext.classList.remove("addborder")
  }
}
function inputtoggle() {
  inputintext.classList.add("addanim");
  inputext.classList.remove("defaultborder");
  inputext.classList.add("addborder");
}
function passtoggle() {
  passtext.classList.add("addborder");
  passtext.classList.remove("defaultborder")
  passintext.classList.add("addanim");
  
}

function init() {
  inputext = document.querySelector("#inputtext");
  passtext = document.querySelector("#passtext");
  inputintext = document.querySelector(".inputbox .intext");
  passintext = document.querySelector(".passbox .passtext");
  formsy = document.querySelector(".formys");
  submitbtn = document.querySelector(".submitbtn");
 formsy.reset();
}
