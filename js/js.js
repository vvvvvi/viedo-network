/**
 * Created by Administrator on 2017/6/22.
 */
$(function(){
    //鼠标悬停时改变
    var timer = null;
    var n = 0;
    var oBtn = $('.hea-d1 li');

    oBtn.mouseover(function() {
        n = $(this).index();
        tab();
    });

    tab2();
    timer = setInterval(tab2, 2000);
    $('#hea').hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(tab2, 2000);
    });

    function tab() {
        $('.hea-d1 li').removeClass('on');
        $(".hea-d2 li").removeClass('on');
        $('.hea-d1 li').eq(n).addClass("on");
        $(".hea-d2 li").eq(n).addClass("on");
    }

    function tab2() {
        tab();
        n++;
        if (n == oBtn.length) n = 0;
    }



    $(window).scroll(function(){
        var sc=$(window).scrollTop();
        var rwidth=$(window).width();
        if(sc>0){
            $(".top").css("display","block");
            $(".top").css("left",(rwidth-70)+"px")
        }else{
            $(".top").css("display","none");
        }
    });
    $(".top").click(function(){
        var sc=$(window).scrollTop();
        $('body,html').animate({scrollTop:0},500);
    });

    //the 7.html
    $('#btna').click(function () {
        $('#dl').css('display','none');
        $('#zc').css('display','block');
        $('#btna2').click(function () {
            if($('#zc').css('display','block')){
                $('#zc').css('display','none');
                $('#dl').css('display','block');
            }
        })
    });

    $('#zcbtn').click(function () {
        if($('#pass1').val()!==$('#pass2').val()){
            alert("请输入相同的密码");
        }
    });


});