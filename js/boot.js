var logScreen;
var logWindow = [];
$(document).ready(function(){
    $("#wrap").css("display","none");
    logScreen = $(".log-screen");
    logWindow.push($(".log-window:nth-of-type(2)"));
    logWindow.push($(".log-window:nth-of-type(3)"));
    logWindow.push($(".log-window:nth-of-type(4)"));
    ScreenLog();
});
var logIndex = 0;
var logWords = "";
function ScreenLog(){
    logWords += ArrayBootLog[logIndex++].replace(/ /g,"&nbsp;") + "<br>";
    //超过50行开始向下对齐
    if (logIndex == 41){
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
        windowLog();
        return;
    }
    //判断下一行
    if (ArrayBootLog[logIndex].slice(0,1)=="["){
        //新的一行,设置时间间隔
        setTimeout(ScreenLog, Math.floor(Math.random()*50))
    }else{
        //不是新的一行,直接输出
        ScreenLog();
    }
}
function windowLog(){
    logWindow[0].css({"display":"block","top":"10%","left":"10%"});
    logWindow[1].css({"display":"block","top":"25%","left":"25%"});
    logWindow[2].css({"display":"block","top":"40%","left":"40%"});
}