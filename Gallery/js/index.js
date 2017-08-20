window.onload = function () {
  readJSON();
  // 绑定关联的click
  preGallery();
};
let imgList = document.getElementById('imagegallary');
function readJSON() {
  const url = "../Gallery/image.json";
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
      if(xhr.status === 200) {
        const myImgList = JSON.parse(xhr.responseText);
        console.log(myImgList);
        myImgList.map(function (e) {
          let elePNode = document.createElement('li');
          let eleCNode = document.createElement('a');
          eleCNode.setAttribute('href',e.imgSrc);
          eleCNode.setAttribute('title',e.imgTitle);
          eleCNode.innerHTML = e.description;
          elePNode.appendChild(eleCNode);
          imgList.appendChild(elePNode);
        });
      } else {
        console.log(xhr.status);
      }
    }
  };
  xhr.open("GET",url,true);
  xhr.send(null);
}
function preGallery() {
  if(!imgList) return false;
  imgList.addEventListener('click',function (e) {
    let event = e || window.event;
    let target = event.target || event.srcElement;
    if(target.nodeName.toLowerCase() === 'a') {
      // showPic(target);
      // event.preventDefault();
      return showPic(target) ? event.preventDefault(): true;
    }
  })
}
// click 具体操作显示图片
function showPic(picNum) {
  // 没有显示图片的地方 则停止
  if(!document.getElementById('placeholder')) return false;
  let source = picNum.getAttribute('href');
  let placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src',source);
  let description = document.getElementById('description');
  if(description) {
    let text = picNum.getAttribute('title') ? picNum.getAttribute('title'):"No Description";
    description.innerHTML = text;
  }
  return true;
}


