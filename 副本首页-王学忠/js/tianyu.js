
function mpy(ele,step,time,fn){
if(ele.timeid){
  clearInterval(ele.timeid);
}

 ele.timeid=setInterval(nmp,time);
  function nmp(){
    var oldSplac=ele.offsetTop;
    ele.style.position='absolute';
    ele.style.top=oldSplac+step+'px';
    if(Math.abs(parseInt(ele.style.top))>=ele.offsetHeight){
      ele.style.top='0px';
    }
    if((typeof fn)==='function'){
      fn();
    }else {

    }
  }
}


function mpx(ele,step,time,fn){
  if(ele.timeid){
    clearInterval(ele.timeid);
  }
  ele.timeid=setInterval(nmp,time);
  function nmp(){
    var oldSplac=ele.offsetLeft;
    ele.style.position='absolute';
    ele.style.left=oldSplac+step+'px';
    if(Math.abs(parseInt(ele.style.left))>=ele.offsetWidth){
      ele.style.left='0px';
    }
    if((typeof fn)==='function'){
      fn();
    }else {

    }
  }
}



function mpyonec(ele,step,time,fn){
  if(ele.timeid){
    clearInterval(ele.timeid);
  }

  ele.timeid=setInterval(nmp,time);
  function nmp(){
    var oldSplac=ele.offsetTop;
    ele.style.position='absolute';
    ele.style.top=oldSplac+step+'px';
    if(Math.abs(parseInt(ele.style.top))>=ele.offsetHeight){
      ele.style.top=110+'px'
      clearInterval(ele.timeid)
    }

  }
}
