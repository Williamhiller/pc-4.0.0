/**
 * Created by Liu zhiyuan on 2016/3/24.
 */

var _race = {
    init: function (){
        this.wantRun();     // 想跑 跑过 分享
        this.openCert();   //赛事类型 点击展开
        this.textFold();  // 文本自动显示 展开收起
        this.changeImg(); //鼠标移入更换图片
        this.menuFixed();//底部评论区， 滚动屏幕 导航菜单栏自动fixed
        this.scoreCircle(); //顶部评分圆圈 插件 circular-progress.js
        this.showRouteImage(); // 点击显示比赛路线图
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
    //赛事类型点击展开查看
    openCert: function (){
        var type = $('.down').find('ul.race-type-box li');
        type.click(function (){
            var info = $('.down').find('ul.race-type-box li .type-info');
            if($(this).hasClass('open')){
                return false
            }else {
                info.slideUp(300);
                $(this).find('.type-info').slideDown(300);
                type.removeClass('open')
                $(this).addClass('open');
            }
        });
    },
    textFold: function (){
        var brief = $('.main-content .brief .br-cont');  // 赛事简介内容
        var commt = $('#raceCommts').find('.commt-cont');       // 评论区 评论内容
        brief.textToggleFold(63);
        commt.textToggleFold(63);

    },
    //鼠标移入更换图片
    changeImg: function (){
        $('.mini-view img').mouseenter(function (){
            $('#mainPic').attr("src",$(this).attr("src"));
        })
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
            var st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (st >= menuTop) {
                if (menu.css('position') != 'fixed') {
                    menu.css({ 'position': 'fixed', top: 0  ,'width':width,'z-index':999 });
                }
            } else if (menu.css('position') != 'static') {
                menu.css({ 'position': 'static' });
            };
            if(st >= (fiveTop-80)) scroll(4)
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
    //评分圆圈
    scoreCircle: function (){
        // 评分路线
        var n1, n2,n3, n4, id1, id2, id3, id4,score, score1, score2, score3, score4;
        score1  = new CircularProgress({
            radius: 48,
            strokeStyle: '#59cb39',
            lineCap: 'square',
            lineJoin: 'round',
            lineWidth: 4,
            text: {
                font: 'normal 20px arial',
                shadowBlur: 0,
                globalAlpha: 0.6
            },
            initial: {
                strokeStyle: '#fff',
                lineCap: 'square',
                lineJoin: 'round',
                lineWidth: 4
            }
        });
        score2 = new Object();
        $.re
        $(".scores .score1 .canvas").append(score1.el);
        n1 = 0;
        id1 = setInterval(function() {
            if (n1 == 49) clearInterval(id1);
            score1.update(n1++)
        }, 15)
        // 评分-组织
        score2  = new CircularProgress({
            radius: 48,
            strokeStyle: '#1875d4',
            lineCap: 'square',
            lineJoin: 'round',
            lineWidth: 4,
            text: {
                font: 'normal 20px arial',
                shadowBlur: 0,
                globalAlpha: 0.6
            },
            initial: {
                strokeStyle: '#fff',
                lineCap: 'square',
                lineJoin: 'round',
                lineWidth: 4
            }
        });
        $(".scores .score2 .canvas").append(score2.el);
        n2 = 0;
        id2 = setInterval(function() {
            if (n2 == 50) clearInterval(id2);
            score2.update(n2++)
        }, 15);
        // 评分-氛围
        score3  = new CircularProgress({
            radius: 48,
            strokeStyle: '#fd873b',
            lineCap: 'square',
            lineJoin: 'round',
            lineWidth: 4,
            text: {
                font: 'normal 20px arial',
                shadowBlur: 0,
                globalAlpha: 0.6
            },
            initial: {
                strokeStyle: '#fff',
                lineCap: 'square',
                lineJoin: 'round',
                lineWidth: 4
            }
        });
        $(".scores .score3 .canvas").append(score3.el);
        n3 = 0;
        id3 = setInterval(function() {
            if (n3 == 30) clearInterval(id3);
            score3.update(n3++);
        }, 15);
        //评分-总体
        score4 = new CircularProgress({
            radius: 50,
            strokeStyle: '#ec3425',
            lineCap: 'square',
            lineJoin: 'round',
            lineWidth: 4,
            text: {
                font: 'normal 20px arial',
                shadowBlur: 0,
                globalAlpha: 0.6
            },
            initial: {
                strokeStyle: '#fff',
                lineCap: 'square',
                lineJoin: 'round',
                lineWidth: 4
            }
        });
        $(".scores .score4 .canvas").append(score4.el);
        n4 = 0;
        id4 = setInterval(function() {
            if (n4 == 90) clearInterval(id4);
            score4.update(n4++)
        }, 15);
    },
    // 点击显示比赛路线图
    showRouteImage:function (){
        $('.down .route').click(function (){
            $("body").css({"height":"100%","overflow":"hidden"});
            var html = '<div id="routeImage">' +
                            '<div class="icon-stop"></div>' +
                            '<img src="../../public/img/view_three.jpg" alt="">' +
                        '</div>';
            $('body').append(html);
            $("#routeImage").fadeIn();
        })
        $(document).on('click','#routeImage', function (){
            $("body").css({"height":"auto","overflow":"inherit"});
            $(this).fadeOut(300);
            setTimeout(function(){
                $("#routeImage").remove();
            },300);
        });
    }
}



