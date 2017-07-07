$('#test_hdp').carousel({
	interval:2000,//每张图片之间的切换时间
	pause:'hover',//鼠标移入暂停播放
	wrap : true,//循环播放，true是无限次循环，false是单次播放
});
function pic(obj,number)
{
	var oDiv_w=$(document).width();
	var oDiv_h=parseInt(oDiv_w/number);
	$(obj).css("height",oDiv_h);
	$(obj).find('img').css("height",oDiv_h);
	$(obj).find('a').css("height",oDiv_h);	
}
function nr_pic(obj,number)
{
	var oDiv_w=$(obj).width();
	var oDiv_h=parseInt(oDiv_w/number);
	$(obj).css("height",oDiv_h);
	$(obj).find('img').css("height",oDiv_h);
	$(obj).find('a').css("height",oDiv_h);	
}