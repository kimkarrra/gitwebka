window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header-outer").style.backgroundColor = " rgb(250, 235, 215)";
  } else {
    document.getElementById("header-outer").style.backgroundColor = " rgba(250, 235, 215, 0.61)";
  }
}