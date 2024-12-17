const navEl = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 56) {
                navEl.classList.add('navbar-scrolled');
            } else if (window.scrollY < 56) {
                navEl.classList.remove('navbar-scrolled');
            }
        });
let currentIndex1 = 0;
let currentIndex2 = 0;
        
        
function showSlide(index, slideClass, dotClass, currentIndexVar) {
const slides = document.querySelectorAll(`.${slideClass}`);
const dots = document.querySelectorAll(`.${dotClass}`);
let currentIndex = currentIndexVar;
        
        if (index < 0) currentIndex = slides.length - 1;
        else if (index >= slides.length) currentIndex = 0;
        else currentIndex = index;
        
           slides.forEach((slide, i) => {
                slide.style.display = i === currentIndex ? 'block' : 'none';
            });
        
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        
            return currentIndex;
        }
        
function nextSlide1() {
            currentIndex1 = showSlide(currentIndex1 + 1, 'carousel-item', 'dot', currentIndex1);
        }
        
function prevSlide1() {
            currentIndex1 = showSlide(currentIndex1 - 1, 'carousel-item', 'dot', currentIndex1);
        }
        
function goToSlide1(index) {
            currentIndex1 = showSlide(index, 'carousel-item', 'dot', currentIndex1);
        }
        
function nextSlide2() {
            currentIndex2 = showSlide(currentIndex2 + 1, 'scholar-carousel-item', 'scholar-dot', currentIndex2);
        }
function prevSlide2() {
            currentIndex2 = showSlide(currentIndex2 - 1, 'scholar-carousel-item', 'scholar-dot', currentIndex2);
        }
        
function goToSlide2(index) {
            currentIndex2 = showSlide(index, 'scholar-carousel-item', 'scholar-dot', currentIndex2);
        }
        
document.addEventListener('DOMContentLoaded', () => {
            
        showSlide(0, 'carousel-item', 'dot', currentIndex1);
            showSlide(0, 'scholar-carousel-item', 'scholar-dot', currentIndex2);
        
           
document.querySelector('.prev').addEventListener('click', prevSlide1);
document.querySelector('.next').addEventListener('click', nextSlide1);
        
        
document.querySelector('.scholar-carousel-control.prev').addEventListener('click', prevSlide2);
document.querySelector('.scholar-carousel-control.next').addEventListener('click', nextSlide2);
        
        
document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide1(index));
        });
        
            
document.querySelectorAll('.scholar-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide2(index));
        });
});
        
 // Get the button
 let mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }
 // When the user clicks on the button, scroll to the top of the document
     function topFunction() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
 }