$(document).ready(function(){
    //////////////////////////팝업 이미지///////////////////////////
                $(".popup_downer_li").mouseenter(function(){
                    $(".popup_downer_li").css({
                        "background-color": "#fff"
                    })
                    $(this).css({
                        "background-color": "#eee"
                    })
                    $(".popup_upper").css({
                        background: `url(./img/theComma/popup/big_img_0${$(this).index() + 1}.jpg) center / cover`
                    })
                })
    ////////////////////////////////////////////////////////////
    ////////////////////////팝업 이동////////////////////////////
                let updown = 0;
                let ox, oy;
                let px, py;
                let popup = $(".popup_main");
                document.getElementsByClassName("popup_main")[0].addEventListener("mousedown", function(){
                    updown = 1;
                    ox = event.offsetX;
                    oy = event.offsetY;
                })
                popup.mouseup(function(){
                    updown = 0;
                })
                popup.mousemove(function(){
                    px = event.pageX;
                    py = event.pageY;
                    if (updown == 1)
                    {
                        $(".layer_popup").css({
                            top: py - oy - 6 + "px",
                            left: px - ox - 6 + "px"
                        })
                    }
                })
                $(".popup_close").click(function(){
                    $(".layer_popup").remove();
                })
    ////////////////////////////////////////////////////////////
    /////////////////////sec에 리스트 채우기////////////////////////
                

                for (let i = 0; i < cate_arr.length; i++)
                {
                    make_list(cate_arr[i]);
                }
                load_list(0, 6);
                load_list(1, 8);
                load_list(2, 8);
            })