//UI启动
//使用"UIready("代替"$(document).ready(",使UI在系统启动完毕后再启动.
FunctionReady = []
function UIready(fun){
    FunctionReady.push(fun);
}

//时间
UIready(function(){
    setInterval("fun('banner-word')",1);
});
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
UIready(function(){
    // #server .block状态初始化
    blocks = $("#server .box>*");
    blocks.each(function(index){
        $(this).css("background-color", "#06717e");
    });
    
    // #server .block状态变化
    setTimeout(function(){setInterval("block_change()",100)},15000);
});
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
UIready(function(){
    production_data = [7200,0,130,1300]
    production_name = $("#production .wordn .num");
    production_p = $("#production .wordp .num");
    production_bar = $("#production .boxf .barf");
    //延迟开始,与显示同步
    setTimeout(function(){setInterval("production_up()",100);},4100);
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
UIready(function(){
    schedule_tab = $("#schedules .schedule-tab");
    schedule_name = $("#schedules .schedule-name");
    schedule_p = $("#schedules .schedule-percent");
    schedule_bar = $("#schedules .schedule-barf");
    //延迟开始,与显示同步
    setTimeout(function(){setInterval("schedule_up()",100);},4600);
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
UIready(function(){
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
UIready(function(){
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

//messanger
var messanger_state = [0,0,0,0,0,0,0,0];
var messanger_ref = [0,4,1,5,2,6,3,7]
var messanger_ref_rev = [0,2,4,6,1,3,5,7]
var messanger_tab;
var messanger_f;
var messanger_f_l;
var messanger_f_r;
var messanger_name;
var messanger_detail;
var messanger_shape;
var messanger_example=[
    ["unknow message","message detail long long long long long end"],
    ["unknow message","message detail long long long long long start"],
    ["unknow message","message detail"],
    ["unknow message","message detail 1"],
    ["unknow message","message detail long"],
    ["unknow message","message detail long long"],
    ["unknow message","message detail long long ago"],
    ["unknow message","message detail long long after"],
    ];
UIready(function(){
    messanger_tab = $("#messanger .messanger-tab");
    messanger_f = $("#messanger .messanger-fly");
    messanger_f_l = $("#messanger .messanger-fly-l");
    messanger_f_r = $("#messanger .messanger-fly-r");
    messanger_name = $("#messanger .messanger-name");
    messanger_detail = $("#messanger .messanger-detail");
    messanger_shape = $("#messanger .messanger-tab-shape");
    
    messanger_f_l.css("left","-1000px");
    messanger_f_r.css("left","+1000px");

    for(i=0;i<messanger_tab.length;i++){
        $(messanger_tab[i]).attr("onclick","messanger_read("+i+")");
    }
    messanger_up();
    setTimeout(function(){setInterval("messanger_up()",60000);},3000);
});
function messanger_up(){
    var rand = random(0,7);
    messageer_send(messanger_example[rand][0],messanger_example[rand][1])
}
// 新的消息
function messageer_send(name,detail){
    var pos = -1;
    for(i=0;i<messanger_f.length;i++){
        if(messanger_state[i] == 0){
            pos = i;
            break;
        }
    }
    if(pos == -1){
        return false;
    }else{
        pos = messanger_ref[pos];
    }
    
    $(messanger_name[pos]).text(name);
    $(messanger_detail[pos]).text(detail);
    $(messanger_f[pos]).css("left","0");
    messanger_state[messanger_ref_rev[pos]] = 1;
    setTimeout(function(){
        $(messanger_shape[pos]).css("background-color","#0de3fe");
    },600)
}
// 点击事件
function messanger_read(index){
    var dir;
    if(messanger_state[messanger_ref_rev[index]]==1){
        dir = index<4 ? 0 : 1;
        $(messanger_shape[index]).css("background-color","#06717e")
        setTimeout(function(){
            $(messanger_f[index]).css("left",dir==0?"-1000px":"+1000px");
            messanger_state[messanger_ref_rev[index]]=0;
        },100);
    }
}

//map
var map_d;
var map_ref = ["t","c","s"];
UIready(function(){
    map_d = $("#map .map-deep");
    //清空
    map_d.empty();
    //初始位置
    map_d.css("top","-15%");
    map_d.css("left","-40%");
    setInterval("map_up()",1000);
});
function map_up(){
    // 地图规律性移动
    if(random(0,2)==0){
        map_d.css("left",random(-454,0));
        map_d.css("top",random(-70,0));
    }
    // 警示标志随机出现
    var ad = $("<div></div>").addClass("map-warn map-warn-"+map_ref[random(0,2)]);
    ad.css("left",random(0,874))
    ad.css("top",random(0,429))
    map_d.append(ad);
    setTimeout(function(){ad.remove()},10000);
}


