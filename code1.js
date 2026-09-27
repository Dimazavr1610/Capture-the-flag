gdjs._1085_1072_1095_1072_1083_1086Code = {};
gdjs._1085_1072_1095_1072_1083_1086Code.localVariables = [];
gdjs._1085_1072_1095_1072_1083_1086Code.idToCallbackMap = new Map();
gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects1= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects2= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects1= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects2= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1= [];
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects2= [];


gdjs._1085_1072_1095_1072_1083_1086Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Red_button"), gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects1[k] = gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects1[i];
        ++k;
    }
}
gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Red");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "игра", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blue_button"), gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects1[k] = gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects1[i];
        ++k;
    }
}
gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Blue");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "игра", false);
}
}

}


};

gdjs._1085_1072_1095_1072_1083_1086Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects2.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects2.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects2.length = 0;

gdjs._1085_1072_1095_1072_1083_1086Code.eventsList0(runtimeScene);
gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDBlue_9595buttonObjects2.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDRed_9595buttonObjects2.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects1.length = 0;
gdjs._1085_1072_1095_1072_1083_1086Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['_1085_1072_1095_1072_1083_1086Code'] = gdjs._1085_1072_1095_1072_1083_1086Code;
