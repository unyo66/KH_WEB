function get_url(key){
    url = location.href;
    url = url.split("?");
    if (url.length > 1)
    {
        url = url[1].split("&");
        for (let i = 0; i < url.length; i++)
        {
            let tmp_url = url[i].split("=");

            if (tmp_url[0] == key)
            {
                return tmp_url[1];
            }
        }
        return -1;
    }
    return -2;
}
// console.log(get_url("cate"));
function make_list(cate){
        let list = `
        <div class="sec" id="${cate}">
            <div class="sec_title"></div>
            <div class="sec_body"></div>
        </div>`;
        $(".container").append(list);
        $(`#${cate} .sec_title`).text(cate.toUpperCase());
}
function load_list(cate_index, show_qty)
{
    let rs = ITEM_LIST[cate_index];
    for (let i = 0; i < show_qty; i++)
    {
        let list = `<div class="item_box">
                    <div class="item_img">
                        <a href="#" class="img_a">
                            <img src="${rs[i].src}" alt="">
                        </a>
                    </div>
                    <div class="item_info">
                        <div class="item_title">
                            <a href="#">
                            ${rs[i].name}
                            </a>
                        </div>
                        <div class="item_price">
                            ${rs[i].o_price}
                        </div>
                        <div class="item_desc">
                            ${rs[i].desc}
                        </div>
                    </div>
                </div>`;
        $(`#${cate_arr[cate_index]} > .sec_body`).append(list);
        if (cate_index == 2)
        {
            $(`#${cate_arr[cate_index]} .img_a`).eq(i).append(`<img src="${rs[0].src}" alt="" class="hided_img">`);
        }
    }
}
const cate_arr = ["dailyranking", "best", "new"];
