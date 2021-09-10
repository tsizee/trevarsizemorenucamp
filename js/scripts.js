//NOTE: This code that we are using in the beginning of the jQuery script: $(function () { ... }); is the shorthand, recommended version for this code, called the jQuery ready method or ready function, which specifies a function to load when the webpage's DOM is ready: $( document).ready(function() { ... });

$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});