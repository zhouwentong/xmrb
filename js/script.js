jQuery(function($) {
    $.datepicker.regional['zh-CN'] = {
        clearText: '清除',
        clearStatus: '清除已选日期',
        closeText: '关闭',
        closeStatus: '不改变当前选择',
        prevText: '<上月',
        prevStatus: '显示上月',
        prevBigText: '<<',
        prevBigStatus: '显示上一年',
        nextText: '下月>',
        nextStatus: '显示下月',
        nextBigText: '>>',
        nextBigStatus: '显示下一年',
        currentText: '今天',
        currentStatus: '显示本月',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        monthStatus: '选择月份',
        yearStatus: '选择年份',
        weekHeader: '周',
        weekStatus: '年内周次',
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        dayStatus: '设置 DD 为一周起始',
        dateStatus: '选择 m月 d日, DD',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        initStatus: '请选择日期',
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
	$(function() {
		$( "#datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true
		});
	});

$(function(){
	$('.m4 ul:first').show();
	$('.m1 li:first').addClass('active1')
	$('.m1 li').click(function(){
		$(this).addClass('active1').siblings('li').removeClass('active1')
		var index=$('.m1 li').index(this);
		$('.m2 li').eq(index).show().siblings('li').hide();
		$('.m4 ul').eq(index).show().siblings('ul').hide();
		$('.m2 .smallImg li').eq(index).addClass('on').siblings().removeClass('on');
		$('.game163 .smallImg ul').animate({left:-92*index},300);
		return false;
	})
	$('.m2 .smallImg li').click(function(e) {
        var index=$('.m2 .smallImg li').index(this);
		$('.m4 ul').eq(index).show().siblings('ul').hide();
		$('.m1 li').eq(index).addClass('active1').siblings('li').removeClass('active1')
    });
})
