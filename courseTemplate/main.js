var fix = 1
var fixY = 1
var gameData
cc.game.onStart = function() {
  if(!cc.sys.isNative && document.getElementById('cocosLoading')) // If referenced loading.js, please remove it
  {document.body.removeChild(document.getElementById('cocosLoading'))}

  /* 安卓下高清显示*/
  cc.view.enableRetina(true)

  cc.loader.resPath = 'res/Normal'

  cc.view.resizeWithBrowserSize(true)

  var designSize = cc.size(1920, 1080)
  var screenSize = cc.view.getFrameSize()

  /* 手机端*/
  if (cc.sys.isMobile) {
    fix = (designSize.height / screenSize.height) * (screenSize.width / designSize.width)
    fixY = (designSize.width / screenSize.width) * (screenSize.height / designSize.height)
    cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_HEIGHT)
  }else{
    cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.SHOW_ALL)
  }
  cc.log(fix, fixY)
  cc.LoaderScene.preload(g_resources, function() {
    gameData = getData()
    cc.director.runScene(new StartScene())
  }, this)
}
cc.game.run('gameCanvas')
var startTime = new Date().getTime()
