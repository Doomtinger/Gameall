/**
 * Created by wangxiaoting on 2018/5/14.
 */
var role=document.querySelectorAll('.role');
var lineTxt=document.querySelectorAll('.lineTxt');
var roleTxt=document.querySelectorAll('.roleTxt');
for(var i=0;i<role.length;i++){
  role[i].onmouseenter=roleEnter;
  role[i].onmouseleave=roleLeave;
  role[i].setAttribute('roleIndex',i);

}
//让文字缓慢移动下来,考虑封装一个函数,每次都要写一遍好烦呀
//还差一个别的都变成暗色
function roleEnter(){
  var roleIndex=this.getAttribute('roleIndex');
  TopAnimate(roleTxt[roleIndex],10,10)
  lineTxt[roleIndex].style.opacity = 1;
  roleTxt[roleIndex].style.opacity = 1;
  for(var i=0;i<role.length;i++){
    if(i==roleIndex){
      i++;
    }
    opacityAnimate(10,role[i],0.4);
    //role[i].style.opacity=0.4;
  }
}

function roleLeave(){
  var roleIndex=this.getAttribute('roleIndex');
  TopAnimate(roleTxt[roleIndex],-100,10)
  lineTxt[roleIndex].style.opacity = 0;
  roleTxt[roleIndex].style.opacity = 0;
  for(var i=0;i<role.length;i++){
    opacityAnimate(4,role[i],1);
    //role[i].style.opacity=1;
  }
}

