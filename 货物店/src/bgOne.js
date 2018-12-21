/*背景层*/
var BgOneLayer = cc.Layer.extend({
    ctor: function () { //初始化
        this._super();
        var size = cc.director.getWinSize(); //获取显示区大小

        var sprite = cc.Sprite.create(res.Bg); // 创建精灵
        sprite.setPosition(size.width / 2, size.height / 2); // 位置
        sprite.setScale(size.height / sprite.height); //全屏显示 设置缩放
        this.addChild(sprite, 0); //加入到页面
        sound.gameBgAudio()
    }
})