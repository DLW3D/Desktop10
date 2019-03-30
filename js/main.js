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

//production
var production_data = new Array();
var production_name;
var production_p;
var production_bar;
$(document).ready(function(){
    production_data = [7200,0,130,1300]
    production_name = $("#production .wordn .num");
    production_p = $("#production .wordp .num");
    production_bar = $("#production .boxf .barf");
    setInterval("production_up()",100);
});
function production_up(){
    for (i=0;i<4;i++){
        production_data[i] += random(-100,100);
        if (production_data[i] < 0) production_data[i] = 0;
        if (production_data[i] > 9999) production_data[i] = 9999;
        $(production_p[i]).html(production_data[i]+"<a>/d</a>");
        $(production_bar[i]).css("width",310*production_data[i]/9999);
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

//process
var process_data = new Array();
var process_data_ref = ["PID","USER","PR","%CPU","%MEM","COMMAND"];
var process_c;
$(document).ready(function(){
    process_c=$("#process .cloumn");
    process_data_pusher(9052,"matlab",40,83.1,44.3,"um-simulator");
    process_data_pusher(3213,   "root", 0,  1.3,    4.7,"system");
    process_data_pusher(43,     "sys",  20, 0.8,    0.1,"bpp");
    process_data_pusher(523,    "root", 20, 0.1,    0.0,"top");
    process_data_pusher(426,    "root", 20, 0.0,    0.0,"sshd");
    process_data_pusher(13917,  "sys",  20, 0.0,    0.0,"ttc");
    process_data_pusher(824,    "root", 20, 0.0,    0.0,"pref");
    process_data_pusher(4021,   "www",  20, 0.0,    0.0,"httpd");
    process_data_pusher(1505,   "root", 10, 3.7,    4.2,"observer");
    process_data_pusher(6212,   "www",  20, 0.0,    0.0,"httpd");
    process_data_pusher(133,    "cst",  40, 0.0,    0.0,"cst-scanner");
    process_data_pusher(9214,   "ob",   10, 0.0,    0.0,"obos");
    process_data_pusher(2715,   "root", 20, 0.0,    0.0,"bash");
    process_data_pusher(5890,   "root", 20, 0.0,    0.0,"rtkeeker");
    process_data_pusher();
    setInterval("process_up()",1000);
});
function process_up(){
    //排序
    randomOrder(process_data);
    //显示
    $.each(process_c, function(ii, iitem){      
        $.each(iitem.children, function(i, item){
            if(i==0) 
                $(item).text(process_data_ref[ii]);
            else if(ii==3||ii==4)
                $(item).text(process_data[i-1][ii].toFixed(1));
            else
                $(item).text(process_data[i-1][ii]);
        });  
    });
    /*
    //闪烁
    var randList = random(1,process_c[0].children.length-1)
    $.each(process_c, function(ii, iitem){
        var rdl = randList;
        $(iitem.children[rdl]).css("color","white");
        setTimeout(function(){$(iitem.children[rdl]).css("color","#0de3fe");},600)
    });
    */
}
function process_data_pusher(){
    if (arguments.length != 6)
        return null;
    process_data.push([arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]])
}
// 数组随机排序,来自 https://www.cnblogs.com/getdaydayup/p/6592154.html
function randomOrder(arr){
    var t;
    for(var i = 0;i < arr.length; i++){
        var rand = parseInt(Math.random()*arr.length);
        t = arr[rand];
        arr[rand] =arr[i];
        arr[i] = t;
    }
}




