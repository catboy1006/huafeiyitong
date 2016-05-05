;(function($){
    $('.zj_left').on('mouseover','li',function(e){
        e.stopPropagation();
        var $index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.zj_center').find('ul').eq($index).show().siblings().hide();
    })    

    $('.detail_left_ul').on('click','li',function(e){
        e.stopPropagation();
        var $this = $(this);
        if($this.find('.first').hasClass('on')){
            $this.find('.first').removeClass('on')
            $this.children('ul').hide();
            $this.siblings().find('first').removeClass('on')
            return;
        }
        $this.find('ul').show().parent().siblings().find('ul').hide();
        $this.find('.first').addClass('on').parent().siblings().find('.first').removeClass('on');
    })
})(jQuery)
