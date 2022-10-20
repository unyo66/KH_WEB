console.log(get_url("cate"));
let cate_index = get_url("cate");
let cate_txt = cate_arr[cate_index];
let tmp_length;
if (cate_index == 0)
{
    tmp_length = 6;
}
else
{
    tmp_length = 8;
}
make_list(cate_txt);
load_list(cate_index, tmp_length);
let count = 0;
            $(window).scroll(function(){
                let d_height = $(".footer").offset().top;
                let s_bot = $(window).scrollTop() + $(window).height();
                // console.log(d_height, s_bot);
                if(count < 4 && s_bot >= d_height + 100) 
                {
                    d_height = $(document).height();
                    load_list(cate_index, tmp_length);
                    count++
                }
            });