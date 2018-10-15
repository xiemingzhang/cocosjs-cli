/**
 * Created by Dellnb on 2018/2/2.
 */
var nodeExpand = cc.Layer.extend({
	ListenerName:[],
	sprite:null,
	button:null,
	ctor: function () {
		this._super();
		return this;
	},EventL: function (LnerName,sprite, fun0, fun1, fun2) {
		this.sprite=sprite;
		this.ListenerName[LnerName] = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onMyTouchBegan(this.sprite, fun0).bind(this),
			onTouchMoved: this.onMyTouchMoved(this.sprite, fun1).bind(this),
			onTouchEnded: this.onMyTouchEnded(this.sprite, fun2).bind(this)
		})
		this.addEventL(LnerName)
	},onMyTouchBegan:function(sprite,fun) {
		return function (touch, event){
			var target = event.getCurrentTarget();
			var locationInNode = target.convertToNodeSpace(touch.getLocation());
			var s = target.getContentSize();
			var rect = cc.rect(0, 0, s.width, s.height);
			if (cc.rectContainsPoint(rect, locationInNode) && this.button==true ) {
				updata.finish_steps++;
				this.button=false;
				if(fun)fun(target);
				return true;
			}
			return false;
		}
	}
	,onMyTouchMoved:function(sprite,fun){
		if(fun){
			return function (touch, event){
				var target = event.getCurrentTarget();
				var delta = touch.getDelta();
//				target.x += delta.x;
//				target.y += delta.y;
				if(fun)fun(target,delta);
			}
		}
	}.bind(this)
	,onMyTouchEnded:function(sprite,fun){
			return function (touch, event){
				var target = event.getCurrentTarget();
				if(fun)fun(target);
				return this;
			}

	}.bind(this)
	,rovmlistn:function(LnerName){//删除监听事件
		cc.eventManager.removeListener(this.ListenerName[LnerName]);
	},addEventL:function(LnerName){
		cc.eventManager.addListener(this.ListenerName[LnerName], this.sprite);//添加监听
	},dataUp:function(num){
		if (common_data[num].obtain < common_data[num].taoal) {
			common_data[num].obtain++
			common_data[0].obtain++
		}
	},contains:function(a, obj) { //检查数组中是否包含指定的值 并返回建值
		var i = a.length;
		while (i--) {
			if (a[i] === obj) {
				return i;
			}
		}
		return false;
	},randomArray:function(numbers,countNum){ //返回指定长度的数组 值为指定数字长度的随机数
		for (var i = 0; i < numbers; i++) {
			var num = Math.round(Math.random() * parseInt(numbers));
			if(this.contains(countNum,num)===false && countNum.length <  numbers && num !== numbers){
				countNum.push(num);
			}
		}
		if(countNum.length < numbers){
			this.randomArray(numbers,countNum)
		}else{
			return countNum;
		}

	}
})