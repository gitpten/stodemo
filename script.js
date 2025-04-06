let photo = 0;
let numOfPhoto = 3;
function change(){
    console.log('dfsd');
    let elem = document.getElementById('author-photo');
    photo ++;
    elem.src= `./images/photo${photo % numOfPhoto + 1}.jpg`;
}