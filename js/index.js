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

$(document).ready(function () {
    $.each(indexInfo, function (i, val) {
        $('#lectureWrap').append('<div class="indexTitle movePage" onclick="location.href=\'' + val.location + '\'">' + val.title + '</div>');
    });
});