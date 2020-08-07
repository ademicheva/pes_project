$(function() {
    $(".dws-li a").mousemove(function() {
        $(this).css({
            "font-weight": "900",
            "font-size": "31px"

        });
    });
    $(".dws-li a").mouseout(function() {
        $(this).css({
            "font-weight": "normal",
            "font-size": "25px"

        });
    });

});
/*
.featured - menu li a {
    color: darkgrey;
    text - decoration: none;
}*/



$(function() {
    $(".featured-menu li img").mousemove(function() {
        $(this).css({
            "opacity": "1.0"

        });
    });
    $(".featured-menu li img").mouseout(function() {
        $(this).css({
            "opacity": "0.7"
        });
    });

});

$(function() {
    $(".featured-menu li a").mousemove(function() {
        $(this).css({
            "color": "black"

        });
    });
    $(".featured-menu li a").mouseout(function() {
        $(this).css({
            "color": "darkgrey"
        });
    });

});


$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#block").mousemove(
        function(pos) {
            $("#floatingmes").show();
            $("#floatingmes").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#floatingmes").hide();
    });
});



$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#gibsonblock").mousemove(
        function(pos) {
            $("#gibsontip").show();
            $("#gibsontip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#gibsontip").hide();
    });
});

$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#legatoblock").mousemove(
        function(pos) {
            $("#legatotip").show();
            $("#legatotip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#legatotip").hide();
    });
});

$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#remusblock").mousemove(
        function(pos) {
            $("#remustip").show();
            $("#remustip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#remustip").hide();
    });
});



$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#meisterblock").mousemove(
        function(pos) {
            $("#meistertip").show();
            $("#meistertip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#meistertip").hide();
    });
});

$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#fbblock").mousemove(
        function(pos) {
            $("#fbtip").show();
            $("#fbtip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#fbtip").hide();
    });
});

$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#fbblock").mousemove(
        function(pos) {
            $("#fbtip").show();
            $("#fbtip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#fbtip").hide();
    });
});



$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#twblock").mousemove(
        function(pos) {
            $("#twtip").show();
            $("#twtip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#twtip").hide();
    });
});

$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#youblock").mousemove(
        function(pos) {
            $("#youtip").show();
            $("#youtip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#youtip").hide();
    });
});

$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#instblock").mousemove(
        function(pos) {
            $("#insttip").show();
            $("#insttip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#insttip").hide();
    });
});

$(document).ready(function() {
    $(this).css({
        "overflow": "visible"
    });

    $("#googleblock").mousemove(
        function(pos) {
            $("#googletip").show();
            $("#googletip").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
        }
    ).mouseleave(function() {
        $("#googletip").hide();
    });
});

$(document).ready(function() {
    $("input").focus(function() {
        $(this).css("background-color", "#c0c0c0");
    });
    $("input").blur(function() {
        $(this).css("background-color", "#c0c0c0");
    });
});