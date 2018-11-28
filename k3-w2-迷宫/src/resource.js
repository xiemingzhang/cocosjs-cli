// 公共资源
var res = {

	bg: 'source/bg.png',
	maze: 'source/maze.png',
	miya: 'source/miya.png',
	down: 'source/down.png',
	left: 'source/left.png',
	right: 'source/right.png',
	up: 'source/up.png',


	// 声音 //背景音乐及音效
	GameBg_audio: 'audio/effect/bgm_fantasy_by_piano.mp3', // 背景音乐

	// 声音 //配音
	game_info: 'audio/voice/game_info.mp3',


	// 声音 //部分公共配音
	Right_audio: 'common/audios/right.mp3',
	Wrong_audio: 'common/audios/wrong.mp3',
	Win_audio: 'common/audios/celebration.mp3',
	Star_audio: 'common/audios/star.mp3',
	Button_audio: 'common/audios/button.mp3',

	// 图片 //头部公共部分
	Back: 'common/imgs/back.png',
	BlackStar: 'common/imgs/shape.png',
	FlyStar: 'common/imgs/flay_star.png',
	LightStar: 'common/imgs/light_star.png',
	ResultBg: 'common/imgs/result_image_bg.png',
	RepeatPress: 'common/imgs/result_btn_done_pressed.png',
	DoneNormal: 'common/imgs/result_btn_done_normal.png',
	celebrateGirl: 'common/imgs/celebrate_girl.png',
	hand: 'common/imgs/hand.png',
	handclick: 'common/imgs/handclick.png'

}

/* 预加载资源*/
var g_resources = []
for (var i in res) {
	g_resources.push(res[i])
}
