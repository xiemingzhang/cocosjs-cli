var fix, fixX, fix2, gameData
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

  /* 安卓下高清显示*/
  cc.view.enableRetina(true)

  cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_HEIGHT)

  cc.LoaderScene.preload(g_resources, function() {
    gameData = getData()
    cc.director.runScene(new StartScene())
  }, this)
}
cc.game.run('gameCanvas')
var startTime = new Date().getTime()
