/**
 * Created by wangxiaoting on 2018/5/14.
 */
var city = document.querySelectorAll('.city');
var cityIntro = document.querySelectorAll('.cityIntro');
var cloud1 = document.querySelectorAll('.cloud')[0];
var cloud2 = document.querySelectorAll('.cloud')[1];
var map = document.getElementById('map');
var cloudTimer = null;
var cloudTimer1=null;
var cloudTimer2=null;
for (var i = 0; i < city.length; i++) {
  city[i].onmouseenter = cityEnter;
  city[i].setAttribute('cityindex', i);
  city[i].onmouseleave = cityLeave;
}
function cityEnter() {
  var cityindex = this.getAttribute('cityindex');
  for (var i = 0; i < cityIntro.length; i++) {
    cityIntro[i].style.display = 'none';

  }
  cityIntro[cityindex].style.display = 'block';
}

function cityLeave() {
  var cityindex = this.getAttribute('cityindex');
  cityIntro[cityindex].style.display = 'none';
}


function cloudMove(element, step, move, fn) {
  if (element.timer) {
    clearInterval(element.timer)
  }
  element.timer = setInterval(function () {
    var location = element.offsetLeft;
    if (move - location > 0) {
      var target = location + step;
    } else {
      var target = location - step;
    }
    element.style.left = target + 'px';
    if (Math.abs(move - target) < step) {
      element.style.left = move + 'px';
      clearInterval(element.timer);
      if ((typeof fn) === 'function') {
        fn();
      }
    }
  }, 100)
}
cloudMove(cloud1, 4, 400, function () {
  cloudMove(cloud1, 4, 0)
});
//cloudMove(cloud2, 4, 200, function () {
//  cloudMove(cloud2, 4, 600)
//});

  cloudTimer = setInterval(function () {
    cloudMove(cloud1, 4, 400, function () {
      cloudMove(cloud1, 4, 0)
    });
    cloudMove(cloud2, 4, 200, function () {
      cloudMove(cloud2, 4, 600)
    });
  }, 20000);

