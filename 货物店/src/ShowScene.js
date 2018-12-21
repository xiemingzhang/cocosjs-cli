/*场景*/
var StartScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var size = cc.director.getWinSize();

        /*添加背景层*/
        var layer = new BgOneLayer();
        this.addChild(layer, 0, 0);

        /*飞星层*/
        var layer = new StarLayer();
        this.addChild(layer, 2, 1);

        /*中间层*/
        var layer = new MidLayer();
        this.addChild(layer, 1, 2);

    }
});

