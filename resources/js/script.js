const navicon = document.querySelector(".navtoggler");
const navbars = document.querySelector(".navbarmobile");
const navbardesk = document.querySelector(".navbar");
const navclose = document.querySelector(".closenav");
const skillheight = document.querySelector(".skills_section");
const cicrleanim = document.querySelectorAll(".circle-chart__circle");
const headersec = document.querySelector("header");

// window.addEventListener("scroll", () => {
//   let scrollheight = window.innerHeight / 1.6;
//   let skillersheight = skillheight.getBoundingClientRect().top;
//   if (scrollheight > skillersheight) {
//     cicrleanim.forEach((e) => {
//       e.classList.add("addanim");
//     });
//   }
// });

navicon.addEventListener('click',function(){
navbars.classList.toggle('navbar_disp');
});

navclose.addEventListener('click',function(){
navbars.classList.toggle('navbar_disp');
});

$(function(){
  $("a").creep({
    speed:400,
    offset:-30
  });
});






// ---------------------------portfolio javascripts

const buttonsall = document.querySelectorAll(".button_divs button");
const portgrids = document.querySelectorAll(
  ".portfolio_grids_cont .grids_portfolio"
);
const webportfolios = document.querySelector("#webportfolios");
const appbportfolios = document.querySelector("#appsportfolios");
const iconportfolios = document.querySelector("#iconsportfolios");

const navbarlinks = document.querySelectorAll(".navbar li");
navbarlinks.forEach((e) => {
  e.addEventListener("click", function (es) {
    navbarlinks.forEach((e) => {
      e.classList.remove("active");
    });
    es.currentTarget.classList.add("active");
  });
});

webportfolios.addEventListener("click", function (e) {
  hello(e.currentTarget.innerHTML);
  tabs(e.currentTarget);
});
appbportfolios.addEventListener("click", function (e) {
  hello(e.currentTarget.innerHTML);
  tabs(e.currentTarget);
});
iconportfolios.addEventListener("click", function (e) {
  hello(e.currentTarget.innerHTML);
  tabs(e.currentTarget);
});
function hello(e) {
  portgrids.forEach(function (es, i) {
    if (es.getAttribute("data-key").includes(e)) {
      portgrids[i].style.display = "flex";
    } else {
      portgrids[i].style.display = "none";
    }
  });
}

// -------------------navbar tabs
function tabs(e) {
  buttonsall.forEach((e) => {
    e.classList.remove("activeport");
  });
  e.classList.add("activeport");
}













// -------------------smoothscrollplugin
// $(document).ready(function () {
//   $(".smoothlink").on("click", function (event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset(),
//         },
//         1000,
//         function () {
//           window.location.hash = hash;
//         }
//       );
//     }
//   });
// });





// --------------------scrollstuffs

$(function(){

    $('.circle-chart__circle').each(function(){
        $(this).scrollstuff({
            classname: 'addanim',
            repeat:'true'
        });
        });
        
  $('.grids_portfolio img').each(function(){
    $(this).scrollstuff({
        classname: 'portfolioanim',
        repeat:'true'
    });
    });
    $('.teams_grids img').each(function(){
        $(this).scrollstuff({
            classname: 'addstyleimages',
            repeat:'true'
        });
        });

  });


  

//   $('.teams_grids img').each(function(){
// $(this).scrollstuff({
//     classname: 'addstyleimages',
//     repeat:'true'
// });
// });
