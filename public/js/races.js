
var _races = {
    init: function (){
        this.textEllipsis(); //赛事评价字数限制
    },
    textEllipsis:function (){
        var commt = $('.comment-box p.commt'); //赛事评价
        commt.ellipsis(44);
    }
}
