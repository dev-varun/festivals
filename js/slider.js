var $=function(id){
    return document.getElementsById(id);
};

var innerh=function(){
    document.getElementById("slider_header").innerHTML ="FAMOUS <strong>FESTIVALS</strong>";
}


window.onload=function(){
    var myIndex = 0;
    innerh();
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
}