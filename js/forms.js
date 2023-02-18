window.addEventListener("load", function () {
    const preLoader = document.querySelector(".preLoader");
    preLoader.classList.add("hidden");
  });
  
let LoginPg = document.querySelector('.login-page');
let LoginBtn = document.querySelector('.login');
let signUpPg = document.querySelector('.signUp-page');
let signUpBtn = document.querySelector('.signUp');
signUpBtn.addEventListener('click' , ()=>{
    signUpPg.classList.add('active');
    LoginPg.classList.remove('active');
})
LoginBtn.addEventListener('click' , ()=>{
    signUpPg.classList.remove('active');
    LoginPg.classList.add('active');
})