let inputL = document.getElementsByClassName("input_left");
let inputR = document.getElementsByClassName("input_right");
    
let thumbL = document.getElementsByClassName("left");
let thumbR = document.getElementsByClassName("right");
    
let range = document.getElementsByClassName("selected_area");
let percentL = new Array(2);
let percentR = new Array(2);

for (let i = 0; i < inputL.length; i++)
{
    inputL[i].addEventListener("input", function(){
        moveBar(i);
        let e = this;
        if (+inputR[i].value - +e.value < 10) {
            e.value = +inputR[i].value - 10;
        }
        percentL[i] = Math.round(((+e.value - +e.min) / (+e.max - +e.min)) * 100);
        thumbL[i].style.left = `${percentL[i]}%`;
        range[i].style.left = `${percentL[i]}%`;
    })
        inputL[i].addEventListener("mousedown", function(){
            document.getElementsByClassName("tmp_thumb_value")[i * 2].style.opacity = 1;
            inputL[i].addEventListener("mousemove", function(){
                document.getElementsByClassName("tmp_thumb_value")[i * 2].innerHTML = `<div>${tmpValL[i]}</div>`;
            });
        });
        inputL[i].addEventListener("mouseup", function(){
            document.getElementsByClassName("tmp_thumb_value")[i * 2].style.opacity = 0;
        });
    

    inputR[i].addEventListener("input", function(){
        moveBar(i);
        let e = this;
        if (+e.value - +inputL[i].value < 10) {
            e.value = +inputL[i].value + 10;
        }
        percentR[i] = Math.round(((+e.value - +e.min) / (+e.max - +e.min)) * 100);
        thumbR[i].style.right = `${100 - percentR[i]}%`;
        range[i].style.right = `${100 - percentR[i]}%`;
    })
    inputR[i].addEventListener("mousedown", function(){
        document.getElementsByClassName("tmp_thumb_value")[i * 2 + 1].style.opacity = 1;
        inputR[i].addEventListener("mousemove", function(){
            document.getElementsByClassName("tmp_thumb_value")[i * 2 + 1].innerHTML = `<div>${tmpValR[i]}</div>`;
        })
        inputR[i].addEventListener("mouseup", function(){
            document.getElementsByClassName("tmp_thumb_value")[i * 2 + 1].style.opacity = 0;
        });
    })
}
let tmp = new Array(2);
let tmpValL = [" ", 100];
let tmpValR = [" ", 0];
function moveBar(i)
{
    if (document.getElementsByClassName("blank" + i)[0] == undefined)
    {
        let addBlank = document.createElement("span");
        addBlank.setAttribute("class", "result_options blank" + i);
        addBlank.addEventListener("click", function(){//result span에 누르면 해제되는 기능 넣기
            addBlank.remove();
            phrase(1);
        })
        document.getElementsByClassName("result_options_bar")[0].appendChild(addBlank);
        phrase(0);
    }
    if (i == 0)
    {
        if (percentL[i] == undefined)
        {
            percentL[i] = " ";
        }
        if (percentR[i] == undefined)
        {
            percentR[i] = " ";
        }
        tmp[i] = "분";
        tmpValL[i] = percentL[i] * 3;
        tmpValR[i] = percentR[i] * 3;
    }
    else if (i == 1)
    {
        tmp[i] = "";
        if (percentL[i] == undefined)
        {
            percentL[i] = 0;
        }
        if (percentR[i] == undefined)
        {
            percentR[i] = 100;
        }
        tmpValL[i] = 1975 + Math.round(percentL[i] / 2);
        tmpValR[i] = 1975 + Math.round(percentR[i] / 2);
    }
    document.getElementsByClassName("blank" + i)[0].innerHTML=`${tmpValL[i]}${tmp[i]}~${tmpValR[i]}${tmp[i]}`;
}
function phrase(n)//입맛에 따라 골라보세요 문구
        {
            setTimeout(function(){
                if (n == 1)
                {
                    if (rOptBar[0].innerHTML.match("span") == null)
                    {
                        document.getElementsByClassName("result_options_tmp_phrase")[0].style.display = "block";
                    }
                }
                else if (n == 0)
                {
                    document.getElementsByClassName("result_options_tmp_phrase")[0].style.display = "none";
                }
            }, 20)
        }