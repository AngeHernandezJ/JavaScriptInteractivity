/*function showProperties(element){
  document.getElementById('message').innerHTML = element.alt;
}*/
//const IMAGES =document.getElementsByTagName('img');
//console.log(IMAGES);
/*const MESSAGET = document.querySelector('#message');

document.addEventListener('mouseover', event => {
console.log(event.target);
document.querySelector('#message').innerHTML = event.target.alt;
});*/


function upDate(previewPic){
    const LARGE_IMAGE = document.getElementById('image');
    // In this function you should 
    // 1) change the url for the background image of the div with the id = "image" to the source file of the preview image
    //console.log(previewPic.src);
    LARGE_IMAGE.style.backgroundImage = `url(${previewPic.src})`;
    // 2) Change the text  of the div with the id = "image" to the alt text of the preview image 
    LARGE_IMAGE.innerHTML = previewPic.alt;
}
 
function unDo(){
    const LARGE_IMAGE = document.getElementById('image');
    // In this function you should 
    // Update the url for the background image of the div with the id = "image" back to the orginal-image.  You can use the css code to see what that original URL was
    LARGE_IMAGE.style.backgroundImage = 'initial';
    // Change the text  of the div with the id = "image" back to the original text.  You can use the html code to see what that original text was
    LARGE_IMAGE.innerHTML = 'Hover over an image below to display here.';
}