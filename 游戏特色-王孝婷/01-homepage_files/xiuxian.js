/**
 * Created by wangxiaoting on 2018/5/12.
 */
//window.onload=function(){
   var xiuxianBg=document.getElementById('xiuxianBg');
   var btnList=document.querySelector('.btnList');
   var btn=btnList.querySelectorAll('.btn');
   var links=btnList.getElementsByTagName('a');
  //点击按钮切换背景图片
  for(var i=0;i<btn.length;i++){
    btn[i].onclick=btnClick;
    btn[i].setAttribute('index',i+1);
    btn[i].setAttribute('aindex',i);
  }
  function btnClick(){
    var index=this.getAttribute('index');
    var aindex=this.getAttribute('aindex');
    xiuxianBg.className='bg bg-'+index+'';
    for(var i=0;i<links.length;i++){
      links[i].className=links[i].className.replace('active','');
    }
    links[aindex].className=links[aindex].className.concat(' active');
  }
//}