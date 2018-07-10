var move = document.getElementById("move");
var btm = document.getElementById("btm");
var bottom = document.getElementById("bottom");
var bg = document.getElementById("bg");
var xiangqing_bg = document.getElementById("xiangqing_bg");
var tuone=document.getElementById('tuone')
var tutwo=document.getElementById('tutwo')
var tuthree=document.getElementById('tuthree')
var tufour=document.getElementById('tufour')
var tufive=document.getElementById('tufive')
var tusix=document.getElementById('tusix')
var tuseven=document.getElementById('tuseven')
var tueigth=document.getElementById('tueight')
var tunight=document.getElementById('tunight')
var tuten=document.getElementById('tuten')
var tueleven=document.getElementById('tueleven')
var tutwelve=document.getElementById('tutwelve')
//给小圆注册鼠标按下事件
move.onmousedown = function(e){
  //获取鼠标按下的x轴坐标
  var downX = e.clientX;

  //获取小圆离左边的距离
  var offsetX = move.offsetLeft;

  //给小圆注册移动事件
  document.onmousemove = function(e){
    bottom.style.background = '0';
    move.style.display = 'block';
    var X = e.clientX;

    //获取移动了多少位置
    var shiftX = X - downX;

    //目标位置
    var targetX = shiftX + offsetX;

    //给小圆限制位置
    var minX = 0;
    var maxX = btm.offsetWidth - move.offsetWidth;

    if(targetX <= minX){
      targetX = minX;
    }
    if(targetX >= maxX){
      targetX = maxX;
      bg.style.display = 'none';
      xiangqing_bg.style.display = 'block';
    }

    //让move随着鼠标移动
    move.style.left = targetX +'px';

    //给鼠标注册抬起事件
    document.onmouseup = function(){
      document.onmousemove = null;

      if(targetX < 252){

      var timeid =  setInterval(function(){
        bottom.style.background = '0';
          var tesp = 1;
          targetX -= tesp;
          move.style.left = targetX + 'px';
          if(targetX <= 0){
            clearInterval(timeid);
            move.style.left = 0;
            bottom.style.background = 'url(images/load.png) no-repeat';
          }
        },3)

      }
    }
  }
}


var animal = document.getElementById("animal");
var is = animal.getElementsByTagName('i');
var strongs = animal.getElementsByTagName('strong');


var one = document.getElementById("one");
var caione = document.getElementById("caione");
var huoone = document.getElementById("huoone");

is[0].onmouseenter = function () {
  huoone.style.display = 'block';
  caione.style.display = 'block';
     fn(0);
}


is[0].onclick = function(){
  //oneimg.style.display = 'block';
  tuone.style.display='block'
}

is[0].onmouseleave = function(){
  huoone.style.display = 'none';
  caione.style.display = 'none';
  tuone.style.display='none'
  //oneimg.style.display = 'none';

}



var two = document.getElementById("two");
var caitwo = document.getElementById("caitwo");
is[1].onmouseenter = function () {
  huotwo.style.display = 'block';
  caitwo.style.display = 'block';
     fn(1);
   }
var huotwo = document.getElementById("huotwo");

is[1].onclick = function(){
  //twoimgstyle.display = 'block';
  tutwo.style.display='block'

}
is[1].onmouseleave = function () {
  huotwo.style.display = 'none';
  caitwo.style.display = 'none';
  tutwo.style.display='none'

}

var caithree = document.getElementById("caithree");
is[2].onmouseenter = function () {
  huothree.style.display = 'block';
  caithree.style.display = 'block';
     fn(2);
   }
var huothree = document.getElementById("huothree");
is[2].onclick = function(){
  tuthree.style.display = 'block';
}
is[2].onmouseleave = function(){
  huothree.style.display = 'none';
  caithree.style.display = 'none';
  tuthree.style.display = 'none';
}

var caifour = document.getElementById("caifour");
var huofour = document.getElementById("huofour");
is[3].onmouseenter = function () {
  caifour.style.display = 'block';
  huofour.style.display = 'block';
     fn(3);
   }
is[3].onclick = function(){
  tufour.style.display = 'block';
}
is[3].onmouseleave = function(){
  caifour.style.display = 'none';
  huofour.style.display = 'none';
  tufour.style.display = 'none';
}

var caifive = document.getElementById("caifive");
var huofive = document.getElementById("huofive");
is[4].onmouseenter = function () {
  caifive.style.display = 'block';
  huofive.style.display = 'block';
  fn(4);
   }
is[4].onclick = function(){
  tufive.style.display = 'block';
}
is[4].onmouseleave = function(){
  caifive.style.display = 'none';
  huofive.style.display = 'none';
  tufive.style.display = 'none';
}


var caisix = document.getElementById("caisix");
var huosix = document.getElementById("huosix");
is[5].onmouseenter = function () {
  caisix.style.display = 'block';
  huosix.style.display = 'block';
     fn(5);
   }
is[5].onclick = function(){
  tusix.style.display = 'block';
}
is[5].onmouseleave = function(){
  caisix.style.display = 'none';
  huosix.style.display = 'none';
  tusix.style.display = 'none';
}


var caiseven = document.getElementById("caiseven");
var huoseven = document.getElementById("huoseven");
is[6].onmouseenter = function () {
  caiseven.style.display = 'block';
  huoseven.style.display = 'block';
     fn(6);
   }
is[6].onclick = function(){
  tuseven.style.display = 'block';
}
is[6].onmouseleave = function(){
  caiseven.style.display = 'none';
  huoseven.style.display = 'none';
  tuseven.style.display = 'none';
}


var caieight = document.getElementById("caieight");
var huoeight = document.getElementById("huoeight");
is[7].onmouseenter = function () {
  caieight.style.display = 'block';
  huoeight.style.display = 'block';
     fn(7);
   }
is[7].onclick = function(){
  tueigth.style.display = 'block';
}
is[7].onmouseleave = function(){
  caieight.style.display = 'none';
  huoeight.style.display = 'none';
  tueigth.style.display = 'none';
}


var cainight = document.getElementById("cainight");
var huonight = document.getElementById("huonight");
is[8].onmouseenter = function () {
  cainight.style.display = 'block';
  huonight.style.display = 'block';
     fn(8);
   }
is[8].onclick = function(){
  tunight.style.display = 'block';
}
is[8].onmouseleave = function () {
  cainight.style.display = 'none';
  huonight.style.display = 'none';
  tunight.style.display = 'none';
}


var caiten = document.getElementById("caiten");
var huoten = document.getElementById("huoten");
is[9].onmouseenter = function () {
  caiten.style.display = 'block';
  huoten.style.display = 'block';
     fn(9);
   }
is[9].onclick = function(){
  tuten.style.display = 'block';
}
is[9].onmouseleave = function(){
  caiten.style.display = 'none';
  huoten.style.display = 'none';
  tuten.style.display = 'none';
}


var caieleven = document.getElementById("caieleven");
var huoeleven = document.getElementById("huoeleven");
is[10].onmouseenter = function () {
  caieleven.style.display = 'block';
  huoeleven.style.display = 'block';
     fn(10);
   }
is[10].onclick = function(){
  tueleven.style.display = 'block';
}
is[10].onmouseleave = function(){
  caieleven.style.display = 'none';
  huoeleven.style.display = 'none';
  tueleven.style.display = 'none';
}


var caitwelve = document.getElementById("caitwelve");
var huotwelve = document.getElementById("huotwelve");
is[11].onmouseenter = function () {
  caitwelve.style.display = 'block';
  huotwelve.style.display = 'block';
     fn(11);
   }
is[11].onclick = function(){
  tutwelve.style.display = 'block';
}
is[11].onmouseleave = function(){
  caitwelve.style.display = 'none';
  huotwelve.style.display = 'none';
  tutwelve.style.display = 'none';
}


    function fn(i){
       strongs[i].style.background = 'url(images/huoguang.png) -43px -6314px no-repeat';
       }


$('.strong').animate({
    top: 400,
},2000)

var box = document.getElementById("box");
var arr = [
  'url(images/38.png)',
  'url(images/37.png)',
  'url(images/36.png)',
  'url(images/35.png)',
  'url(images/34.png)',
  'url(images/33.png)',
  'url(images/32.png)',
  'url(images/31.png)',
  'url(images/30.png)',
  'url(images/29.png)',
  'url(images/28.png)',
  'url(images/27.png)',
  'url(images/26.png)',
  'url(images/25.png)',
  'url(images/24.png)',
  'url(images/23.png)',
  'url(images/22.png)',
  'url(images/21.png)',
  'url(images/20.png)',
  'url(images/19.png)',
  'url(images/18.png)',
  'url(images/17.png)',
  'url(images/16.png)',
  'url(images/15.png)',
  'url(images/14.png)',
  'url(images/13.png)',
  'url(images/12.png)',
  'url(images/11.png)',
  'url(images/10.png)',
  'url(images/9.png)',
  'url(images/8.png)',
  'url(images/7.png)',
  'url(images/6.png)',
  'url(images/5.png)',
  'url(images/4.png)',
  'url(images/3.png)',
  'url(images/2.png)',
  'url(images/1.png)',
  'url(images/0.png)'
];
var index=0;
var tiid = setInterval(function(){
  if(index >= 38){
    index = 0;
  }
  index++;
  box.style.backgroundImage = arr[index];
  if (index == arr.length - 1){
    clearInterval(tiid);
  }
},100);





