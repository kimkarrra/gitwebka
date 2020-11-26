let rellax = new Rellax('.rellax');
let screen = window.matchMedia("(max-width: 840px)");

function checkscreen(){
    if (screen.matches){
        rellax.destroy();
    } else{
        rellax.refresh();
    }
}

checkscreen();
screen.addEventListener("change", checkscreen);
