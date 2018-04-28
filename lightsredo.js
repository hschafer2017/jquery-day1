$(document).ready(function() {
    $("#theSwitch").click(function() {
        if ($("#bulbImage").attr("src") == "bulboff.gif") {
            $("#bulbImage").attr("src", "bulbon.gif");
            $("#theSwitch").attr("src", "switch_on_1024.png");
        }
        else {
            $("#bulbImage").attr("src", "bulboff.gif");
            $("#theSwitch").attr("src", "switch_off_1024.png");
        }
    })
}) 

