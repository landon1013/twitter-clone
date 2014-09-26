$(document).ready(function(){
    $("#tweet-controls").hide();

    $(".tweet-compose").on("click", function() {
        $(".tweet-compose").css("height", "5em");
        $("#tweet-controls").show();
    });

    $(".tweet-compose").on("keyup", function(){
        var count = $(".tweet-compose").val().length;
        var remaining = 140 - count;

        $("#char-count").text(remaining);

        if (remaining <= 10) {
            $("#char-count").css("color", "red");
        }
        else if (remaining > 10) {
            $("#char-count").css("color", "#999");
        }

        if (count > 140) {
            $(".button").attr("disabled", "disabled");
        }
        else if (count <= 140) {
            $(".button").removeAttr("disabled", "disabled");
        }

    });



});