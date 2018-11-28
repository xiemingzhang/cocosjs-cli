var fix = 1
cc.game.onStart = function(){
  // cc.director.setDisplayStats(false);//去掉右下角显示
  if(!cc.sys.isNative && document.getElementById('cocosLoading')){
    document.body.removeChild(document.getElementById('cocosLoading'))
  }

  cc.view.resizeWithBrowserSize(true)

  var designSize = cc.size(736, 414)
  var screenSize = cc.view.getFrameSize()

  /* 手机端*/
  if(!cc.sys.isNative && screenSize.height < 500){
    designSize = cc.size(736, 414)
    cc.loader.resPath = 'res/Normal'
    fix = 1
    /* 平板*/
  }else{
    cc.loader.resPath = 'res/Normal'
    fix = (designSize.height / screenSize.height) * (screenSize.width / designSize.width)
  }

  /* 安卓下高清显示，去掉锯齿*/
  cc.view.enableRetina(true)
  // load resources
  cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.FIXED_HEIGHT)
  // 在移动设备上进入全屏模式
  cc.view.enableAutoFullScreen(true)
  cc.LoaderScene.preload(g_resources, function () {
    cc.director.runScene(new PlayScene())
  }, this)
}
cc.game.run()
