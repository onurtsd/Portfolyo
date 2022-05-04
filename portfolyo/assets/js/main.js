/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const left_img = document.getElementById("projects_img");
const left_text = document.getElementById("left-txt");
const center_img = document.getElementById("vector_img");
const center_text = document.getElementById("center-txt");
const right_img = document.getElementById("renders_img");
const right_text = document.getElementById("right-txt");
left_img.addEventListener("mouseover", RespondMouseOverLeft);
left_img.addEventListener("mouseout", RespondMouseOutLeft);
center_img.addEventListener("mouseover", RespondMouseOverCenter);
center_img.addEventListener("mouseout", RespondMouseOutCenter);
right_img.addEventListener("mouseover", RespondMouseOverRight);
right_img.addEventListener("mouseout", RespondMouseOutRight);

function RespondMouseOverLeft() {
    console.log("in");
    document.getElementById("left-txt").style.visibility = "visible";
    document.getElementById("left-txt").style.transitionDelay = "0s";
}
function RespondMouseOutLeft() {
    console.log("out");
    document.getElementById("left-txt").style.visibility = "hidden";
    document.getElementById("left-txt").style.transitionDelay = "0.5s";
}
function RespondMouseOverCenter() {
    console.log("in");
    document.getElementById("center-txt").style.visibility = "visible";
    document.getElementById("center-txt").style.transitionDelay = "0s";

}
function RespondMouseOutCenter() {
    console.log("out");
    document.getElementById("center-txt").style.visibility = "hidden";
    document.getElementById("center-txt").style.transitionDelay = "0.5s";
}
function RespondMouseOverRight() {
    console.log("in");
    document.getElementById("right-txt").style.visibility = "visible";
    document.getElementById("right-txt").style.transitionDelay = "0s";
}
function RespondMouseOutRight() {
    console.log("out");
    document.getElementById("right-txt").style.visibility = "hidden";
    document.getElementById("right-txt").style.transitionDelay = "0.5s";
}
const textAppearance = [
    { transition: 'visibility 0s, opacity 0.5s linear'}
  ];

const textTiming = {
    duration: 2000,
    iterations: 1,
  }
