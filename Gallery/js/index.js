
window.onload = function () {
  // 绑定关联的click
  preGallery();
};
let imgList = document.getElementById('imagegallary');
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
    let text = picNum.getAttribute('title');
    description.innerHTML = text;
  }
  return true;
}
