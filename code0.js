gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDPaltformObjects1= [];
gdjs.Untitled_32sceneCode.GDPaltformObjects2= [];
gdjs.Untitled_32sceneCode.GDp1Objects1= [];
gdjs.Untitled_32sceneCode.GDp1Objects2= [];
gdjs.Untitled_32sceneCode.GDp2Objects1= [];
gdjs.Untitled_32sceneCode.GDp2Objects2= [];
gdjs.Untitled_32sceneCode.GDp3Objects1= [];
gdjs.Untitled_32sceneCode.GDp3Objects2= [];
gdjs.Untitled_32sceneCode.GDp4Objects1= [];
gdjs.Untitled_32sceneCode.GDp4Objects2= [];
gdjs.Untitled_32sceneCode.GDp5Objects1= [];
gdjs.Untitled_32sceneCode.GDp5Objects2= [];
gdjs.Untitled_32sceneCode.GDp6Objects1= [];
gdjs.Untitled_32sceneCode.GDp6Objects2= [];
gdjs.Untitled_32sceneCode.GDp7Objects1= [];
gdjs.Untitled_32sceneCode.GDp7Objects2= [];
gdjs.Untitled_32sceneCode.GDWallLObjects1= [];
gdjs.Untitled_32sceneCode.GDWallLObjects2= [];
gdjs.Untitled_32sceneCode.GDWallRObjects1= [];
gdjs.Untitled_32sceneCode.GDWallRObjects2= [];
gdjs.Untitled_32sceneCode.GDRoofObjects1= [];
gdjs.Untitled_32sceneCode.GDRoofObjects2= [];
gdjs.Untitled_32sceneCode.GDObst1Objects1= [];
gdjs.Untitled_32sceneCode.GDObst1Objects2= [];
gdjs.Untitled_32sceneCode.GDLoseObjects1= [];
gdjs.Untitled_32sceneCode.GDLoseObjects2= [];
gdjs.Untitled_32sceneCode.GDRetryObjects1= [];
gdjs.Untitled_32sceneCode.GDRetryObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects2= [];
gdjs.Untitled_32sceneCode.GDFlagObjects1= [];
gdjs.Untitled_32sceneCode.GDFlagObjects2= [];
gdjs.Untitled_32sceneCode.GDNewText3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText3Objects2= [];
gdjs.Untitled_32sceneCode.GDNewText4Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText4Objects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDObst1Objects1Objects = Hashtable.newFrom({"Obst1": gdjs.Untitled_32sceneCode.GDObst1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.Untitled_32sceneCode.GDRetryObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.Untitled_32sceneCode.GDFlagObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obst1"), gdjs.Untitled_32sceneCode.GDObst1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDObst1Objects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lose"), gdjs.Untitled_32sceneCode.GDLoseObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLoseObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLoseObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.Untitled_32sceneCode.GDRetryObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRetryObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lose"), gdjs.Untitled_32sceneCode.GDLoseObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Untitled_32sceneCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLoseObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLoseObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Untitled_32sceneCode.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDFlagObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Untitled_32sceneCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText3Objects1[i].hide(false);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPaltformObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPaltformObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDp1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDp1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDp2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDp2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDp3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDp3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDp4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDp4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDp5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDp5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDp6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDp6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDp7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDp7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallLObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallLObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallRObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallRObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRoofObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRoofObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDObst1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDObst1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLoseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLoseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRetryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRetryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlagObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlagObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText4Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
