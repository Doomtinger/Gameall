/**
 * Created by wangxiaoting on 2018/5/13.
 */
//window.onload=function() {
  var navNameCnt = document.querySelector('.navNameCnt');
  var navItem = navNameCnt.getElementsByTagName('span');
  var mainItem=document.querySelectorAll('.m-page');
  var lineCnt=document.querySelector('.lineCnt');
  var lines=lineCnt.children;
console.log(lines);
//给span注册点击事件
var count=0;  //用以记录全局索引值
for(var i=0; i<navItem.length; i++) {
  navItem[i].setAttribute('navIndex',i);  //记录全局索引;
  navItem[i].onclick =navClick;
}
function navClick() {
  var navIndex=this.getAttribute('navIndex');
  //var that = this;  //缓存this指针
  var targetPage = mainItem[navIndex];//缓存要操作的页
  var currentPage = mainItem[count];//缓存当前页

  targetPage.style.display = "block";//设置当前操作按钮对应的页面显示
  //当重复点击上一个操作时，退出函数，不执行
  if (navIndex == count) return;
  //点击之后清除line的样式
  for(var i=count*10;i<(count*10+9);i++){
    animate(lines[i], {width: 10});
    lines[i].className=lines[i].className.replace('red','yellow');
  }
  if (navIndex > count) {
    targetPage.style.top = 1000 + "px";  //抽回页面到下方 方便向上滚动
    animate(currentPage, {top: -1104, opacity: 0}); //当前页滚动到上方
    animate(targetPage, {top: 0, opacity: 1}); //目标页面抽到当前视口

  } else {
    targetPage.style.top = -1104 + "px";  //抽回页面到上方 方便向下滚动
    animate(currentPage, {top: 1104, opacity: 0}); //当前页滚动到上方
    animate(targetPage, {top: 0, opacity: 1}); //目标页面抽到当前视口
  }
    var num=0;
  for(var i=navIndex*10;i<(navIndex*10+9);i++){
    var target=(++num)*10;
    if(num>=6){
      target=(10-num)*10;
    }
    animate(lines[i], {width: target});
    lines[i].className=lines[i].className.replace('yellow','red');
  }

  //更新全局索引值
  count = navIndex;
}