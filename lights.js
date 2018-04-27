$(document).ready(function(){

function lightOn() {
        $("#switchOn").click(function() {
            $("#bulbImage").attr("src", "bulbon.gif");
            $("#switchOn").attr("src", "switch_off_1024.png");
            
        })
    }
    function lightOff() {
        
        $("#switchOff").click(function() {
            $("#bulbImage").attr("src", "bulboff.gif");
        
    }) }
    
    function lightSecondOn() {
        $("#switchOn2").click(function() {
            $("#secondBulb").attr("src", "bulbon.gif");
        })
    }
    function lightSecondOff() {
        
        $("#switchOff2").click(function() {
            $("#secondBulb").attr("src", "bulboff.gif");
    }) }
    
    function lightThirdOn() {
        $("#switchOn3").click(function() {
            $("#thirdBulb").attr("src", "bulbon.gif");
        })
    }
    function lightThirdOff() {
        
        $("#switchOff3").click(function() {
            $("#thirdBulb").attr("src", "bulboff.gif");
    }) }
})