//简单动画封装的函数(支持,从左到右和从右到左)
function animate(final, step, ele, fun) {

    //5. 每一次点击的时候,为了避免添加多个定时器,所以先清除一下
    if (ele.timeid) {
        clearInterval(ele.timeid);
    }

    //3. 设置定时器,让div每隔一段时间往前走一点
    ele.timeid = setInterval(function () {
        //在定时器当中,每一次都要获取一下当前的位置
        var current = ele.offsetLeft;

        //4. 让div在目标位置停下来
        //4.1 判断是否到目标位置
        // 计算目标和当前位置的差值,如果差值小于步进,那么证明还有一步就到目标位置了
        // current - final
        //把差值转换成决定值
        // Math.abs(current - final)

        if (Math.abs(current - final) < step) {
            clearInterval(ele.timeid);
            ele.style.left = final + 'px';
            //判断有没有传入函数,如果没有传入就不调用
            if (fun) {
                fun();
            }

            return;
        }


        // 如何判断是从左到右,还是从右往左
        if (current - final > 0) {
            var target = current - step;
        } else {
            var target = current + step;
        }

        ele.style.left = target + 'px';

    }, 15);

}