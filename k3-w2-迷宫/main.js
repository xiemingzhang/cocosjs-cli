var fix
var startTime = new Date().getTime()
cc.game.onStart = function () {
  if (!cc.sys.isNative && document.getElementById('cocosLoading')) {// If referenced loading.js, please remove it
    document.body.removeChild(document.getElementById('cocosLoading'))
  }

  var designSize = cc.size(736, 414)
  var screenSize = cc.view.getFrameSize()

  if (!cc.sys.isNative && screenSize.height < 500) {
    designSize = cc.size(736, 414)
    cc.loader.resPath = 'res/Normal'
    fix = 1
  } else {
    cc.loader.resPath = 'res/Normal'
    fix = (designSize.height / screenSize.height) * (screenSize.width / designSize.width)
  }
  /* 安卓下高清显示 */
  cc.view.enableRetina(true)
  cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_HEIGHT)
  cc.view.setOrientation(cc.ORIENTATION_LANDSCAPE)
  cc.LoaderScene.preload(g_resources, function () {
    cc.director.runScene(new MyScene())
  }, this)
}

cc.game.run('gameCanvas')

