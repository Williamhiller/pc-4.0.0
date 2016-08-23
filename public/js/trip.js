

var _trip = {
    init: function (){
        this.wantRun();     // 想跑 跑过 分享
        this.menuFixed();//底部评论区， 滚动屏幕 导航菜单栏自动fixed
    },
    //想跑 跑过 分享
    wantRun: function (){
        var wantRun = $('.operation .icon-love');
        var runEver = $('.operation .icon-check2');
        wantRun.click(function (){
            $(this).toggleClass('blue');
        });
        $(runEver).click(function (){
            $(this).toggleClass('blue');
        });
    },
    // 底部评论区 滚动屏幕导航栏fixed
    menuFixed:function (){
        var tab = $('.menu a');
        var menuTop = $('.menu').position().top;
        $(window).scroll(function () {//滑动屏幕触发事件
            var menu = $('.menu');
            var width = $('.menu').width();
            var twoTop = $('a[name="two"]').position().top;
            var threeTop = $('a[name="three"]').position().top;
            var fourTop = $('a[name="four"]').position().top;
            var fiveTop = $('a[name="five"]').position().top;
            var sixTop = $('a[name="six"]').position().top;
            var st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (st >= menuTop) {
                if (menu.css('position') != 'fixed') {
                    menu.css({ 'position': 'fixed', top: 0  ,'width':width,'z-index':999 });
                }
            } else if (menu.css('position') != 'static') {
                menu.css({ 'position': 'static' });
            };
            if(st >= (sixTop-80)) scroll(5)
            else if(st >= (fiveTop-80)) scroll(4)
            else if(st >= (fourTop-80)) scroll(3)
            else if(st >= (threeTop-80)) scroll(2)
            else if(st >= (twoTop-80)) scroll(1)
            else scroll(0);
        });


        function scroll (i){  //滚动屏幕自动切换标签
            tab.removeClass('tab-active');
            tab.eq(i).addClass('tab-active')
        }
    },
}



