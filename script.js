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

const navEl = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navEl.classList.add('navbar-scrolled');
        } else if (window.scrollY < 56) {
            navEl.classList.remove('navbar-scrolled');
        }
    });
    const counter = document.querySelectorAll(".counter");
    //counter = [5, 270, 30];
    
    counter.forEach(myCounter);
    
    function myCounter(Cvalue){
        Cvalue.innerText = "0";
        incrementCounter(); //function call
        function incrementCounter(){
            let currentNum =+ Cvalue.innerText;
            let dataCeil = Cvalue.getAttribute("data-ceil");
            let increment = dataCeil/15;
            currentNum = Math.ceil(currentNum + increment);
            if(currentNum < dataCeil){
                Cvalue.innerText = currentNum;
                setTimeout(incrementCounter, 100);
            }
            else
            Cvalue.innerText = dataCeil;
        }
    }