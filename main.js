 var secs = 10;
 var display = document.querySelector(".sec")
 var ss = document.getElementById("ss")

 function displaysecs(){
    secs = secs - 1 ;
    display.innerText= secs;
 }

 setInterval(displaysecs,1000);

 function redirectpage() {
    window.location="page.html"
 }

 setTimeout("redirectpage()", 9000);

 ss.style.strokeDashoffset = 440 - (440 * secs)/10;