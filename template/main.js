// var fix = 1
// var fix2
// var startTime = new Date().getTime()
// cc.game.onStart = function(){
//   // cc.director.setDisplayStats(false);//去掉右下角显示
//   if(!cc.sys.isNative && document.getElementById('cocosLoading')) // If referenced loading.js, please remove it
//   {document.body.removeChild(document.getElementById('cocosLoading'))}

//   cc.view.resizeWithBrowserSize(true)

//   var designSize = cc.size(736, 414)
//   var screenSize = cc.view.getFrameSize()

//   // 线的粗细的系数
//   fix2 = designSize.height / screenSize.height

//   /* 手机端*/
//   if(!cc.sys.isNative && screenSize.height < 500){
//     designSize = cc.size(736, 414)
//     cc.loader.resPath = 'res/Normal'
//     fix = 1
//     /* 平板*/
//   }else{
//     cc.loader.resPath = 'res/Normal'
//     fix = (designSize.height / screenSize.height) * (screenSize.width / designSize.width)
//   }

//   /* 安卓下高清显示，去掉锯齿*/
//   cc.view.enableRetina(true)
//   // load resources
//   cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_HEIGHT)
//   // 在移动设备上进入全屏模式
//   cc.view.enableAutoFullScreen(true)
//   cc.LoaderScene.preload(g_resources, function () {
//     cc.director.runScene(new StartScene())
//   }, this)
// }
// cc.game.run()

var fix, fixX, fix2, gameData, size, btnSize
cc.game.onStart = function() {
  if(!cc.sys.isNative && document.getElementById('cocosLoading')) // If referenced loading.js, please remove it
  {document.body.removeChild(document.getElementById('cocosLoading'))}

  cc.view.resizeWithBrowserSize(true)
  var designSize = cc.size(736, 414)
  var screenSize = cc.view.getFrameSize()
  /* 手机端*/
  fix2 = designSize.height / screenSize.height
  cc.loader.resPath = 'res/Normal'
  var ratio = (screenSize.width / screenSize.height).toFixed(2)
  cc.log(ratio)
  // 小于 16:9
  if(ratio < 1.78) {
    fix = (designSize.height / screenSize.height) * (screenSize.width / designSize.width)
    fixX = -(designSize.width - (screenSize.width * designSize.height) / screenSize.height) / 2
    // 等于或大于
  }else{
    fix = 1
    fixX = 0
  }

  // if(!cc.sys.isNative && screenSize.height < 500){
  //     designSize = cc.size(736, 414);
  //     cc.loader.resPath = "res/Normal";
  //     fix = 1;
  // 平板
  // }else{
  //     cc.loader.resPath = "res/Normal";
  //     fix = (designSize.height / screenSize.height) * (screenSize.width / designSize.width);
  // }

  /* 安卓下高清显示*/
  cc.view.enableRetina(true)

  cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_HEIGHT)

  cc.LoaderScene.preload(g_resources, function() {
    size = cc.winSize
    var del = new cc.Sprite(res.keyboard_num_delete)
    del.setScale(0.333 * fix)
    btnSize = del.getBoundingBox()
    
    gameData = getData()
    cc.director.runScene(new StartScene())
  }, this)
}
cc.game.run('gameCanvas')
var startTime = new Date().getTime()
