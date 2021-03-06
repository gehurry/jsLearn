/**
 * Created by gehurry on 16/10/7.
 */
//运动框架，提取元素样式
function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }

}
//运动框架
function charge(obj,json,fnEnd){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        for(var attr in json) {
            var bStop = true;
            var cur = 0;
            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
                //四舍五入，保留整数的部分
            } else {
                cur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - cur) / 4;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(cur != json[attr])
            {
                bStop = false;
            }
            if (attr == 'opacity') {//判断是否改变透明度
                cur += speed;
                obj.style.filter = 'alpha(opcity:' + cur + ')';
                obj.style.opacity = cur / 100;
            } else {
                obj.style[attr] = cur + speed + 'px';
            }
        }
        if(bStop)
        {
            clearInterval(obj.timer);
            if(fnEnd){
                fnEnd();
            }
        }
    },30);

}
