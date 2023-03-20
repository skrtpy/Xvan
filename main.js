let pic1 = document.getElementById("stars");
let pic2 = document.getElementById("moon");
let pic3 = document.getElementById("mountains3");
let pic4 = document.getElementById("mountains4");
let pic5 = document.getElementById("river");
let pic6 = document.getElementById("boat");
let pic7 = document.getElementById("mountains7");
let xvan = document.querySelector(".xvan");
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px"
    moon.style.top = value * 4 + "px"
    mountains3.style.top = value * 1.2 + "px"
    mountains4.style.top = value * 1.5 + "px"
    river.style.top = value * 1.2 + "px"
    boat.style.left = value * 3 + "px"

    xvan.style.fontSize = value + "px";
    if(scrollY >= 70){
        xvan.style.fontSize = 70 + "px";
        xvan.style.position = 'fixed';
        if(scrollY >= 478){
            xvan.style.display = 'none';

        }else{
            xvan.style.display = 'block';

        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'

        }else{
            document.querySelector('.main').style.background = 'linear-gradient(to top,#200016,transparent'

        }


    }

}