$(document).ready(function () {
    $("#videoIndex").click(function () {
        var x = $("#index-popup");
        if (x.hasClass("show")) {
            x.removeClass("show");
        } else {
            x.addClass("show");
        }
    });
});