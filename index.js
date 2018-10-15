#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const readline = require('readline');

const options = require('minimist')(process.argv.slice(2))

const optionsName = require('minimist')(process.argv.slice(2), {
    string: ['new1', 'new2', 'res']
})

if (options._.length === 0 && (options.v || options.version)) {
    console.log('cocosjs: ' + require('./package.json').version)
    process.exit()
}

if (options._.length === 0 && (options.h || options.help)) {
    console.log([
        '',
        '  Usage: cocosjs [command] [options]',
        '',
        '',
        '  Commands:',
        '',
        '    new1 <ProjectName> generates a new project that is single scene',
        '    new2 <ProjectName> generates a new project that is multiple scenes',
        '    res <ProjectName> generates a new resource.js and audio.js over old',
        '',
        '  Options:',
        '',
        '    -h, --help    output usage information',
        '    -v, --version output the version number',
        ''
    ].join('\n'))
    process.exit(0)
}

var temp_path

if (options._.length === 0 && options.new1) {
    temp_path = "single_templates"
    if(optionsName.new1){
      init(options.new1)
    }else{
      console.log('default project is cocosjsProj')
      init('cocosjs-project')
    }
    // process.exit(0)
}

if (options._.length === 0 && options.new2) {
    temp_path = "multi_templates"
    if(optionsName.new2){
      init(options.new2)
    }else{
      console.log('default project is cocosjsProj')
      init('cocosjs-project')
    }
    // process.exit(0)
}

function init(name) {
    // console.log(name)

    validateProjectName(name);

    if (fs.existsSync(name)) {
        createAfterConfirmation(name);
    } else {
        createProject(name);
    }
}

function createAfterConfirmation(name) {
    const terminal = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    terminal.question(
        "Floder is already exits, do you want override it ? yes/no ",
        answer => {
            if (answer === "yes" || answer === "y") {
                createProject(name);
                terminal.close();
            } else {
                process.exit();
            }
        }
    );
}

function createProject(name) {
    let root = path.resolve(name);
    // var projectName = path.basename(root);
    let templatesPath = path.join(__dirname, temp_path);

    console.log(
        'This will create a new cocosjs project in',
        root
    );

    if (!fs.existsSync(root)) {
        fs.mkdirSync(root);
        fs.mkdirSync(root+'/'+path.basename(root));
        // traverse(templatesPath, root)   
        traverse(templatesPath, root+'/'+path.basename(root))  
        console.log('build complete') 
    }
}

function validateProjectName(name) {
  if (!name.match(/^[$A-Za-z0-9\u4e00-\u9fa5-_]*$/)) {
    console.error(
      '"%s" is not a valid name for a project. Please use a valid identifier ' +
        'name (alphanumeric).',
      name
    );
    process.exit(1);
  }
}

function traverse(templatePath, targetPath) {
  // console.log(templatePath, targetPath)
  try {
    const paths = fs.readdirSync(templatePath);
    // console.log(paths)
    paths.forEach(_path => {
      const _targetPath = path.resolve(targetPath, _path);
      const _templatePath = path.resolve(templatePath, _path);
      console.log("creating..." + _targetPath);
      if (!fs.statSync(_templatePath).isFile()) {
        fs.mkdirSync(_targetPath);
        traverse(_templatePath, _targetPath);
      } else {
        copyFile(_targetPath, _templatePath);
      }
    });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
}

function copyFile(_targetPath, _templatePath) {
  // console.log(_targetPath.split('/').reverse()[0])
  //fs.createReadStream(_targetPath).pipe(fs.createWriteStream(_templatePath));
  if(_targetPath.split('/').reverse()[0] === 'index.html'){
    let _html = fs.readFileSync(_templatePath, 'utf8')
    reHtml = _html.replace(/<title>([\s\S]){1,}<\/title>/gm, '<title>'+ (options.new1 || options.new2) +'</title>')
    fs.writeFileSync(_targetPath, reHtml, 'utf8')
  }else{
    fs.writeFileSync(_targetPath, fs.readFileSync(_templatePath), "utf-8");
  }
}

// console.log('build complete')
// function copyTemplate(from, to) {
//     from = path.join(__dirname, 'templates', from)
//     write(to, fs.readFileSync(from, 'utf-8'))
// }

// function write(path, str, mode) {
//     fs.writeFileSync(path, str)
// }

// function mkdir(path, fn) {
//     fs.mkdir(path, function(err) {
//         fn && fn()
//     })
// }

if (options._.length === 0 && (options.res || options.resource)) {
  createResource(options.res)
  createAudio(options.res)
}

function createResource(name){
  let root = path.resolve(name);

  let _string1 = `var res = {
    // 声音 //配音
    //game_info: 'audio/voice/game_info.mp3', // 游戏介绍
    // 声音 //部分公共配音
    Right_audio: 'common/audios/right.mp3',
    Wrong_audio: 'common/audios/wrong.mp3',
    Win_audio: 'common/audios/celebration.mp3',
    Star_audio: 'common/audios/star.mp3',
    Button_audio: 'common/audios/button.mp3',

    // 声音 //背景音乐及音效
    GameBg_audio: 'audio/effect/bgm_happy.mp3', // 背景音乐

    // 图片 //头部公共部分
    // bar_plist: 'common/imgs/bar.plist',
    // color_bar: 'common/imgs/color_bar.png',
    Back: 'common/imgs/back.png',
    BlackStar: 'common/imgs/shape.png',
    FlyStar: 'common/imgs/flay-star.png',
    LightStar: 'common/imgs/light-star.png',
    ResultBg: 'common/imgs/result-image-bg.png',
    hand: 'common/imgs/hand.png',
    handclick: 'common/imgs/handclick.png',
    sound: 'common/imgs/sound_button.png',
    button_green: 'common/imgs/button_green.png',
    button_next: 'common/imgs/button_next.png',
    star_finish: 'common/imgs/star_finish.png'`

  fs.writeFileSync(root + '/' + name + '/src/resource.js', _string1, "utf-8");
  //添加游戏图片
  const paths1 = fs.readdirSync(root + '/' + name + '/res/Normal/source');

  let _myPathArr1 = []
  paths1.forEach(_path => {
      var pic = /\.(png)/g;
        if(pic.test(_path)){
          _myPathArr1.push(_path)
        }else{
          console.log(`${_path}:图片类型错误`);
        }
    });

  // _myPathArr1 = _myPathArr1.filter(function(item){
  //   if(item !== 'bg.png'){
  //     return item
  //   }
  // })

  if(_myPathArr1.length !== 0){
    _myPathArr1.forEach(function(item, index) {
      if(index === 0){
        fs.appendFileSync(root + '/' + name + '/src/resource.js', ',\r\r//source图片\r', "utf-8")
      }
      if(index === _myPathArr1.length - 1){
        // var _str = `${item.replace('\.png','')}: 'source/${item}'\r}\r\r`
        var _str = `${item.replace('\.png','')}: 'source/${item}'`
      }else{
        var _str = `${item.replace('.png','')}: 'source/${item}',\r`
      }
      fs.appendFileSync(root + '/' + name + '/src/resource.js', _str, "utf-8")
    })
  }

  // 添加配音
  const paths2 = fs.readdirSync(root + '/' + name + '/res/Normal/audio/voice');

  let _myPathArr2 = []
  paths2.forEach(_path => {
      var pic = /\.(mp3)/g;
        if(pic.test(_path)){
          _myPathArr2.push(_path)
        }else{
          console.log(`${_path}:配音类型错误`);
        }
    });

  _myPathArr2 = _myPathArr2.filter(function(item){
    if(item !== 'game_info.mp3'){
      return item
    }
  })

  if(_myPathArr2.length !== 0){
    _myPathArr2.forEach(function(item, index) {
      if(index === 0){
        fs.appendFileSync(root + '/' + name + '/src/resource.js', ',\r\r//source配音\r', "utf-8")
      }
      if(index === _myPathArr2.length - 1){
        // var _str = `${item.replace('.mp3','_audio')}: 'audio/voice/${item}'\r}\r\r`
        var _str = `${item.replace('.mp3','_audio')}: 'audio/voice/${item}'`
      }else{
        var _str = `${item.replace('.mp3','_audio')}: 'audio/voice/${item}',\r`
      }
      fs.appendFileSync(root + '/' + name + '/src/resource.js', _str, "utf-8")
    })
  }

  // 添加音效
  const paths3 = fs.readdirSync(root + '/' + name + '/res/Normal/audio/effect');

  let _myPathArr3 = []
  paths3.forEach(_path => {
      var pic = /\.(mp3)/g;
        if(pic.test(_path)){
          _myPathArr3.push(_path)
        }else{
          console.log(`${_path}:音效类型错误`);
        }
    });

  _myPathArr3 = _myPathArr3.filter(function(item){
    if(item !== 'bgm_happy.mp3'){
      return item
    }
  })

  if(_myPathArr3.length === 0){
    fs.appendFileSync(root + '/' + name + '/src/resource.js', '\r}\r\r', "utf-8")
  }else{
    _myPathArr3.forEach(function(item, index) {
      if(index === 0){
        fs.appendFileSync(root + '/' + name + '/src/resource.js', ',\r\r//source音效\r', "utf-8")
      }
      if(index === _myPathArr3.length - 1){
        var _str = `${item.replace('.mp3','_sound')}: 'audio/effect/${item}'\r}\r\r`
      }else{
        var _str = `${item.replace('.mp3','_sound')}: 'audio/effect/${item}',\r`
      }
      fs.appendFileSync(root + '/' + name + '/src/resource.js', _str, "utf-8")
    })
  }

  let _string2 = `/* 预加载资源*/
  var g_resources = []
  for (var i in res) {
    g_resources.push(res[i])
  }`

  fs.appendFileSync(root + '/' + name + '/src/resource.js', _string2, "utf-8")
  // fs.writeFileSync(root + '/' + 'r.js', _string1, "utf-8");
}


function createAudio(name){
  let root = path.resolve(name);

  let _string1 = `// 共性
  var sound = {
    rightAudio: function () {// 正确
      cc.audioEngine.playEffect(res.Right_audio)
    },
    wrongAudio: function () {// 错误
      cc.audioEngine.playEffect(res.Wrong_audio)
    },
    winAudio: function () {// 完成 欢呼
      cc.audioEngine.playEffect(res.Win_audio)
    },
    starAudio: function () {// 飞星
      cc.audioEngine.playEffect(res.Star_audio)
    },
    buttonAudio: function () {// 点击
      cc.audioEngine.playEffect(res.Button_audio)
    },
    stopAudio: function () {// 停止
      cc.audioEngine.stopMusic()
    },
    stopAllEffects: function () {
      cc.audioEngine.stopAllEffects()
    },
    // 个性
    gameBgAudio: function () {// 背景
      cc.audioEngine.playMusic(res.GameBg_audio, true)
      cc.audioEngine.setMusicVolume(0.2)
    },
    gameInfo: function() {
      cc.audioEngine.playEffect(res.game_info)
    }`

  fs.writeFileSync(root + '/' + name + '/src/audio.js', _string1, "utf-8");

  // 添加配音方法
  const paths2 = fs.readdirSync(root + '/' + name + '/res/Normal/audio/voice');

  let _myPathArr2 = []
  paths2.forEach(_path => {
      var pic = /\.(mp3)/g;
        if(pic.test(_path)){
          _myPathArr2.push(_path)
        }
    });

  _myPathArr2 = _myPathArr2.filter(function(item){
    if(item !== 'game_info.mp3'){
      return item
    }
  })

  if(_myPathArr2.length !== 0){
    _myPathArr2.forEach(function(item, index) {
      if(index === 0){
        fs.appendFileSync(root + '/' + name + '/src/audio.js', ',\r//配音\r', "utf-8")
      }    
      if(index === _myPathArr2.length - 1){
        var _str = `${item.replace('.mp3','_audio')}: function() {
    cc.audioEngine.playEffect(res.${item.replace('.mp3','_audio')})
  }`
      }else{
        var _str = `${item.replace('.mp3','_audio')}: function() {
    cc.audioEngine.playEffect(res.${item.replace('.mp3','_audio')})
  },\r`
      }

      fs.appendFileSync(root + '/' + name + '/src/audio.js', _str, "utf-8")
    })
  }

  // 添加音效方法
  const paths3 = fs.readdirSync(root + '/' + name + '/res/Normal/audio/effect');

  let _myPathArr3 = []
  paths3.forEach(_path => {
      var pic = /\.(mp3)/g;
        if(pic.test(_path)){
          _myPathArr3.push(_path)
        }
    });

  _myPathArr3 = _myPathArr3.filter(function(item){
    if(item !== 'bgm_happy.mp3'){
      return item
    }
  })

  if(_myPathArr3.length === 0){
    fs.appendFileSync(root + '/' + name + '/src/audio.js', '\r}', "utf-8")
  }else{
    _myPathArr3.forEach(function(item, index) {
      if(index === 0){
        fs.appendFileSync(root + '/' + name + '/src/audio.js', ',\r//音效\r', "utf-8")
      }
      if(index === _myPathArr3.length - 1){
        var _str = `${item.replace('.mp3','_sound')}: function() {
    cc.audioEngine.playEffect(res.${item.replace('.mp3','_sound')})
  }
  }`
      }else{
        var _str = `${item.replace('.mp3','_sound')}: function() {
    cc.audioEngine.playEffect(res.${item.replace('.mp3','_sound')})
  },\r`
      }
      fs.appendFileSync(root + '/' + name + '/src/audio.js', _str, "utf-8")
    })
  }
}

if (options._.length === 0 && options.build) {
  
}
