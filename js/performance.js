var boxStyleArray = [];
var boxContainer = document.getElementById('box-container');

(function init() {
  var div;
  var i;
  for (i = 0; i < 1000; i++) {
    div = document.createElement('div');
    div.classList.add('css-animation');
    div.classList.add('box');
    boxContainer.appendChild(div);
    boxStyleArray[i] = div.style;
  }
})();

var toggleStatus = true;
var animationType = document.getElementById('type');
var rafId;
window.toggle = function toggle() {
  var i;
  if (toggleStatus) {
    animationType.textContent = 'requestAnimationFrame';
    for(i = 0; i < boxContainer.children.length; i++) {
      boxContainer.children[i].classList.remove('css-animation');
    }
    rafId = window.requestAnimationFrame(animate);
  } else {
    animationType.textContent = 'CSS Animation';
    window.cancelAnimationFrame(rafId);
    for(i = 0; i < boxContainer.children.length; i++) {
      boxContainer.children[i].classList.add('css-animation');
    }
  }
  toggleStatus = !toggleStatus;
}

var duration = 6000;
var translateX = 500;
var rotate = 360;
var scale = 1.4 - 0.6;
var start;
function animate(time) {
  if (!start) {
    start = time;
    rafId = window.requestAnimationFrame(animate);
    return;
  }

  var progress = (time - start) / duration;
  var x = progress * translateX;
  var transform = 'translateX(' + x + 'px) ' +
                  'rotate(' + progress * rotate + 'deg) ' +
                  'scale(' + (0.6 + progress * scale ) + ')';
  if (progress >= 1) {
    x = (2 - progress) * translateX;
    transform = 'translateX(' + x + 'px) ' +
                'rotate(' + (2 - progress) * rotate + 'deg) ' +
                'scale(' + (0.6 + (2 - progress) * scale ) + ')';
  }

  var i;
  if (progress < 2) {
    for(i = 0; i < boxStyleArray.length; i++) {
      boxStyleArray[i].transform = transform;
    }
  } else {
    start = null;
  }
  rafId = window.requestAnimationFrame(animate);
}
