/**
 * Created by wangxiaoting on 2018/5/15.
 */
//getComputedStyle是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])，只读。
//
//getComputedStyle() gives the final used values of all the CSS properties of an element.
function getStyle(tag, styleName) {
  if (typeof getComputedStyle == "function") {
    //说明支持getComputedStyle,直接使用即可
    return getComputedStyle(tag, null)[styleName];
  } else {
    //说明支持currentStyle
    return tag.currentStyle[styleName];
  }
}
function animate(tag, obj, fn) {
  //第一步是在函数内分析参数传递过程
  clearInterval(tag.timer);
  tag.timer = setInterval(function () {
    //假设成立法:假设当前这次定时器可以清除
    var flag = true;
    //需要同时修改多个属性
    //对对象中的每一个属性进行操作
    for (var k in obj) {
      if (k == "opacity") {
        //k - 属性名 - 字符串形式 - attr
        //obj[k] - 属性值 - target
        var target = obj[k] * 100;
        //获取结果可能是一个小数
        var leader = getStyle(tag, k) * 100 || 0;
        //缓动运动公式
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        //设置的时候
        tag.style[k] = leader / 100;
      } else if (k == "zIndex") {
        //直接设置层级，不需要渐变
        tag.style.zIndex = obj[k];
      } else {
        var target = obj[k];
        var leader = parseInt(getStyle(tag, k)) || 0;
        //缓动运动公式
        var step = (target - leader) / 3;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        //设置的时候
        tag.style[k] = leader + "px";
      }

      //检测，当前这个属性是否到达了指定位置
      if (leader != target) {
        //阻止清除定时器
        flag = false;
      }
    }
    //我们需要保证obj中每一个obj都运动到位置
    if (flag) {
      clearInterval(tag.timer);
      fn && fn();
      //如果没传undefined
    }
  }, 20);
}
//第一个参数:要操作的元素
//第二个参数:目标位置
//第三个参数:步数
//第四个参数:达到目标之后调用的函数
function locationAnimate(element,target,step,fn){
  //防止注册多个定时器,把timer存储到元素上,防止预解析
  if(element.timer){
    clearInterval(element.timer);
  }
  //1.让元素缓慢移动
  element.timer=setInterval(function(){
    //2.获取当前位置
    var current=element.offsetLeft;
    //判断从左往右,还是从右往左
    if(target-current>0){
      var moveLeft=current+step;

    }else{
      var moveLeft=current-step;
    }
    element.style.left=moveLeft+'px';
    //如何判断是否到达目标位置
    //
    if(Math.abs(target-moveLeft)<step){
      element.style.left=target+'px';
      clearInterval(element.timer);
      //如果fn被赋值就调用,不赋值就不调用
      if((typeof fn)==='function') {
        fn();
      }
    }
  },10)
}
function fightAnimate(element,target,step,fn){
  //防止注册多个定时器,把timer存储到元素上,防止预解析
  if(element.timer){
    clearInterval(element.timer);
  }
  //1.让元素缓慢移动
  element.timer=setInterval(function(){
    //2.获取当前位置
    var current=element.offsetLeft;
    //判断从左往右,还是从右往左
    if(target-current>0){
      var moveLeft=current+step;

    }else{
      var moveLeft=current-step;
    }
    element.style.left=moveLeft+'px';
    //如何判断是否到达目标位置
    //
    if(Math.abs(target-moveLeft)<step){
      element.style.left=target+3+'px';
      clearInterval(element.timer);
      //如果fn被赋值就调用,不赋值就不调用
      if((typeof fn)==='function') {
        fn();
      }
    }
  },10)
}

function opacityAnimate(num,ele,count){
  if(ele.timer){
    clearInterval(ele.timer)
  }
  ele.timer = setInterval(function () {
    if((num/10)>=count){
      var opacityNUm = num--/ 10;
    }else{
      var opacityNUm=num++/10;
    }
    ele.style.opacity = opacityNUm;
    if (Math.abs(opacityNUm - count)<0.1) {
      ele.style.opacity=count;
      clearInterval(ele.timer);
    }
  }, 20)
}

function percentAnimate(num,ele,count){
  if(ele.timer){
    clearInterval(ele.timer)
  }
  ele.timer = setInterval(function () {
    if(num>count){
      var percentNum =num--;
    }
    else{
      var percentNum=num++;
    }
    ele.style.left = percentNum+'%';
    if (Math.abs(percentNum - count)<1) {
      ele.style.left=count+'%';
      clearInterval(ele.timer);
    }
  }, 10)
}
function perTopAnimate(num,ele,count){
  if(ele.timer){
    clearInterval(ele.timer)
  }
  ele.timer = setInterval(function () {
    if(num>count){
      var percentNum =num--;
    }
    else{
      var percentNum=num++;
    }
    ele.style.top = percentNum+'%';
    if (Math.abs(percentNum - count)<1) {
      ele.style.top=count+'%';
      clearInterval(ele.timer);
    }
  }, 1)
}
function TopAnimate(element,target,step,fn){
  //防止注册多个定时器,把timer存储到元素上,防止预解析
  if(element.timer){
    clearInterval(element.timer);
  }
  //1.让元素缓慢移动
  element.timer=setInterval(function(){
    //2.获取当前位置
    var current=element.offsetTop;
    if(target-current>0){
      var moveLeft=current+step;

    }else{
      var moveLeft=current-step;
    }
    element.style.top=moveLeft+'px';
    //如何判断是否到达目标位置
    //
    if(Math.abs(target-moveLeft)<step){
      element.style.top=target+'px';
      clearInterval(element.timer);
      //如果fn被赋值就调用,不赋值就不调用
      if((typeof fn)==='function') {
        fn();
      }
    }
  },15)
}