var index = 1;
function changeImg(){
    var imgs = ["slide-bao.jpg", "slide-bao2.jpg", "slide-bao3.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==3){
        index=0;
    }
}
setInterval(changeImg,2000);