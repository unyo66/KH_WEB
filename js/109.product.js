console.log(get_url("cate"));
let tmp_index = get_url("cate");
let tmp_cate = cate_arr[tmp_index];
let tmp_length;
if (tmp_index == 0)
{
    tmp_length = 6;
}
else
{
    tmp_length = 8;
}
make_list(tmp_cate);
load_list(tmp_index, tmp_length);
let count = 0;
            $(window).scroll(function(){
                let d_height = $(".footer").offset().top;
                let s_bot = $(window).scrollTop() + $(window).height();
                // console.log(d_height, s_bot);
                if(count < 4 && s_bot >= d_height + 100) 
                {
                    d_height = $(document).height();
                    load_list(tmp_index, tmp_length);
                    count++
                }
    });