        /* 별점 평가하기 */
        let drawStar = (target) => {
            // document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
            document.getElementsByClassName('star_span')[0].style.width = `${target.value * 10}%`;
        }
        /* 영화 줄거리 더보기 버튼*/
        let btn_story_chk = 0;
        let btn_story = document.getElementsByClassName("btn_story")[0];
        btn_story.addEventListener("click", story_full);
        function story_full() {
            let btn_story =  document.getElementsByClassName('btn_story')[0];
            let story_full = document.getElementsByClassName('move_story')[0];
            console.log('동작');
            console.log(btn_story_chk);
            // if(btn_story_chk = 0){
                story_full.classList.add("move_story_full");
                btn_story.style.innerText="접기"
                btn_story_chk=1;
            // }else if(btn_story_chk = 1){
            //     story_full.classList.remove("move_story_full");
            //     btn_story.style.innerText="더보기"
            //     btn_story_chk=0;
            // }
        }
        /*감독 출연진 더보기 버튼*/
        let btn_staff =document.getElementsByClassName('btn_staff')[0];
        btn_staff.addEventListener('click', staff_full);

        function staff_full() {
            let staff_box_full = document.getElementsByClassName('staff_box_full')[0];
            let staff_box = document.getElementsByClassName('staff_box')[0];

            staff_box_full.style.display="block";
            staff_box.style.display="none";

        }
        /* 코멘트 아이콘 클릭 */
        let good_icon_chk = 0;
        let good_icon = document.getElementsByClassName('good_icon');
        good_icon[0].addEventListener('click', icon_chk)
        function icon_chk(){
            if(good_icon_chk == 0){
                good_icon[0].src="good_icon_2.png";
                good_icon_chk = 1;
            }else if(good_icon_chk == 1){
                good_icon[0].src="good_icon_1.png";
                good_icon_chk = 0;
            }
        }