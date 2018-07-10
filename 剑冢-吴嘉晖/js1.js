/**
 * Created by 吴然 on 2018/5/9.
 */

//居中文字渐出效果
//var hei = 0;
//var hei2 = 0;
//var hei3 = 0;

//var tiid1 = setInterval(function(){
//  var page_banner_line1 = document.getElementById('page_banner_line1');
//  hei = hei + 5;
//  page_banner_line1.style.height = hei + 'px';
//  if(hei >= 560){
//    page_banner_line1.style.height = '560px';
//  clearInterval(tiid1);
//
//    var tiid2 = setInterval(function () {
//      var page_banner_line2 = document.getElementById('page_banner_line2');
//      hei2 = hei2 + 5;
//      page_banner_line2.style.height = hei2 + 'px';
//      if (hei2 >= 560) {
//        page_banner_line2.style.height = '560px';
//        clearInterval(tiid2);
//
//        var tiid3 = setInterval(function () {
//          var page_banner_line3 = document.getElementById('page_banner_line3');
//          hei3 = hei3 + 5;
//          page_banner_line3.style.height = hei3 + 'px';
//          if (hei3 >= 560) {
//            page_banner_line3.style.height = '560px';
//            clearInterval(tiid3);
//          }
//        }, 50)
//
//      }
//    }, 50)
//
//  }
//
//},50)

function txt_time() {
  var hei = 0;
  var i = 1;
  var tiid = 'tiid' + i;
  tiid = setInterval(function () {
    var page_banner_line = document.getElementById('page_banner_line' + i);
    page_banner_line.style.height = '0px';
    hei += 5;
    page_banner_line.style.height = hei + 'px';
    if (hei >= 540) {
      page_banner_line.style.height = '540px';
      i++;
      hei = 0;
      if (i == 4) {
        clearInterval(tiid);
      }
    }
  }, 50)
}
setTimeout(function(){txt_time();},5000)

//底部入口鼠标移入发光效果
var page_bottom1 = document.getElementById('page_bottom1');
var pb1;
page_bottom1.onmouseenter = function () {
  var y = 114;
  pb1 = setInterval(function () {
    y += 114;
    page_bottom1.style.backgroundPosition = '0 -' + y + 'px';
    if (y >= 798) {
      page_bottom1.style.backgroundPosition = '0 -684px';
      clearInterval(pb1);
    }
  }, 50)
}
//底部入口鼠标移出去除发光效果
page_bottom1.onmouseleave = function () {
  clearInterval(pb1);
  page_bottom1.style.backgroundPosition = '0 0';
}

//底部入口 拖拽效果
var page = document.getElementById('page');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var page5 = document.getElementById('page5');
var page_audio = page.getElementsByTagName('audio')[0];
var page_audio2 = page2.getElementsByTagName('audio')[0];
page_bottom1.onmousedown = function (e) {
  var x = e.clientX;
  document.onmousemove = function (r) {
    var x1 = r.clientX;
    if (x1 > x) {
      var x1 = r.clientX;
      var x2 = x1 - x;
      page_bottom1.style.left = x2 + 'px';

      //拖拽到头抬起 切换页面
      if (x2 >= 292) {
        page_bottom1.style.left = '292px';
        page_bottom1.style.backgroundPosition = '0 -684px';
        document.onmouseup = function () {
          page.style.display = 'none';
          page_audio.pause();
          page2.style.display = 'block';
          page_audio2.play();
        }
      }
    }
  }
}
//拖拽没到头抬起 图片回去
document.onmouseup = function () {
  document.onmousemove = null;
  var ting = setInterval(function () {
    var shu = parseInt(page_bottom1.style.left);
    shu -= 2;
    page_bottom1.style.left = shu + 'px';
    if (shu <= 0) {
      page_bottom1.style.left = '0';
      clearInterval(ting);
    }
  }, 5)
}


//底部入口 动图效果
var page_bottom2 = document.getElementById('page_bottom2');
var shu = 0;
var opac = 1;
page_bottom2.style.left
setInterval(function () {
  shu += 3;
  page_bottom2.style.left = shu + 'px';
  opac = opac - 0.01;
  page_bottom2.style.opacity = opac;

  if (shu >= 292) {
    page_bottom2.style.left = '0';
    page_bottom2.style.opacity = 1;
    shu = 0;
    opac = 1;
  }
}, 30)


//第二页
var page2_entry1 = document.getElementById('page2_entry1');
var page2_entry2 = document.getElementById('page2_entry2');
var page2_entry3 = document.getElementById('page2_entry3');
var page2_entry_txt1 = document.getElementById('page2_entry_txt1');
var page2_entry_txt2 = document.getElementById('page2_entry_txt2');
var page2_entry_txt3 = document.getElementById('page2_entry_txt3');
var page2_entry_txt4 = document.getElementById('page2_entry_txt4');
var page2_entry_txt5 = document.getElementById('page2_entry_txt5');
var page2_entry_txt6 = document.getElementById('page2_entry_txt6');
var page3_bg1 = document.getElementById('page3_bg1');
var page3_bg2 = document.getElementById('page3_bg2');
var page3_bg3 = document.getElementById('page3_bg3');
var page3_bg4 = document.getElementById('page3_bg4');
var page3_bg5 = document.getElementById('page3_bg5');

//移入li文字打开效果
//var entry;
function page2_entry(p, l) {
  clearInterval(p.entry1);

  var shu1 = parseInt(p.style.left);
  var st_shu1 = shu1.toString();
  if (st_shu1 == 'NaN') {
    shu1 = 0;
  }
  p.entry = setInterval(function () {

    p.style.left = shu1 + 'px';
    l.style.left = (-shu1) + 'px';
    shu1 += 1;
    if (shu1 >= 30) {
      //page2_entry_txt1.style.left = '30px';
      //page2_entry_txt2.style.left = '-30px';
      shu1 = 30;
      clearInterval(p.entry);
    }
  }, 5)
}
//移入入口一调用
page2_entry1.onmouseenter = function () {
  page2_entry(page2_entry_txt1, page2_entry_txt2);
}

//入口一穿越
page2_entry1.onclick = function () {
  page2.style.display = 'none';
  page3.style.display = 'block';
  page3_bg1.style.display = 'block';
  page5.style.display = 'none';
  page4.style.display = 'none';

}
//移入入口二调用
page2_entry2.onmouseenter = function () {
  page2_entry(page2_entry_txt3, page2_entry_txt4);
}
//入口二穿越
var page4_audio = document.getElementById('page4_audio');
page2_entry2.onclick = function () {
  page3.style.display = 'none';
  page4.style.display = 'block';
  page5.style.display = 'none';
  page4_audio.play();
}
//移入入口三调用
page2_entry3.onmouseenter = function () {
  page2_entry(page2_entry_txt5, page2_entry_txt6);
}
//入口三穿越
page2_entry3.onclick = function () {
  page4.style.display = 'none';
  page5.style.display = 'block';
  page5_bg1.play();
}

//移出li清除打开效果
//var entry1;
function page2_entry_r(o, k) {
  clearInterval(o.entry);

  var shu1 = parseInt(o.style.left);
  o.entry1 = setInterval(function () {

    o.style.left = shu1 + 'px';
    k.style.left = (-shu1) + 'px'
    shu1 -= 1;
    if (shu1 <= 0) {
      //page2_entry_txt1.style.left = '0';
      //page2_entry_txt2.style.left = '0';
      //shu1 = 0;
      clearInterval(o.entry1);
    }
  }, 5)
}
//移出入口一调用
page2_entry1.onmouseleave = function () {
  page2_entry_r(page2_entry_txt1, page2_entry_txt2);
}
//移出入口二调用
page2_entry2.onmouseleave = function () {
  page2_entry_r(page2_entry_txt3, page2_entry_txt4);
}
//移出入口三调用
page2_entry3.onmouseleave = function () {
  page2_entry_r(page2_entry_txt5, page2_entry_txt6);
}


//移入li文字打开效果
//var entry;
//var shu1 = 0;
//page2_entry1.onmouseenter = function(){
//
//  entry = setInterval(function(){
//
//    page2_entry_txt1.style.left = shu1 +'px';
//    page2_entry_txt2.style.left = (-shu1) +'px';
//    shu1 += 1;
//    if (shu1 >= 30){
//      //page2_entry_txt1.style.left = '30px';
//      //page2_entry_txt2.style.left = '-30px';
//      shu1 = 30;
//      clearInterval(entry);
//    }
//  },20)
//}
//移出li清除打开效果
//page2_entry1.onmouseleave = function(){
//  clearInterval(entry);
//
//  //var shu1 = 30;
//  var entry1 = setInterval(function(){
//
//    page2_entry_txt1.style.left = shu1 +'px';
//    page2_entry_txt2.style.left = (-shu1) +'px'
//    shu1 -= 1;
//    if (shu1 <= 0){
//      //page2_entry_txt1.style.left = '0';
//      //page2_entry_txt2.style.left = '0';
//      shu1 = 0;
//      clearInterval(entry1);
//    }
//  },20)
//}
//
////移入li文字打开效果
//var entry2;
//var shu2 = 0;
//page2_entry2.onmouseenter = function(){
//
//  entry2 = setInterval(function(){
//
//    page2_entry_txt3.style.left = shu2 +'px';
//    page2_entry_txt4.style.left = (-shu2) +'px';
//    shu2 += 1;
//    if (shu2 >= 30){
//      //page2_entry_txt1.style.left = '30px';
//      //page2_entry_txt2.style.left = '-30px';
//      shu2 = 30;
//      clearInterval(entry2);
//    }
//  },20)
//}
////移出li清除打开效果
//page2_entry2.onmouseleave = function(){
//  clearInterval(entry2);
//
//  //var shu2 = 30;
//  var entry1 = setInterval(function(){
//
//    page2_entry_txt3.style.left = shu2 +'px';
//    page2_entry_txt4.style.left = (-shu2) +'px'
//    shu2 -= 1;
//    if (shu2 <= 0){
//      //page2_entry_txt1.style.left = '0';
//      //page2_entry_txt2.style.left = '0';
//      shu2 = 0;
//      clearInterval(entry1);
//    }
//  },20)
//}
//
////移入li文字打开效果
//var entry3;
//var shu3 = 0;
//page2_entry3.onmouseenter = function(){
//
//  entry3 = setInterval(function(){
//
//    page2_entry_txt5.style.left = shu3 +'px';
//    page2_entry_txt6.style.left = (-shu3) +'px';
//    shu3 += 1;
//    if (shu3 >= 30){
//      //page2_entry_txt1.style.left = '30px';
//      //page2_entry_txt2.style.left = '-30px';
//      shu3 = 30;
//      clearInterval(entry3);
//    }
//  },20)
//}
////移出li清除打开效果
//page2_entry3.onmouseleave = function(){
//  clearInterval(entry3);
//
//  //var shu3 = 30;
//  var entry1 = setInterval(function(){
//
//    page2_entry_txt5.style.left = shu3 +'px';
//    page2_entry_txt6.style.left = (-shu3) +'px'
//    shu3 -= 1;
//    if (shu3 <= 0){
//      //page2_entry_txt1.style.left = '0';
//      //page2_entry_txt2.style.left = '0';
//      shu3 = 0;
//      clearInterval(entry1);
//    }
//  },20)
//}


//第三页 右侧切换
var page3_right = document.getElementById('page3_right');
var page3_right_div = page3_right.getElementsByTagName('div');
var page3_title = document.getElementById('page3_title');
var page3_nth_txt = document.getElementById('page3_nth_txt');

function page3_right_change(u, m, k) {
  page3_bg1.style.display = 'none';
  page3_bg2.style.display = 'none';
  page3_bg3.style.display = 'none';
  page3_bg4.style.display = 'none';
  page3_bg5.style.display = 'none';
  u.style.display = 'block';
  page3_title.style.backgroundImage = 'url(img/' + m + '.png)';
  page3_nth_txt.innerText = k;
}

page3_right_div[0].onclick = function () {
  page3_right_change(page3_bg1, 'monstersHeading01', 1)
};
page3_right_div[1].onclick = function () {
  page3_right_change(page3_bg2, 'monstersHeading02', 2)
};
page3_right_div[2].onclick = function () {
  page3_right_change(page3_bg3, 'monstersHeading03', 3)
};
page3_right_div[3].onclick = function () {
  page3_right_change(page3_bg4, 'monstersHeading04', 4)
};
page3_right_div[4].onclick = function () {
  page3_right_change(page3_bg5, 'monstersHeading05', 5)
};


//第五页 场景
//左侧点击切换场景
var page5_map_p1 = document.getElementById("page5_map_p1");
var page5_title = document.getElementById("page5_title");
var page5_map_p2 = document.getElementById("page5_map_p2");
var page5_map_p3 = document.getElementById("page5_map_p3");
var page5_map_p4 = document.getElementById("page5_map_p4");
var page5_map_p5 = document.getElementById("page5_map_p5");
var page5_bg1 = document.getElementById("page5_bg1");
var page5_bg2 = document.getElementById("page5_bg2");
var page5_bg3 = document.getElementById("page5_bg3");
var page5_bg4 = document.getElementById("page5_bg4");
var page5_bg5 = document.getElementById("page5_bg5");

function page5Change(i, p) {
  page5_bg1.style.display = 'none';
  page5_bg2.style.display = 'none';
  page5_bg3.style.display = 'none';
  page5_bg4.style.display = 'none';
  page5_bg5.style.display = 'none';
  i.style.display = 'block';
  i.play();
  page5_title.style.backgroundImage = 'url(img/' + p + '.png)';
}
page5_map_p1.onclick = function () {
  page5Change(page5_bg2, 'mapHeadingLg2')
};
page5_map_p2.onclick = function () {
  page5Change(page5_bg1, 'mapHeadingLg1')
};
page5_map_p3.onclick = function () {
  page5Change(page5_bg3, 'mapHeadingLg3')
};
page5_map_p4.onclick = function () {
  page5Change(page5_bg5, 'mapHeadingLg5')
};
page5_map_p5.onclick = function () {
  page5Change(page5_bg4, 'mapHeadingLg4')
};

