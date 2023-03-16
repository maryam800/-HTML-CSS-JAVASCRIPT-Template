const links=document.querySelectorAll('#nav ul li a');
links.forEach((link)=>{
    link.addEventListener('click',()=>{
        document.querySelector('#nav ul li a.active').classList.remove('active')
        link.classList.add('active')
    })
})
//Hamburger Menu In Small Screen Size
const bars=document.querySelector('.bars')
const nav =document.querySelector('nav')
bars.addEventListener('click' ,()=>{
    nav.classList.toggle('active')
})
//Page Effects
const swup = new Swup();
