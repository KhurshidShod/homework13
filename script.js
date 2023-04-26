let themeBtn = document.querySelectorAll('#theme');
let video = document.getElementById('eraVideo');
let playVideoBtn = document.getElementById('playVideo')
let navToggle = document.getElementById('navToggle');
let nav = document.getElementById('navbar');
let closeNav = document.getElementById('closeNav')
let navbar = document.querySelector("nav")
let homeSec = document.querySelector('.home')
let newEraSec = document.querySelector('.newEra')
let newsSec = document.querySelector('.news')

navToggle.addEventListener("click", () => {
    nav.style.top = '0%';
    document.body.classList.add('navIsOpen')
})
closeNav.addEventListener("click", () => {
    nav.style.top = '-1000%';
    document.body.classList.remove('navIsOpen')
})

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 90){
        navbar.style.background = 'rgba(0, 0, 0, 0.3)'
        navbar.style.height = '90px'
        navbar.style.backdropFilter = 'blur(10px)'
        navbar.classList.contains('light') ? navbar.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' : navbar.style.boxShadow = 'rgba(255, 255, 255, 0.05) 0px 19px 38px, rgba(255, 255, 255, 0.05) 0px 15px 12px'
    } else {
        navbar.style.background = 'transparent';
        navbar.style.height = '120px';
        navbar.style.backdropFilter = 'none'
        navbar.style.boxShadow = 'none';
    }
});
themeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle('darkBtn')
        newsSec.classList.toggle('light')
        navbar.classList.toggle('light')
        homeSec.classList.toggle('light')
        newEraSec.classList.toggle('light')
        if(btn.classList.contains('darkBtn')){
            btn.innerHTML = '<i class="fa-regular fa-moon fa-2xl"></i>'
        } else {
            btn.innerHTML = '<i class="fa-regular fa-sun fa-2xl"></i>'
        }
    })
})


playVideoBtn.addEventListener("click", () => {
        video.play();
        playVideoBtn.style.display = 'none'
})
video.onclick = () => {
    video.pause();
    playVideoBtn.style.display = 'flex'
}
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = 'none'
})
