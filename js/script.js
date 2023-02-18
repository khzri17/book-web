// PreLoader

window.addEventListener("load", function () {
  const preLoader = document.querySelector(".preLoader");
  preLoader.classList.add("hidden");
});

// End PreLoader

// change groups
let menuOffcanvas = document.querySelector(".groups-offcanvas");
let menuOffcanvasList = menuOffcanvas.children;
let groupsMenu = document.querySelectorAll(".groups");
for (let i = 0; i < menuOffcanvasList.length; i++) {
  menuOffcanvasList[i].addEventListener("click", () => {
    for (let z = 0; z < menuOffcanvasList.length; z++) {
      menuOffcanvasList[z].classList.remove("active");
    }

    menuOffcanvasList[i].classList.add("active");
  });
}
menuOffcanvasList[0].addEventListener("click", () => {
  groupsMenu[0].classList.add("active");
  groupsMenu[1].classList.remove("active");
});
menuOffcanvasList[1].addEventListener("click", () => {
  groupsMenu[1].classList.add("active");
  groupsMenu[0].classList.remove("active");
});
// End Change Groups
// login
let login = document.querySelectorAll('.login');
let loginPage = document.querySelector('.login-page');
console.log(login);
for(let i =0 ; i < login.length;i++){
  login[i].addEventListener('click' , ()=>{
   login[i].setAttribute("href" , '../login.html');
      
    
  })
  
}

// End Login
// Scroll Products
let thumbnail = document.querySelectorAll(".thumbnail");
let slider = document.querySelector(".slider");
let prev = document.querySelector("#left-arrow");
let next = document.querySelector("#right-arrow");
let maxSlide = slider.scrollWidth;
prev.addEventListener("click", () => {
        slider.scrollLeft -= 500;
      });
      next.addEventListener("click", () => {
        slider.scrollLeft += 500;
      });

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
function autoPlay() {
      if(slider.scrollLeft > maxScrollLeft - 100){
        slider.scrollLeft = 0
      }
      else if(slider.scrollLeft < maxScrollLeft - 50 && window.innerWidth > 576){
        slider.scrollLeft += 200
      }
      else if(slider.scrollLeft < maxScrollLeft && window.innerWidth < 576){
        slider.scrollLeft += 225;
      }
      
}
let play = setInterval(autoPlay, 1500);
for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  thumbnail[i].addEventListener("mouseout", () => {
    return play = setInterval(autoPlay, 1500);
  });
}
// End Scroll Product

// Hot Books Section
let sliderHB = document.querySelector(".slider-hot-books .slider");
const HotBooksMaxScrollLeft = sliderHB.scrollWidth - sliderHB.clientWidth
function autoPlayHB(){
  if(sliderHB.scrollLeft > HotBooksMaxScrollLeft - 50 ){
    sliderHB.scrollLeft = 0
  }
  else if(sliderHB.scrollLeft < HotBooksMaxScrollLeft - 50 && window.innerWidth > 576){
    sliderHB.scrollLeft += 310
  }
  else if(sliderHB.scrollLeft < HotBooksMaxScrollLeft - 10 && window.innerWidth < 576){
    sliderHB.scrollLeft += 300
  }
}
let playHB = setInterval(autoPlayHB , 3000)
// End Hot Books Section

// comments
let comments = document.querySelectorAll(".comment");
let dots = document.querySelectorAll(".dots span");
let index = 0;
let totalDots = dots.length;
let totalComments = comments.length;
for (let i = 0; i < comments.length; i++) {
  dots[i].addEventListener("click", () => {
    for (let z = 0; z < dots.length; z++) {
      dots[z].classList.remove("active");
      comments[z].classList.remove("active");
    }
    
    comments[i].classList.add("active");
    dots[i].classList.add("active");
  });
}
function autoPlayComments() {
  for(let i = 0 ; i < totalComments; i++){
    comments[i].classList.remove('active');
  }
  index++;
  if(index > totalComments){
    index = 1;
  }
  for(let i = 0; i < totalDots;i++){
    dots[i].classList.remove('active');
  }
  comments[index - 1].classList.add('active');
  dots[index - 1].classList.add('active');
}
let playComments = setInterval(autoPlayComments, 3000);
// End Comments
// subjects Books

let leftArrowSub = document.querySelector('#left-angle-sub');
let rightArrowSub = document.querySelector('#right-angle-sub');

let sliderSubjects = document.querySelector('.slider-subjects section')
let totalSubjects = sliderSubjects.children.length;
let subject = sliderSubjects.children;

leftArrowSub.addEventListener('click' , ()=>{
  sliderSubjects.scrollLeft -= 300;
})
rightArrowSub.addEventListener('click' , ()=>{
  sliderSubjects.scrollLeft += 300;
})
const maxScrollLeftSub = sliderSubjects.scrollWidth - sliderSubjects.clientWidth;

function autoPlaySubjects(){
  if(sliderSubjects.scrollLeft > maxScrollLeftSub - 100){
    sliderSubjects.scrollLeft = 0
  }
  else if(sliderSubjects.scrollLeft < maxScrollLeftSub - 5 && window.innerWidth > 576){
      sliderSubjects.scrollLeft += 250;
  }
  else if(sliderSubjects.scrollLeft < maxScrollLeftSub - 5 && window.innerWidth < 576){
    sliderSubjects.scrollLeft += 340;
}
}

let playSub = setInterval(autoPlaySubjects , 1500);
for (let i = 0; i < subject.length; i++) {
  subject[i].addEventListener("mouseover", () => {
    clearInterval(playSub);
  });
  subject[i].addEventListener("mouseout", () => {
    return playSub = setInterval(autoPlaySubjects, 1500);
  });
}
// End Subjects Books

// Login Html

// End Login Html
