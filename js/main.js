//时间
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

// cpu 矩形阵列
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

//process
var process_data = new Array();
var process_name;
var process_p;
var process_bar;
$(document).ready(function(){
    process_data = [7200,0,130,1300]
    process_name = $("#production .wordn .num");
    process_p = $("#production .wordp .num");
    process_bar = $("#production .boxf .barf");
    setInterval("process_up()",100);
});
function process_up(){
    for (i=0;i<4;i++){
        process_data[i] += random(-100,100);
        if (process_data[i] < 0) process_data[i] = 0;
        if (process_data[i] > 9999) process_data[i] = 9999;
        $(process_p[i]).html(process_data[i]+"<a>/d</a>");
        $(process_bar[i]).css("width",310*process_data[i]/9999);
    }
}

//Schedule
var schedule_data = [12,100,58,89];
// state 0:执行中 1:就绪 -1:等待    
var schedule_state = [-1,1,0,2]
var schedule_tab;
var schedule_name;
var schedule_p;
var schedule_bar;
$(document).ready(function(){
    schedule_tab = $("#schedules .schedule-tab");
    schedule_name = $("#schedules .schedule-name");
    schedule_p = $("#schedules .schedule-percent");
    schedule_bar = $("#schedules .schedule-barf");
    setInterval("schedule_up()",1000);
});
function schedule_up(){
    for (i=0;i<4;i++){
        switch(schedule_state[i]){
            case 0:
                schedule_data[i] += 0.0001*random(0,100);
                $(schedule_p[i]).html((parseInt(schedule_data[i]*10)/10).toFixed(1)+"<a>%</a>");
                if (schedule_data[i] >= 100){
                    schedule_data[i] = 100;
                    schedule_state[i] = 1;
                    $(schedule_p[i]).html("ready");
                }
                break;
            case 1:
                $(schedule_p[i]).html("ready");
                break;
            case -1:
                $(schedule_p[i]).html("waiting");
                break;
            default:
                $(schedule_p[i]).html("error");
                $(schedule_tab[i]).css("border-color","red");
                $(schedule_name[i]).css("color","red");
                $(schedule_p[i]).css("color","red");
                $(schedule_bar[i]).css("background-color","red");
                $($("#schedules .schedule-bar")[i]).css("background-color","darkred")
        }
        $(schedule_bar[i]).css("width",parseInt(450*schedule_data[i]/100));
    }
}

//cpu
var cpu_data = [23.7,5.20,89];
var cpu_word = ["core temperature : {0}<sup>℃</sup>","main frequency : {0}<sup>GHz</sup>","cpu utilization : {0}<sup>%</sup>"];
var cpu_p;
$(document).ready(function(){
    cpu_p = $("#server .word");
    cpu_up();
    setInterval("cpu_up()",1000);
});
function cpu_up(){
    cpu_data[0] += 0.01 * (cpu_data[0]<98 ? random(-15,200) : random(-20,15));
    cpu_data[1] += 0.01 * random(-2,2);
    cpu_data[2] += 0.01 * random(-100,100);
    if (cpu_data[2]>100)cpu_data[2]=100;
    if (cpu_data[2]<0)cpu_data[2]=0;
    for (i=0;i<3;i++){
        $(cpu_p[i]).html(format(cpu_word[i],cpu_data[i]));
    }
}
//来自 https://www.cnblogs.com/jxsimon/p/5053810.html
function format() {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for ( var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i].toFixed(2));
    }
    return str;
};

