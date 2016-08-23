
Number.prototype.toPercent = function(){
    return (Math.round(this * 10000)/100).toFixed(2) + '%';
};
//阻止事件冒泡
function stopProp(e){
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }
    else {
        window.event.cancelBubble = true;
        return false;
    };
};
var aa = document.getElementsByClassName('roll-box');
//一键置顶功能
(function (){
    var html ='<a href="#0" class="back-top"><span class="icon-arrow-up"></span></a>';
    $('.back-to-top').append(html);
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 500,
        $back_to_top = $('.back-top');
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('visible') : $back_to_top.removeClass('visible fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('fade-out');
        }
    });
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
})();

//弹出样式 对话
function _tips () {
    var html = '<div class="ns-box ns-bar ns-show">' +
                    '<span class="left"><i class="icon-volume"></i></span>' +
                    '<p>You have some interesting news in your inbox. Go check it out now.</p>' +
                    '<span class="icon-stop close"></span>' +
                '</div>';
    $('body').append(html);
    setTimeout(function (){
        $('.ns-box').removeClass('ns-show')
    },300);
    var hide = setTimeout(close,3000);
    $('.ns-box .close').on("click",function (){
        clearTimeout(hide);
        close();
    });
    function close(){
        $('.ns-box').addClass('ns-hide');
        setTimeout(function (){
            $('.ns-box').remove()
        },800);
    };
};

// 系统通知消息提醒
function popMessage (){
    var html = '<div class="ns-box ns-msg ns-show">' +
                    '<div class="ns-head">' +
                        '<img src="http://ww1.sinaimg.cn/crop.95.235.1000.1000.1024/d71a5054jw8euqdybnb1ij20xc1e0tht.jpg">' +
                    '</div>' +
                    '<div class="ns-content-box">' +
                        '<div class="ns-content">' +
                            '<p class="ns-msg-info ellipsis">小苏快跑，关注了你，快棋看快棋看快棋看一看把</p>' +
                        '</div>' +
                    '</div>' +
                    '<p class="ns-close"><i class="icon-stop"></i></p>' +
                '</div>';
    $('body').append(html);
    setTimeout(function (){
        $('.ns-box.ns-msg').removeClass('ns-show');
    },800);
    var hide = setTimeout(close,5000);
    $('.ns-msg .ns-close').on("click",function (){
        clearTimeout(hide);
        close();
    });
    function close(){
        $('.ns-box.ns-msg').addClass('ns-hide');
        setTimeout(function (){
            $('.ns-box.ns-msg').remove()
        },800)
    };
};

// 弹出警告框
function popUp(){
    var html = '<div class="cd-popup" role="alert">' +
                    '<div class="cd-popup-container">' +
                        '<div class="cd-popup-close"><a href="#0" class="icon-stop"></a></div>' +
                        '<p class="cd-popup-info">是否想退出？</p>' +
                        '<ul class="cd-buttons clear">' +
                            '<li><a href="#0">是</a></li>' +
                            '<li><a href="#0">否</a></li>' +
                        '</ul>' +
                    '</div>' +
                '</div>';
    $('body').append(html);
    setTimeout(function (){
        $('.cd-popup').addClass('is-visible');
    },25);
    // 关闭 弹出框
    $('.cd-popup-close a ,.cd-popup').on("click",function (){
        $('.cd-popup').remove();
    });
    $('.cd-popup-container').on("click",function (){
        event.stopPropagation();
    });
}

$('nav').click(function (){
    popUp()
})















