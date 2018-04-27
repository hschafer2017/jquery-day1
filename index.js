$(document).ready(function() {
    $("#myParagraph").click(function() {
        for (let i = 1; i <= 10; i++) {
            $("#myParagraph").append("<p> Number of mayo jars: " + i + " more</p>");
        }
        
        // $("#myParagraph").addClass("mayo"); 
        // $("#myParagraph").removeClass("mayo");
    })
    $("#myParagraph").click(function(){
        $("p").removeClass("mayo"); 
    });
$("#myParagraph").click(function(){
        $("div").addClass("potato"); 
    });

})
