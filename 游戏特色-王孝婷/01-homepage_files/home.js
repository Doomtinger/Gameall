/**
 * Created by wangxiaoting on 2018/5/10.
 */
//window.onload=function(){
var mask=document.querySelector('.mask');
var mouseCnt=document.querySelector('.mouseCnt');
var intro=document.querySelector('.intro');
var man=document.querySelector('.man');
var bg=document.querySelector('.bg');
var homenum=10;
var timer=null;
mask.onclick=function(){
  if(homenum==10) {
    timer = setInterval(function () {
      var target = homenum-- / 10;
      if (target == 0) {
        homenum=target = 0;
        clearInterval(timer);
      }
      mask.style.opacity = target;
      mouseCnt.style.opacity = target;
      intro.style.opacity = target;
    }, 100)
  }
    if(homenum==0){
      timer=setInterval(function(){
        var target=homenum++/10;
        if(target==1){
          homenum=10;
          target=1;
          clearInterval(timer);
        }
        mask.style.opacity=target;
        mouseCnt.style.opacity=target;
        intro.style.opacity=target;
      },100)
  }
}


