$(document).ready(function(){
    let index = 0;
    //배너이미지 삽입
    for (let i = 0; i < $(".banner").length; i++)
    {
        $(".banner").eq(i).css({
            background: `url(./img/theComma/main_banner/main_img_0${i + 1}.jpg) center / cover`
        });
    }
    //
    //인디케이터 삽입
    let b_length = $(".banner").length;
    for (let i = 0; i < b_length; i++)
    {
        $(".indicator").append(`<div class="i_bar"></div>`);
    }
    //
    //인디케이터 채우는 함수
    function fillIndicator(){
        $(".i_bar").removeClass("filled");
        $(".i_bar").eq(index % 3).addClass("filled");
    }
    fillIndicator();
    //
    //인디케이터 누르면 슬라이드 실행하는 for문
    $(".i_bar").click(function(){
        // console.log($(this).index());
        // console.log($(".filled").index());
        if ($(this).index() == $(".filled").index() + 2)
        {
            slide(1, 200);
            fillIndicator();
            setTimeout(function(){
                slide(1, 200);
            }, 200);
            setTimeout(function(){
                fillIndicator();
            }, 300);
        }
        else if ($(this).index() == $(".filled").index() + 1)
        {
            slide(1, 200);
            fillIndicator();
        }
        else if ($(this).index() == $(".filled").index() - 1)
        {
            slide(-1, 200);
            fillIndicator();
        }
        else if ($(this).index() == $(".filled").index() - 2)
        {
            slide(-1, 200);
            fillIndicator();
            setTimeout(function(){
                slide(-1, 200);
            }, 200);
            setTimeout(function(){
                fillIndicator();
            }, 300);
        }
    })
    //
    //배너 초기위치
    $(".banner").eq(0).css({
        left: 0
    });
    //
    //버튼에 함수 탑재
    $("#btn_r").click(function(){
        blockBtn();
        slide(1, 500);
        fillIndicator()
    })
    $("#btn_l").click(function(){
        blockBtn();
        slide(-1);
        fillIndicator()
    })
    //
    //인터벌, 인터벌함수
    let itv;
    function autoSlide()
    {
        clearInterval(itv);
        itv = setInterval(function(){
            slide(1, 500);
            fillIndicator();
        }, 2000);
    }
    autoSlide();
    $(".main_banner").mouseenter(function(){
        clearInterval(itv);
    })
    $(".main_banner").mouseleave(function(){
        clearInterval(itv);
        autoSlide();
    })
    //
    //슬라이드 함수
    function slide(pm, timer){
        $(".banner").eq(index % 3).animate({
            left: pm * -100 + "%"
        }, timer);
        $(".banner").eq((index + pm) % 3).animate({
            left: pm * 100 + "%"
        }, 0).animate({
            left: 0
        }, timer);
        index += pm;
    }
    //
    //움직일때 클릭 방지
    function blockBtn()
    {
        $(".btn").css({
            pointerEvents: "none"
        });
        setTimeout(() => {
            $(".btn").css({
            pointerEvents: "auto"
        });
        }, 500)
    }
    //
})