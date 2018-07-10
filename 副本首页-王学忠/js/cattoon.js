var lila = document.getElementById('lila')
var lilb = document.getElementById('lilb')
var lilc = document.getElementById('lilc')
var lild = document.getElementById('lild')
var lile = document.getElementById('lile')
var lilf = document.getElementById('lilf')
var lilg = document.getElementById('lilg')
var lilh = document.getElementById('lilh')
var lili = document.getElementById('lili')
var sesd = document.getElementById('sesd')
var jixie = document.getElementById('jixie')
var changcheng = document.getElementById('changcheng')
var jianzhong = document.getElementById('jianzhong')
var lingxu = document.getElementById('lingxu')
var longyan = document.getElementById('longyan')
var miwu = document.getElementById('miwu')
var qingling = document.getElementById('qingling')
var shenci = document.getElementById('shenci')
var ground = document.getElementById('middle_box')
var ground_bg = document.getElementById('ground_bg')
var fuben=document.getElementById('fuben_bg')
var bottom=document.getElementById('bottom')
var lja=bottom.getElementsByTagName('a')[0]
var background_fire=document.getElementById('background_fire')
var  nav=document.getElementById('nav');
var  lilil=nav.getElementsByTagName('li')
var li =nav.getElementsByTagName('a')
var fuwen=document.getElementById('fuwen')
var bg=document.getElementById('middle_box');
var c=document.getElementById('bfbox');
var h=document.getElementById('bluefire');

var m_bg=document.getElementById('m_bg');
var m_click=document.getElementById('m_click');
var m_drop=document.getElementById('m_drop');
var m_hwsc=document.getElementById('m_hwsc');
var m_jixie=document.getElementById('m_jixie');
var m_jz=document.getElementById('m_jz');
var m_mh=document.getElementById('m_mh');
var m_music=document.getElementById('m_music');
var m_sw=document.getElementById('m_sw');
var m_sx=document.getElementById('m_sx');

var vara=0;
var opi=1;
var timeid;





//十二神殿

bg.onmouseenter=function(){
  h.style.display='block'
  mpy(h,-576.3,80)
}
bg.onmouseleave=function(){
    h.style.display='none';
}
//火光
function varbig(){
  if(timeid){
    clearInterval(timeid)
  }
  timeid=setInterval(function(){
    vara+=50;
    opi-=0.03;
    background_fire.style.backgroundSize=vara+'%';
    background_fire.style.opacity=opi;
    console.log(opi)
    if(opi<=0){
      //background_fire.style.backgroundSize=0;
      //background_fire.style.opacity=1;
      vara=0;
      opi=1;
      clearInterval(timeid)
    }

  },100)

}

function ab(){
  mpyonec(fuwen,-609,50)
}
