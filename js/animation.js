$(document).ready(function(){

    $("#tweet-controls").hide();
    $(".stats").hide();
    $(".reply").hide();

    $("#stream").on("click", ".tweet", function(){
        $(this).find(".stats").show();
        $(this).find(".reply").show();
    });

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

        $(".button").on("click", function(e) {

            var el = $(".tweet:first").clone();

            el.find(".avatar").prop("src", "img/alagoon.jpg");
            el.find(".fullname").html("Cahlan Sharp");
            el.find(".username").html("@cahlan");
            el.find(".tweet-text").html($(".tweet-compose").val());
            el.find(".tweet-text").html();
            $("#stream").prepend(el);

        //$("#stream").prepend(".tweet-compose.val()");
    });



});