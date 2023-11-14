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

// function index_view() {
//     if (indexToggle == "close") {
//         indexToggle = "open";
//         $("#indexUI").show();
//         var _temp = $("#index-wrap").width();
//         $("#index-wrap").stop().animate({ "margin-left": _temp + "px" }, 300);
//         // $("#index-open-icon").css({"background-position-x":"-"+$("#index-open-icon").width()+"px"});
//         $("#index-open-txt").html("INDEX").css({ "color": "#FDA947" });
//     } else {
//         indexToggle = "close";
//         $("#index-wrap").stop().animate({ "margin-left": "0px" }, 300, function () {
//             $("#indexUI").hide();
//         });
//         // $("#index-open-icon").css({"background-position-x":"0px"});
//         $("#index-open-txt").html("INDEX").css({ "color": "#fff" });
//     }
// }