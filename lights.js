$(document).ready(function() {
    
    function toggleLightOne() {
        if($("#bulb1").attr("src") == "img/bulboff.gif") {
            $("#bulb1").attr("src", "img/bulbon.gif").fadeIn();
            $("#switch1").attr("src", "img/switch_on.png");
        } else {
            $("#bulb1").attr("src", "img/bulboff.gif");
            $("#switch1").attr("src", "img/switch_off.png");
        }
    }
    
    function toggleLightTwo() {
        if($("#bulb2").attr("src") == "img/bulboff.gif") {
            $("#bulb2").attr("src", "img/bulbon.gif").fadeIn();
            $("#switch2").attr("src", "img/switch_on.png");
        } else {
            $("#bulb2").attr("src", "img/bulboff.gif");
            $("#switch2").attr("src", "img/switch_off.png");
        }
    }

    function toggleLightThree() {
        if($("#bulb3").attr("src") == "img/bulboff.gif") {
            $("#bulb3").attr("src", "img/bulbon.gif").fadeIn();
            $("#switch3").attr("src", "img/switch_on.png");
        } else {
            $("#bulb3").attr("src", "img/bulboff.gif").fadeIn();
            $("#switch3").attr("src", "img/switch_off.png");
        }
    } 













$(document).ready(function(){

// FIRST LIGHT 
function lightOn() {
        $("#switchOn").click(function() {
            $("#bulbImage").attr("src", "bulbon.gif");
            // $("#switchOn").attr("src", "switch_off_1024.png");
            
        })
    }
    function lightOff() {
        
        $("#switchOff").click(function() {
            $("#bulbImage").attr("src", "bulboff.gif");
        
    }) }

// Second Light
    
    function lightSecondOn() {
        $("#switchOn2").click(function() {
            $("#secondBulb").attr("src", "bulbon.gif");
        })
    }
    function lightSecondOff() {
        
        $("#switchOff2").click(function() {
            $("#secondBulb").attr("src", "bulboff.gif");
    }) }
// Third Light 
    
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
})