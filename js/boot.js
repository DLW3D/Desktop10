
var logWindow = [];
$(document).ready(function(){
    $("#wrap").css("display","none");
    var logScreen = $(".log-screen");
    logWindow.push($(".log-window:nth-of-type(1)"));
    logWindow.push($(".log-window:nth-of-type(2)"));
    logWindow.push($(".log-window:nth-of-type(3)"));
    ScreenLog(logScreen,function(){windowLog();},1);
});
function ScreenLog(logScreen,callback,speed=50,line=41,logIndex=0,logWords=""){
    logWords += ArrayBootLog[logIndex++].replace(/ /g,"&nbsp;") + "<br>";
    //超过41;14行开始向下对齐
    if (logIndex == line){
        logScreen.css("top","auto");
    }
    //超过60行开始每次切除开头一行
    if (logIndex > 50) {
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
        setTimeout(ScreenLog, Math.floor(Math.random()*speed),logScreen,callback,speed,line,logIndex,logWords)
    }else{
        //不是新的一行,直接输出
        ScreenLog(logScreen,callback,speed,line,logIndex,logWords);
    }
}
function windowLog(){
    var logWindowWord = [];
    logWindowWord[0] = $(".log-window:nth-of-type(1) p");
    logWindowWord[1] = $(".log-window:nth-of-type(2) p");
    logWindowWord[2] = $(".log-window:nth-of-type(3) p");
    setTimeout(function(){
        logWindow[0].css({"display":"block","top":"10%","left":"10%"});
        ScreenLog(logWindowWord[0],function(){logWindow[0].css("display","none")},1,14);
    },1);
    setTimeout(function(){
        logWindow[1].css({"display":"block","top":"25%","left":"25%"});
        ScreenLog(logWindowWord[1],function(){logWindow[1].css("display","none")},1,14);
    },500);
    setTimeout(function(){
        logWindow[2].css({"display":"block","top":"40%","left":"40%"});
        ScreenLog(logWindowWord[2],function(){logWindow[2].css("display","none")},1,14);
    },1000);
}