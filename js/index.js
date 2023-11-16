var indexToggle = "close";

$(document).ready(function () {
    $("#videoIndex").click(function () {
        if (indexToggle == "close") {
            indexToggle = "open";
            $("#index-popup").show();
            var _temp = $("#index-popup").width();
            $("#index-popup").stop().animate({ "margin-left": _temp + "px" }, 300);
        } else {
            indexToggle = "close";
            $("#index-popup").stop().animate({ "margin-left": "0px" }, 300, function () {
                $("#index-popup").hide();
            })

        }
    });
});

$(document).ready(function () {
    $.each(indexInfo, function (i, val) {
        $('#lectureWrap').append('<div class="movePage lectureTitle" onclick="location.href=\'' + val.location + '\'">' + val.title + '</div>');
    });
});