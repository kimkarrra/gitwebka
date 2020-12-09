var num = document.getElementById('number');
var check_num = document.getElementById('numcheck');
var symcheck = document.getElementById('symcheck');
var smcheck = document.getElementById('smcheck');
var capcheck = document.getElementById('capcheck');

var output = document.getElementById('output');

var pass_num = document.querySelector('#char_num');

var strength = document.querySelector('#strength');


var randomPassword = function(length){
  chars_cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  chars_num = "1234567890";
  chars_sym = "!@`~#$%^&*()";
  chars_small = "abcdefghijklmnopqrstuvwxyz";

  var pass = "";
  var fin_pass = "";



  for(i=0;i<length;i++) {

    if (check_num.checked == true) {
        x = Math.floor(Math.random() * chars_num.length);
        pass += chars_num.charAt(x);
    }

    if(symcheck.checked == true) {
        y = Math.floor(Math.random() * chars_sym.length);
        pass += chars_sym.charAt(y);
    }

    if(smcheck.checked == true) {
        z = Math.floor(Math.random() * chars_small.length);
        pass += chars_small.charAt(z);
     }

    if (capcheck.checked == true) {
        w = Math.floor(Math.random() * chars_cap.length);
        pass += chars_cap.charAt(w);
     }
 }
  



    for(i=0;i<length;i++) {
      k = Math.floor(Math.random() * pass.length);
      fin_pass += pass.charAt(k);       
    }

      output.value = fin_pass;


}


function generate() {
  var length = pass_num.value;

  if (length >= 0) {
    randomPassword(length);
  } 
}


function copyFunction() {
  output.select();
  output.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Your password: " + output.value);
}

