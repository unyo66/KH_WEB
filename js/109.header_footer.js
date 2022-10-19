    //////////////////////////탑배너///////////////////////////////
    let topIndex = 0;
    $(".top_banner_txt").eq(topIndex % 3).css({
            top: 0
        })
    let topItv = setInterval(function(){
        $(".top_banner_txt").eq(topIndex % 3).animate({
            top: "-40px"
        }, 500).animate({
            top: "40px"
        }, 0)
        $(".top_banner_txt").eq((topIndex + 1) % 3).animate({
            top: 0
        }, 500)
        topIndex += 1;
    }, 2000);
/////////////////////////////////////////////////////////////
////////////////////////퀵메뉴 펼치기////////////////////////
    let quickFlag = false;
    $(".hide_btn").click(function(){
        if (quickFlag)
        {
            $(".quick_menu").addClass("quick_hided");
            $(".hide_btn").css({
                "background-color": "#444",
                color: "#fff",
                "font-size": "30px"
            })
            $(".hide_btn").text("+");
            quickFlag = false;
        }
        else
        {
            $(".quick_menu").removeClass("quick_hided");
            $(".hide_btn").css({
                "background-color": "#fff",
                color: "#444",
                "font-size": "18px"
            })
            $(".hide_btn").text("✕");
            quickFlag = true;
        }
    })
    $(".hide_btn").mouseenter(function(){
        if (quickFlag)
        {
            $(".hide_btn").css({
                "background-color": "#444",
                color: "#fff"
            })
        }
        else
        {
            $(".hide_btn").css({
                "background-color": "#fff",
                color: "#444"
            })
        }
    })
    $(".hide_btn").mouseleave(function(){
        if (quickFlag)
        {
            $(".hide_btn").css({
                "background-color": "#fff",
                color: "#444"
            })
        }
        else
        {
            $(".hide_btn").css({
                "background-color": "#444",
                color: "#fff"
            })
        }
    })
/////////////////////////////////////////////////////////////
////////////////////////////메뉴 펼치기////////////////////////
    $(".menu_li").mouseenter(function(){
        $(".menu_pan").css({
            height: "300px"
        })
    })
    $(".menu_li").mouseleave(function(){
        $(".menu_pan").css({
            height: "0px"
        })
    })
    $(".menu_pan").mouseenter(function(){
        $(".menu_pan").css({
            height: "300px"
        })
    })
    $(".menu_pan").mouseleave(function(){
        $(".menu_pan").css({
            height: "0px"
        })
    })
    let index;
    $(".menu_li").mouseenter(function(){
        $(".pan").css({
            display: "none"
        })
        index = $(this).index();
        $(".pan").eq(index).css({
            display: "block"
        })
    })
////////////////////////////////////////////////////////////
////////////////////////////메뉴 끌고댕기기/////////////////////
    let h_top = $(".menu_ul").offset().top;
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        // console.log(h_top, s_top + 40);
        if (h_top <= s_top + 40)
        {
            $(".menu_ul").css({
                top: s_top
            })
        }
        else if (h_top > s_top + 40)
        {
            $(".menu_ul").css({
                top: "250px"
            })
        }
    })

////////////////////////////////////////////////////////////