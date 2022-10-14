        let inputL = document.getElementsByClassName("input_left");
        let inputR = document.getElementsByClassName("input_right");
            
        let thumbL = document.getElementsByClassName("left")[0];
        let thumbR = document.getElementsByClassName("right")[0];
            
        let range = document.querySelector(".selected_area");
            
        for (let i = 0; i < inputL[i].length; i++)
        {function setLeftVal(e){
            if (+inputR[i].value - +e.value < 10) {
                e.value = +inputR[i].value - 10;
            }
            let percent = ((+e.value - +e.min) / (+e.max - +e.min)) * 100;
            thumbL.style.left = `${percent}%`;
            range.style.left = `${percent}%`;
            console.log(e, e.value);
        }
        function setRightVal(e){
            if (+e.value - +inputL[i].value < 10) {
            e.value = +inputL[i].value + 10;
            }
            let percent = ((+e.value - +e.min) / (+e.max - +e.min)) * 100;

            thumbR.style.right = `${100 - percent}%`;
            range.style.right = `${100 - percent}%`;
        }
        inputL[i].addEventListener("input", function(){
                setLeftVal(this);
            });
            inputR[i].addEventListener("input", function(){
                setRightVal(this);
            });
        }