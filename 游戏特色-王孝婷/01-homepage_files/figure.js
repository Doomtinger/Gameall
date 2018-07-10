/**
 * Created by wangxiaoting on 2018/5/14.
 */
var factionImg=document.getElementById('factionImg');
var circle=document.querySelector('.circle');
var factionLinks=circle.getElementsByTagName('a');
for(var i=0;i<factionLinks.length;i++){
  factionLinks[i].onclick=aClick;
  factionLinks[i].setAttribute('index',i+1);
  factionLinks[i].setAttribute('aindex',i);
}
function aClick(){
  var index=this.getAttribute('index');
  var aindex=this.getAttribute('aindex');
  factionImg.className='img img-'+index+'';
  for(var i=0;i<factionLinks.length;i++){
    factionLinks[i].className=factionLinks[i].className.replace('active','');
  }
  factionLinks[aindex].className=factionLinks[aindex].className.concat(' active');
}