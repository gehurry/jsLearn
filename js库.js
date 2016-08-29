/**
 * Created by gehurry on 16/8/24.
 */

//在所有浏览器下都兼容写法。
function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        //IE下
        return(obj.currentStyle[name]);
    }
    else{
        //chrome firefox
        return(getComputedStyle(obj,false)[name]);
    }

}
