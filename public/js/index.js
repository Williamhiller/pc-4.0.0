/**
 * Created by Liu zhiyuan on 2016/3/21.
 */

var _index = {
    init: function (){
        this.textLength();   //字数限制
        this.searchFocus(); //搜索点击提示
        this.newsFlash();  //赛事快讯
        this.articleTabs();  //文章点击切换
        this.commentRoll(); // 评论内容自动切换
        this.mainSwiper(); // 主图片切换
        $('body').click(function (){
            $('.gradually_col2_show li').css("display","block")
        })
    },
    // 字数限制
    textLength: function (){
        var articleTitle = $('.article ul.article-list h3 span');  //文章标题长度
        var articleCon = $('.article ul.article-list p');          //文章简介内容
        var comment = $('.comment .new-comment p.com-content');   //评论内容
        var raceTitle = $('.run-tour-content li h3');           //跑步看世界标题
        articleTitle.ellipsis(25);
        articleCon.ellipsis(62);
        comment.ellipsis(86);
        raceTitle.ellipsis(24);
    },
    //搜索点击提示
    searchFocus:function (){
        var tab = $('.match-content').find('.recommend-type');
        var searchPut = $('.match-content .search input');
        var holder = $('.placeholder');
        var ops = $('.match-content .search-tips .tags span');
        var hide;
        holder.click(function (){
            searchPut.focus();
        })
        //热门目的地， 热门赛事切换
        tab.click(function (e){
            stopProp(e);
            var tags = $('.match-content .search-tips .tags ul');
            searchPut.focus();
            var index = $(this).index();
            var left = (-index).toPercent()
            tab.removeClass('tab-active-sm');
            $(this).addClass('tab-active-sm');
            tags.animate({left:left},300);
        });
        //点击选择条件
        ops.on("click", function (){
            searchPut.val($(this).text());
        });
        //输入框获取焦点时弹出
        searchPut.focus(function (){
            holder.hide();
            $('.search-tips').slideDown(150);
            $(this).css("text-align","left");
            $('.placeholder').addClass('top');
        });
        //阻止默认事件
        $(searchPut,tab).click(stopProp);
        $('body').on("click", function (){
            $('.search-tips').slideUp(150);
            if(!searchPut.val()){
                holder.show(100);
            }
        });
    },
    //赛事快讯 切换
    newsFlash: function (){
        var pags0 = $('.match-content .num-pag');
        //pags0.click(function (){
        //
        //});
        pags0.on("mouseenter",function (){
            var news = $('.match-content').find('.news-animate');
            var index = $(this).index();
            var left = (-index).toPercent()
            pags0.removeClass('active');
            $(this).addClass('active');
            news.animate({left:left},600,"swing")
        })
    },
    //文章内容切换
    articleTabs: function (){
        var pags = $('.article').find('.pag-button');
        pags.on("mouseenter",function (){
            var index = $(this).index();
            pags.removeClass('active');
            $(this).addClass('active');
            $('.article-list').hide();
            $('.article-list').eq(index).show()
        })
    },
    // 评论内容自动切换
    commentRoll: function (){
        var top = 0;
        var swiper = $('.new-comment .roll-box ul');
        var len = swiper.find('li').length;
        var html = swiper.html();
        swiper.html(html+=html)
        var comroll = setInterval(autoRoll,4000);
        function autoRoll(){
            if(top<=-200*len){
                top = 0;
                swiper.animate({top:"0"},0)
            }
            top-=200;
            swiper.animate({top:top+"px"},600,"swing")
        };
        swiper.mouseenter(function (){
            clearInterval(comroll);
        }).mouseleave(function (){
            comroll = setInterval(autoRoll,4000);
        })

    },
    //图片展示 自动切换 swiper插件
    mainSwiper: function () {
        if(navigator.userAgent.indexOf("MSIE 9.0")>0){
            var left = 0;
            var len = $('.swiper-slide').length;
            var wrapper = $('.swiper-wrapper');
            var html = wrapper.html();
            wrapper.html(html+=html).css("width",1000*len+"px");
            var topRoll = setInterval(topAutoRoll,4000);
            function topAutoRoll(){
                if(left<=-500*len){
                    left = 0;
                    wrapper.animate({left:"0"},0)
                }
                left-=500;
                wrapper.animate({left:left+"px"},600,"swing")
            };
            wrapper.mouseenter(function (){
                clearInterval(topRoll);
            }).mouseleave(function (){
                topRoll = setInterval(topAutoRoll,4000);
            });
            $('#prevBtn').on("click",function (){
                left-=500;
                wrapper.animate({left:left+"px"},600,"swing")
            });
            $('#nextBtn').on("click",function (){
                if(left>=0) {
                    left = -500*len;
                    wrapper.animate({left:left+"px"},0)
                }
                left+=500;
                wrapper.animate({left:left+"px"},600,"swing")
            });
        }else {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '#nextBtn',
                prevButton: '#prevBtn',
                autoplay:5000,
                slidesPerView: 4,
                paginationClickable: true,
                spaceBetween: 0,
                loop: true
            });
            //鼠标移入停止自动切换
            $('.swiper-slide').mouseenter(function (){
                swiper.stopAutoplay()
                $(this).find('img')
            }).mouseleave(function (){ //鼠标移除启动自动切换
                swiper.startAutoplay()
            });
        }
    },
};







