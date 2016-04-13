<<<<<<< HEAD
window.onload = function () {
    var data = {
        message: 'Hello Vue.js!'
    }

    var demo = new Vue({
        el: '#demo',
        data: data
    })
}


// MIUI首页代码
$(function() {

    var video_srcs = {};
    video_srcs.video_src_0 = '<img class="dialog_close" src="http://www.miui.com/static/miui/newindex/images/dialog_close.png"><object type="application/x-shockwave-flash" data="http://player.youku.com/player.php/sid/XMTMwODUxNzAwMA==/v.swf" width="100%" height="100%" id="youku-player"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><param name="movie" value="http://player.youku.com/player.php/sid/XMTMwODUxNzAwMA==/v.swf"><param name="flashvars" value="imglogo=&amp;paid=0&amp;partnerId=91a0d45b32079123&amp;isAutoPlay=true&amp;styleid=0"></object>';

    function showDialog(url) {
        $(".z_index_dialog").show();
        var content_width = $(".z_index_dialog").width() / 2 - 300;
        var content_height = $(".z_index_dialog").height() / 2 - 250;
        $(".dialog_content").css("left", content_width);
        $(".dialog_content").css("top", content_height);
        $(".dialog_content").html(video_srcs[url]);
        $(".dialog_content").show();
        $(".dialog_close").bind("click", dialogClose);
    }

    function dialogClose() {
        $(".z_index_dialog").hide();
        $(".dialog_content").hide();
        $(".dialog_content").html("");
        $(".dialog_close").unbind("click", dialogClose);
    }

    //轮播图
    var index = 0,turn,imgCount = $('.content_header_on').length;
    $(".points").html("");
    var divStr = "";
    for(var i = 0; i < imgCount; i++){
        divStr += "<div></div>";
    };
    $(".points").html(divStr);
    $(".points>div").eq(0).addClass("current_pointer");
    if (imgCount == 1) {$(".points").hide();};
    var width = $(".lunbo").width();
    $(".content_header_on").width(width);
    window.onresize = function(){
        width = $(".lunbo").width();
        $(".content_header_on").width(width);
        $('.lunbo_container').css("left", "-" + index*width + "px");
        setContentBodyPadding();
    }
    var lunbo = function() {
        turn = setTimeout(function() {
            $('.lunbo_container').animate({
                'left': '-' + ((index + 1) % imgCount) * width + 'px'
            }, 600, lunbo);
            index = (index + 1) % imgCount;
            $(".current_pointer").removeClass("current_pointer");
            $(".points>div").eq(index).addClass("current_pointer");
        }, 8000);
    }
    lunbo();


    $(".points>div").on("click", function(){
        var num = $(".points>div").index($(this));
        clearInterval(turn);
        $('.lunbo_container').stop(true).animate({
            'left': '-' + num * width + 'px'
        }, 600, lunbo);
        index = num;
        $(".current_pointer").removeClass("current_pointer");
        $(".points>div").eq(index).addClass("current_pointer");
    });

    //根据屏幕设置content_body高度
    function setContentBodyPadding(){
        var screenHeight = window.innerHeight;
        if (screenHeight <= 785) {
            $(".content_body").css("padding","55px 0");
        }else{
            $(".content_body").css("padding","130px 0");
        }
    }
    setContentBodyPadding();
=======
var data = {
    message: 'Hello Vue.js!'
}

var demo = new Vue({
    el: '#demo',
    data: data
>>>>>>> origin/master
})
