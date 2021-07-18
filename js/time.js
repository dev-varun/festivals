function startTime() {
    var d = new Date();
document.getElementById("date").innerHTML = d;
    
    var t = setTimeout(startTime, 500);
    
    
    
}
window.onload=function(){
   startTime();
   }