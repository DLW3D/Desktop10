
var logWindow = [];
$(document).ready(function(){
    var logScreen = $(".log-screen");
    logWindow.push($(".log-window:nth-of-type(1)"));
    logWindow.push($(".log-window:nth-of-type(2)"));
    logWindow.push($(".log-window:nth-of-type(3)"));
    //执行全屏Log
    PrintLog(logScreen,function(){windowLog();},30);
});
// Log
function PrintLog(logScreen,callback,speed=50,line=60,logIndex=0,logWords=""){
    logWords += ArrayBootLog[logIndex++].replace(/ /g,"&nbsp;") + "<br>";
    //超过41;14行开始向下对齐
    if (logIndex == line){
        logScreen.css("top","auto");
    }
    //超过50行开始每次切除开头一行
    if (logIndex > line+5) {
        logWords=logWords.slice(logWords.indexOf("<br>")+4,logWords.length);
    }
    logScreen.html(logWords);
    //检查是否结束
    if (logIndex>=ArrayBootLog.length) {
        logScreen.css("display","none");
        callback();
        return;
    }
    //判断下一行
    if (ArrayBootLog[logIndex].slice(0,1)=="["){
        //新的一行,设置时间间隔
        setTimeout(PrintLog, Math.floor(Math.random()*speed),logScreen,callback,speed,line,logIndex,logWords)
    }else{
        //不是新的一行,直接输出
        PrintLog(logScreen,callback,speed,line,logIndex,logWords);
    }
}
// 窗口Log
function windowLog(){
    var logWindowWord = [];
    logWindowWord[0] = $(".log-window:nth-of-type(1) p");
    logWindowWord[1] = $(".log-window:nth-of-type(2) p");
    logWindowWord[2] = $(".log-window:nth-of-type(3) p");
    setTimeout(function(){
        logWindow[0].css({"display":"block","top":"10%","left":"10%"});
        PrintLog(logWindowWord[0],function(){logWindow[0].css("display","none");},1,14);
    },1);
    setTimeout(function(){
        logWindow[1].css({"display":"block","top":"25%","left":"40%"});
        PrintLog(logWindowWord[1],function(){logWindow[1].css("display","none");},1,14);
    },500);
    setTimeout(function(){
        logWindow[2].css({"display":"block","top":"40%","left":"25%"});
        PrintLog(logWindowWord[2],function(){logWindow[2].css("display","none");
        UIBoot();},1,14);
    },1000);
}
// 启动UI界面
function UIBoot(){
    FunctionReady.forEach(element => {
        element();
    });
    
    $("#wrap").css("display","block");

    $("#table").css("opacity","0");
    $("#map").css("opacity","0");
    $("#messanger").css("opacity","0");
    $("#production").css("opacity","0");
    $("#schedules").css("opacity","0");
    $("#server").css("opacity","0");
    $("#process").css("opacity","0");
    $("#button").css("opacity","0");

	$('#table').delay(1000).animate({"opacity" : "1"}, 35);
	$('#table').animate({"opacity" : "0"}, 35);
	$('#table').animate({"opacity" : "1"}, 35);
    
	$('#map').delay(2000).animate({"opacity" : "1"}, 35);
	$('#map').animate({"opacity" : "0"}, 35);
	$('#map').animate({"opacity" : "1"}, 35);
    
	$('#messanger').delay(3000).animate({"opacity" : "1"}, 35);
	$('#messanger').animate({"opacity" : "0"}, 35);
	$('#messanger').animate({"opacity" : "1"}, 35);
    
	$('#production').delay(4000).animate({"opacity" : "1"}, 35);
    
	$('#schedules').delay(4500).animate({"opacity" : "1"}, 35);
    
	$('#server').delay(5000).animate({"opacity" : "1"}, 35);
    
	$('#process').delay(5500).animate({"opacity" : "1"}, 35);
    
	$('#button').delay(6000).animate({"opacity" : "1"}, 35);
}