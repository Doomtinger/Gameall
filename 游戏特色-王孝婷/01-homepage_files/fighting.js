/**
 * Created by wangxiaoting on 2018/5/14.
 */
var box=document.querySelectorAll('.box');
var boxImg=document.querySelectorAll('.boxImg');
var fightDetailCnt=document.querySelector('.fightDetailCnt');
var detailItem=document.querySelectorAll('.detailItem');
var detailItem3=document.querySelectorAll('.detailItem')[2];
var fightcloseBtn=document.getElementById('fightcloseBtn');
var fightNavCnt=document.getElementById('fightNavCnt');
var tabBtn=fightNavCnt.querySelectorAll('.tabBtn');
var slideBG=fightNavCnt.children[0];
var ul=document.querySelector('.f-cb');
var lis=ul.children;
var item=detailItem3.querySelectorAll('.item');
var detailTitle=document.querySelectorAll('.detailTitle');
var imgHover=document.querySelectorAll('.imgHover');
var fightTimer;
var indexGlobal=-1;
for(var i=0;i<box.length;i++){
  box[i].onmouseenter=boxEnter;
  box[i].onmouseleave=boxLeave;
  box[i].onclick=boxClick;
  box[i].setAttribute('boxIndex',i);
}
//触摸自己opacity是1其它都是0.5
function boxEnter(){
  var boxIndex=this.getAttribute('boxIndex');
  opacityAnimate(5,boxImg[boxIndex],1);
}
//鼠标离开的时候opacity变成1
function boxLeave(){
  var boxIndex=this.getAttribute('boxIndex');
  opacityAnimate(10,boxImg[boxIndex],0.5)
}
function boxClick(){
  fightDetailCnt.style.display='block';
  var boxIndex=this.getAttribute('boxIndex');
  percentAnimate(100,fightNavCnt,50);
  locationAnimate(detailItem[boxIndex],0,20);
}
fightcloseBtn.onclick=function(){
  fightDetailCnt.style.display='none';
  for(var i=0;i<detailItem.length;i++){
    detailItem[i].style.left='100%';
  }
}

for(var i=0;i<tabBtn.length;i++){
  tabBtn[i].onclick=tabClick;
  tabBtn[i].setAttribute('tabIndex',i);
}
function tabClick(){
  var tabIndex=this.getAttribute('tabIndex');
  fightAnimate(slideBG,tabIndex*100,4);
  for(var i=0;i<detailItem.length;i++){
    detailItem[i].style.left='100%';
  }
  locationAnimate(detailItem[tabIndex],0,20);
  for(var i=0;i<tabBtn.length;i++){
    tabBtn[i].className=tabBtn[i].className.replace(' active','none')
  }
  tabBtn[tabIndex].className=tabBtn[tabIndex].className.replace('none',' active')
}

for(var i=0;i<lis.length;i++){
  lis[i].onmouseenter=liEnter;
  lis[i].onmouseleave=liLeave;
  lis[i].setAttribute('liIndex',i);
}
function liEnter(){
  var liIndex=this.getAttribute('liIndex');
  indexGlobal=liIndex;
  for(var i=0;i<item.length;i++){
    opacityAnimate(1,item[i],0);
    opacityAnimate(1,detailTitle[i],0);
    opacityAnimate(0,imgHover[i],1);
  }
  opacityAnimate(0,item[liIndex],1);
  opacityAnimate(0,detailTitle[liIndex],1);
  opacityAnimate(1,imgHover[liIndex],0);
  clearInterval(fightTimer);
}
function liLeave(){
  var liIndex=this.getAttribute('liIndex');
  indexGlobal=liIndex;
  fightTimer=setInterval(function(){
    autoplayImg();
  },4000);
}
fightTimer=setInterval(function(){
  autoplayImg();
},4000)
function autoplayImg(){
  if(indexGlobal==3){
    indexGlobal=-1;
  }
  indexGlobal++
  for(var i=0;i<item.length;i++){
    opacityAnimate(1,item[i],0);
    opacityAnimate(1,detailTitle[i],0);
    opacityAnimate(0,imgHover[i],1);
  }
  opacityAnimate(0,item[indexGlobal],1);
  opacityAnimate(0,detailTitle[indexGlobal],1);
  opacityAnimate(1,imgHover[indexGlobal],0);
}