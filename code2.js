gdjs._1082_1086_1085_1077_1094Code = {};
gdjs._1082_1086_1085_1077_1094Code.localVariables = [];
gdjs._1082_1086_1085_1077_1094Code.idToCallbackMap = new Map();
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects1= [];
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects2= [];
gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1= [];
gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects2= [];
gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects1= [];
gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects2= [];


gdjs._1082_1086_1085_1077_1094Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinnerText"), gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1);
{for(var i = 0, len = gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1.length ;i < len;++i) {
    gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1[i].getBehavior("Text").setText("Blue Team Wins");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinnerText"), gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1);
{for(var i = 0, len = gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1.length ;i < len;++i) {
    gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1[i].getBehavior("Text").setText("Red Team Wins");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinnerText"), gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1);
{for(var i = 0, len = gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1.length ;i < len;++i) {
    gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1[i].getBehavior("Text").setText("Draw");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects1[k] = gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects1[i];
        ++k;
    }
}
gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "начало", false);
}
}

}


};

gdjs._1082_1086_1085_1077_1094Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects2.length = 0;

gdjs._1082_1086_1085_1077_1094Code.eventsList0(runtimeScene);
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDNewSpriteObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDWinnerTextObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094Code.GDButtonObjects2.length = 0;


return;

}

gdjs['_1082_1086_1085_1077_1094Code'] = gdjs._1082_1086_1085_1077_1094Code;
