var img=document.getElementById("img");
var img_arr=["./img/red_green.jpg","img/cook.jpg","img/red.jpg",
            "/img/eye_girl.jpg","img/milk.jpg",
            "img/wallpaper.jpeg","img/water_girl.jpg"];
var i=0;
function right_click(){
    var i=window.i
    img.src=img_arr[i];
    i=i+1;
    if(i > (img_arr.length-1))
        i=0;
    window.i=i;
    // console.log(img_arr.length)
}

function left_click(){
    var i=window.i
    img.src=img_arr[i];
    i=i-1;
    if(i < 0)
        i=(img_arr.length-1);
    window.i=i;
}