new WOW().init();
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
const menuIcon =  document.getElementById('menu__mobile__icon');
const menuMobile =  document.getElementById('menu__mobile');
const overlay =  document.getElementById('overlay');
const menuClose =  document.getElementById('menu__mobile__close');
const searchIcon =document.getElementById('search__icon');
const searchBcon =document.getElementById('search__bar');
menuIcon.addEventListener('click' , ()=>
{
    overlay.style.display = "block";
    menuMobile.style.left ="0";
});
searchIcon.addEventListener('click' , ()=>
{
    overlay.style.display = "block";
    overlay.style.width = "100%";
    searchBcon.style.display = "block";
    
});
function closeMenu()
{
    menuMobile.style.left ="-100%";
    overlay.style.display = "none";
    searchBcon.style.display = "none";
}
overlay.addEventListener('click' , closeMenu);
menuClose.addEventListener('click' , closeMenu);

