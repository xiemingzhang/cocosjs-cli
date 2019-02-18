cc.game.onStart = function(){
  if(!cc.sys.isNative && document.getElementById('cocosLoading')) // If referenced loading.js, please remove it
  {document.body.removeChild(document.getElementById('cocosLoading'))}

  cc.view.resizeWithBrowserSize(true)
  var designSize = cc.size(1920, 1080)
  /* 手机端*/
  cc.loader.resPath = 'res/Normal'
  /* 安卓下高清显示*/
  cc.view.enableRetina(true)

  cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.SHOW_ALL)

  cc.LoaderScene.preload(g_resources, function () {
    cc.director.runScene(new StartScene())
  }, this)
}
cc.game.run()
var startTime = new Date().getTime()


