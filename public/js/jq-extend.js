/**
 * Created by Liu Zhiyuan on 2016/3/28.
 */

(function(){
    $.fn.extend({
        // 超过字数显示点点点
        ellipsis : function(maxwidth){
            this.each(function (){
                var _width = maxwidth;
                if($(this).text().length>maxwidth){
                    $(this).text($(this).text().substring(0,maxwidth));
                    $(this).text($(this).text()+"...")
                }
            })
        },
        // 自动展开收起  传入最大高度
        textToggleFold: function (maxheight){
            this.each(function (){
                if ($(this).height()>maxheight) {
                    var html = '<a href="javascript:" class="fold-btn">展开</a>';
                    $(this).css("max-height",maxheight);
                    $(this).after(html);
                }
                $(document).on("click",".fold-btn", function (){
                    $(this).prev().toggleClass('unfold');
                    var text = $(this).text();
                    if(text == "展开"){
                        $(this).text("收起");
                    }else {
                        $(this).text("展开");
                    }
                })
            });
        },
        // textarea 高度自适应
        autoHeight: function (){
            function autoHeight(elem){
                elem.style.height = 'auto';
                elem.scrollTop = 0; //防抖动
                elem.style.height = elem.scrollHeight + 'px';
            }
            this.each(function(){
                autoHeight(this);
                $(this).on('keyup', function(){
                    autoHeight(this);
                });
            });
        }
    });
})(jQuery);



