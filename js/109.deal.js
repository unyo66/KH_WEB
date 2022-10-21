    let cate_index = get_url("cate");
    let item_index = get_url("item_no");
    console.log("cate : " + cate_index);
    console.log("item : " + item_index);
    let title = get_list(cate_index)[item_index].name;
    let img_src = get_list(cate_index)[item_index].src;
    let o_price = get_list(cate_index)[item_index].o_price.replace(",", "").replace("원","");
    let n_price = get_list(cate_index)[item_index].n_price.replace(",", "").replace("원","");
    let desc = get_list(cate_index)[item_index].desc;

    $(".main_img").append(`
        <img src="./img/theComma/items/${cate_arr[cate_index]}/${+item_index + 1}.jpg" alt="">
        <div class="magnifier"></div>
    `);
    $(".other_img").append(`
        <img src="./img/theComma/items/${cate_arr[cate_index]}/${+item_index + 1}.jpg" alt="">
    `);
    $(".magnifier").css({
        background: `url(./img/theComma/items/${cate_arr[cate_index]}/${+item_index + 1}.jpg) no-repeat`
    })
    $(".item_title").text(title);
    $(".td_content del").eq(0).text(o_price);
    $(".td_content").eq(1).text(n_price);
    $(".td_content").eq(3).text(`${+n_price * 0.2},000원 (20%)`)

    ////////////////////////////////
    
        // 돋보기
    $('.main_img').hover(function(){
        $('.magnifier').css({display: 'block'})

        
    }, function(){
        $('.magnifier').css({display: 'none'})
    });

    $('.main_img').mousemove(function(e){ 

        let mouseX = e.pageX - $('.main_img > img').offset().left;
        let mouseY = e.pageY - $('.main_img > img').offset().top; 

        let xx = -mouseX + ($('.magnifier').width() / 2);
        let yy = -mouseY + ($('.magnifier').height() / 2);

        // 4 - 돋보기 위치 이동 및 배경 이동
        $('.magnifier').css({
            left: mouseX,
            top: mouseY,

            backgroundPosition: xx + "px " + yy + "px", 
            //550 707
            backgroundSize: `${$('.main_img > img').width()}px ${$('.main_img > img').height()}px`
        });
    });
    ////////////////////////////////
    ////////////////////////////////
    let setColor = ["black", "grey", "white", "orange"];
    let tmpColor;
    for (let i = 0; i < setColor.length; i++)
    {
        tmpColor = `
            <div class="color ${setColor[i]}"></div>
        `;
        $(".color_box").append(tmpColor);
        $(".color").eq(i).css({
            "background-color": `${setColor[i]}`,
            cursor: "pointer"
        })
    }
    //////////////
    let color;
    let length;
    let flag = true;
    $(".color").click(function(){
        length = $(".opt_selected").children().length;
        // color = $(this).attr("class").replace("color ", "");
        color = setColor[$(this).index()];
        flag = true;
        $(".item_color").text(`[필수]${color}`);
        for (let i = 0; i < length; i++)
        {
            if ($(".sel_item").eq(i).attr("class").replace("sel_item ", "") == color)
            {
                flag = false;
            }
        }

        if (flag)
        {
            $(".opt_selected").append(`
            <div class="sel_item ${color}">
            <div class="sel_item_text}">
                <div class="sel_item_title">${title}</div>
                <div class="sel_item_color">-${color}</div>
            </div>
            <div class="set_qtt">
                <div class="btn_qtt down">-</div>
                <input type="text" name="" class="item_qtt" value="1">
                <div class="btn_qtt up">+</div>
            </div>
            <div class="delete">X</div>
            <div class="sel_item_price">${n_price}</div>
            </div>
            `);
        }
        else
        {
            alert("이미 담은 상품입니다.");
        }
        
        $(".delete").click(function(){
            $(this).parent().remove();
        });
        // let btn_i;
        // $(".btn_qtt").click(function(){
        //     let parent = $(this).parent().parent().attr("class").replace("sel_item ", "");
        //     console.log((parent));
        //     let my_qtt = $(`.${parent} .item_qtt`);
        //     console.log("qtt: " + my_qtt.val());
        //     if ($(this).hasClass("down"))
        //     {
        //         if (+$(`.${parent} .item_qtt`).val() > 1)
        //         {
        //             $(`.${parent} .item_qtt`).val(+$(`.${parent} .item_qtt`).val() - 1)
        //         }
        //     }
        //     else if ($(this).hasClass("up"))
        //     {
        //         $(`.${parent} .item_qtt`).val(+$(`.${parent} .item_qtt`).val() + 1)
        //     }
        //     $(".sel_item_price").eq($(this).parent().parent().index()).text(`${n_price * $(".item_qtt").val()}`);
        //     cal_total();
        // })
    });
    function cal_total(){
        let total = 0;
        for (let i = 0; i < $(".sel_item_price").length; i++)
        {
            total += +$(".sel_item_price").eq(i).text();
        }
        $(".total_price").text("total : " + total);
    }
