AOS.init();
let screen = window.matchMedia("(max-width: 510px)");

function checkscreen(){
    if (screen.matches){
        rellax.destroy();
    } else{
        rellax.refresh();
    }
}

checkscreen();
screen.addEventListener("change", checkscreen);
