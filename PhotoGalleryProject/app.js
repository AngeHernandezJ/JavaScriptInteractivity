const IMAGES = ['bear', 'giraffe', 'panda', 'rabbit', 'squirrel', 'tiger'];
let text="";

document.addEventListener('DOMContentLoaded', event => {
    const DIV_IMAGES = document.getElementById('images');
    for (let i = 0; i < IMAGES.length; i++) {
        text += '<img class = "preview" alt = "'+IMAGES[i]+' cartoon" src = "./assets/'+IMAGES[i]+'.png" onmouseover = "upDate(this);" onfocus = "upDate(this);" onmouseout = "unDo();" onblur = "unDo();" tabindex = "'+(i+1)+'"></img>'
    }
    DIV_IMAGES.innerHTML = text;
})

function upDate(previewPic){
    const LARGE_IMAGE = document.getElementById('image');
    LARGE_IMAGE.style.backgroundImage = `url(${previewPic.src})`;
    LARGE_IMAGE.innerHTML = previewPic.alt;
}
 
function unDo(){
    const LARGE_IMAGE = document.getElementById('image');
    LARGE_IMAGE.style.backgroundImage = 'initial';
    LARGE_IMAGE.innerHTML = 'Hover over an image below to display here.';
}