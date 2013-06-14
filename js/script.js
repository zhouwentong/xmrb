function check(d){
	str=document.URL
	strs=str.split("/");
	window.location.href="http://www.xmnn.cn/dzbk/"+strs[4]+"/"+d+"/"
}

$(function(){
	$('.m4 ul:first').show();
	$('.m1 li:first').addClass('active1')
	$('.m1 li').click(function(){
		$(this).addClass('active1').siblings('li').removeClass('active1')
		var index=$('.m1 li').index(this);
		$('.m2 li').eq(index).show().siblings('li').hide();
		$('.m4 ul').eq(index).show().siblings('ul').hide();
		$('.m2 .smallImg li').eq(index).addClass('on').siblings().removeClass('on');
		return false;
	})
	$('.m2 .smallImg li').click(function(e) {
        var index=$('.m2 .smallImg li').index(this);
		$('.m4 ul').eq(index).show().siblings('ul').hide();
		$('.m1 li').eq(index).addClass('active1').siblings('li').removeClass('active1')
    });
})
