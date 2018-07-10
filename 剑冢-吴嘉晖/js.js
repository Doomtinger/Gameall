/**
 * Created by 吴然 on 2018/5/9.
 */
var audio_con = document.getElementById('audio_con');
audio_con.onclick = function() {

  var audio_line1 = document.getElementById('audio_line1');
  var audio_line2 = document.getElementById('audio_line2');
  var audio_txt = document.getElementById('audio_txt');
  var top_ul = document.getElementById('top_ul');
  audio_line1.style.width = '0';
  audio_line1.style.height = '0';
  audio_line1.style.border = '6px solid #fff';
  audio_line1.style.borderLeft = '12px solid #fff';
  audio_line1.style.background = 'transparent';
  audio_line1.style.borderColor = 'transparent transparent transparent #fff';
  audio_txt.innerText = 'MUSIC OFF';
  top_ul.style.right = '16.5px';
  //audio_line1.style.borderBottom = '0px solid #fff';
  //audio_line1.style.borderRight = '0px solid #fff';

  if (audio_line2.style.display == '' || audio_line2.style.display == 'block') {
    page_audio.pause();
    page_audio2.pause();
    audio_line2.style.display = 'none';
  } else//(audio_line2.style.display == 'none')
  {
    page_audio.play();
    page_audio2.play();
    audio_line2.style.display = 'block';
    audio_txt.innerText = 'MUSIC ON';
    top_ul.style.right = '20px';
    audio_line1.style.width = '2px';
    audio_line1.style.height = '12px';
    audio_line1.style.border = 'none';
    audio_line1.style.background = '#fff';
  }
  //}else{
  //  audio_line2.style.display = 'none';
  //}
}


var nav = document.getElementById('nav');
var lis = nav.getElementsByTagName('li');
for(var j = 0; j < lis.length; j++) {
  lis[j].onmouseenter = function () {
    this.style.background = 'silver';
  }
  lis[j].onmouseleave = function () {
    this.style.background = '';
  }
}

function nav_change(o){
  page2.style.display = 'none';
  page3.style.display = 'none';
  page4.style.display = 'none';
  page5.style.display = 'none';
  o.style.display = 'block';
}
lis[0].onclick = function(){nav_change(page2)};
lis[1].onclick = page2_entry1.onclick;
lis[2].onclick = page2_entry2.onclick;
lis[3].onclick = page2_entry3.onclick;

var top2 = document.getElementById('top2')
top2.onclick = function(){
  document.documentElement.webkitRequestFullScreen();
}

