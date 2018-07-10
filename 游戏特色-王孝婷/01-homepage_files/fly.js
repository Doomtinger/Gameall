/**
 * Created by wangxiaoting on 2018/5/11.
 */
//window.onload=function(){
  var OneLinks = new Array(43);//图片数组
  //给图片数组赋值，即变换时的图像值
  OneLinks[0] = "images/fly/1.jpg";
  OneLinks[1] = "images/fly/2.jpg";
  OneLinks[2] = "images/fly/3.jpg";
  OneLinks[3] = "images/fly/4.jpg";
  OneLinks[4] = "images/fly/5.jpg";
  OneLinks[5] = "images/fly/6.jpg";
  OneLinks[6] = "images/fly/7.jpg";
  OneLinks[7] = "images/fly/8.jpg";
  OneLinks[8] = "images/fly/9.jpg";
  OneLinks[9] = "images/fly/10.jpg";
  OneLinks[10] = "images/fly/11.jpg";
  OneLinks[11] = "images/fly/12.jpg";
  OneLinks[12] = "images/fly/13.jpg";
  OneLinks[13] = "images/fly/14.jpg";
  OneLinks[14] = "images/fly/15.jpg";
  OneLinks[15] = "images/fly/16.jpg";
  OneLinks[16] = "images/fly/17.jpg";
  OneLinks[17] = "images/fly/18.jpg";
  OneLinks[18] = "images/fly/19.jpg";
  OneLinks[19] = "images/fly/20.jpg";
  OneLinks[20] = "images/fly/21.jpg";
  OneLinks[21] = "images/fly/22.jpg";
  OneLinks[22] = "images/fly/23.jpg";
  OneLinks[23] = "images/fly/24.jpg";
  OneLinks[24] = "images/fly/25.jpg";
  OneLinks[25] = "images/fly/26.jpg";
  OneLinks[26] = "images/fly/27.jpg";
  OneLinks[27] = "images/fly/28.jpg";
  OneLinks[28] = "images/fly/29.jpg";
  OneLinks[29] = "images/fly/30.jpg";
  OneLinks[30] = "images/fly/31.jpg";
  OneLinks[31] = "images/fly/32.jpg";
  OneLinks[32] = "images/fly/33.jpg";
  OneLinks[33] = "images/fly/34.jpg";
  OneLinks[34] = "images/fly/35.jpg";
  OneLinks[35] = "images/fly/36.jpg";
  OneLinks[36] = "images/fly/37.jpg";
  OneLinks[37] = "images/fly/38.jpg";
  OneLinks[38] = "images/fly/39.jpg";
  OneLinks[39] = "images/fly/40.jpg";
  OneLinks[40] = "images/fly/41.jpg";
  OneLinks[41] = "images/fly/42.jpg";
  OneLinks[42] = "images/fly/43.jpg";

  var public=document.getElementById('public');
  var flyList=document.getElementById('flyList');
  var flyMouseCnt=document.getElementById('flyMouseCnt');
  var flyTitleCnt=document.querySelector('.flyTitleCnt')
  var leftBtn=document.querySelector('.leftBtn');
  var rightBtn=document.querySelector('.rightBtn');
  var displayCnt=document.querySelector('.displayCnt');
  var btn1=document.querySelector('.btn-1');
  var btn2=document.querySelector('.btn-2');
  var wingCnt=document.querySelector('.wingCnt');
  var flycloseBtn=document.getElementById('flycloseBtn');
  var smallwing=document.querySelector('.small');
  var big=document.querySelector('.big');
  var winglis=smallwing.children;
  var bigwings=big.children;
  var swNum=document.querySelectorAll('.swNum');
  var swLine=document.querySelectorAll('.swLine');
  var timer=null;
  var num=0;
  //给document注册键盘按下事件
  document.addEventListener('keydown',function(e){
    //console.log(e.keyCode);
    //如果按下空格键执行下面代码
    if(e.keyCode==32){
      //用定时器来控制图片的更换速度
      timer = setInterval(function(){
          num++;
          flyList.src=OneLinks[num];
          if(num==42){
            //当num为42的时候让显示在第一个页面的文字和按钮消失
            flyTitleCnt.style.display='none';
            //让展示飞行系统的按钮展示
            leftBtn.style.display='block';
            rightBtn.style.display='block';
            clearTimeout(timer)
          }},100);}
  },false);
  //在第二个页面点击右边按钮:点击出来翅膀展示页面
  btn2.onmousedown=function(){
    wingCnt.style.display='block';
    flycloseBtn.style.display='block';
    displayCnt.className=displayCnt.className.replace('white','black');
    btn1.style.display='none';
    btn2.style.display='none';
    public.className=public.className.replace('blockPub','nonePub');

  }
  //点击右上角的关闭按钮关闭页面
flycloseBtn.onmousedown=function(){
    wingCnt.style.display='none';
    flycloseBtn.style.display='none';
    displayCnt.className=displayCnt.className.replace('black','white');
    btn1.style.display='block';
    btn2.style.display='block';
    public.className=public.className.replace('nonePub','blockPub');

  }

  //翅膀展示界面点击下边小翅膀页面显示大翅膀
  for(var i=0;i<winglis.length;i++){
    winglis[i].onmouseenter=wingClick;
    winglis[i].setAttribute('index',i);
  }
  function wingClick(){
    var index=this.getAttribute('index');
    for(var i=0;i<winglis.length;i++) {
      bigwings[i].style.opacity = '0';
      swNum[i].style.opacity = '0.5';
      swLine[i].style.opacity='0';

    }
    bigwings[index].style.opacity = '1';
    swNum[index].style.opacity='1';
    swLine[index].style.opacity='1';

  }
  //飞行结束啦
//}