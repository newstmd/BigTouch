const total=60;
var score=1;
var scoreLabel=cc.LabelTTF;
var timeout=0;
var timeoutLabel=cc.LabelTTF;
var isPlaying = 1;
var PlayScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var bglayer = new PlayLayerBG();
		this.addChild(bglayer);
		this.restart();
	},
	restart:function(){
		resetState();
		this.schedule(this.gaming,1);
		
		
	},
	
	gaming:function(){
		subtractTime();


		if (timeout<=0) {//当计时结束时，停止计时器，显示成绩，分享！
			isPlaying = 0;
			cc.log("Time out!!!");
			this.unschedule(this.gaming);
		}
	}
});


function subtractTime(){
	timeout -=1;
	//timeoutLabel.runAction(cc.ScaleTo.create(0.2,1.3));
	//timeoutLabel.runAction(cc.ScaleTo.create(0.2,1.0));
	//timeoutLabel.runAction(cc.Sequence.create(cc.ScaleTo.create(0.2,1.3)),cc.ScaleTo.create(0.2,1.0),null);
		
	timeoutLabel.setString(timeout);
}

function resetState(){
	score = 0;
	scoreLabel.setString("分数:0");

	timeout = total;
	timeoutLabel.setString(total);
}