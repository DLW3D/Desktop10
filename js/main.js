setInterval("fun('banner-word')",1);
function fun(timeID){ 
    var date = new Date();  //创建对象  
    var y = date.getFullYear();     //获取年份  
    var m =date.getMonth()+1;   //获取月份  返回0-11  
    var d = date.getDate(); // 获取日  
    var w = date.getDay();   //获取星期几  返回0-6   (0=星期天) 
    var ww = ' 星期'+'日一二三四五六'.charAt(new Date().getDay()) ;//星期几
    var h = date.getHours();  //时
    var minute = date.getMinutes()  //分
    var s = date.getSeconds(); //秒
    var sss = date.getMilliseconds() ; //毫秒
    if(m<10){
        m = "0"+m;
    }
    if(d<10){
        d = "0"+d;
    }
    if(h<10){
        h = "0"+h;
    }
    
    if(minute<10){
        minute = "0"+minute;
    }
    
    if(s<10){
        s = "0"+s;
    }
    
    if(sss<10){
        sss = "00"+sss;
    }else if(sss<100){
        sss = "0"+sss;
    }
    
    time =  y+"-"+m+"-"+d+" "+h+":"+minute+":"+s+"."+sss
    $("#"+timeID).text("BPX so-terminal " + time);
}

var blocks;
$(document).ready(function(){
    // #server .block状态初始化
    blocks = $("#server .box>*");
    blocks.each(function(index){
        $(this).css("background-color", "#06717e");
    });
});
// #server .block状态变化
setTimeout(function(){setInterval("block_change()",100)},15000);
function block_change(){
    if (random(0,9)==0){
        $(blocks[random(0,blocks.length)]).css("background-color", "#0de3fe");
    }
    if (random(0,19)==0){
        setTimeout(function(){
            $(blocks[random(0,blocks.length)]).css("background-color", "#06717e");
            },50);
        
    }
}

//随机函数:在范围内取整
function random(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}