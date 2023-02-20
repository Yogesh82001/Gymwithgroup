var mainimg=document.getElementById("crausal-img");
var images=["/img/images.jpg","/img/download.jpg","/img/download (2).jpg","/img/download (1).jpg"];
var num=0;
function next(){
    num++;
    if(num>=images.length){
        num=0;
        mainimg.src=images[num];
    }
    else{
        mainimg.src=images[num];
    }
};
function back(){
    num--;
    if(num<0){
        num=images.length-1;
        mainimg.src=images[num];
        console.log(mainimg.src);

    }
    else{
        mainimg.src=images[num];
        console.log(mainimg.src);
    }
};