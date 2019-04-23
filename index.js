#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const readline = require('readline');

const options = require('minimist')(process.argv.slice(2))

const optionsName = require('minimist')(process.argv.slice(2), {
    string: ['new', 'res', 'newCourse']
})

//判断文件名
function extname(pathStr) {
    var temp = /(\.[^\.\/\?\\]*)$/.exec(pathStr);
    return temp ? temp[1] : null;
}

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
        '    new <ProjectName> generates a new project for game',
        '    newCourse <ProjectName> generates a new project for course',
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
var _name //游戏名字或者课件名字

if (options._.length === 0 && options.new) {
    temp_path = "template"
    if(optionsName.new){
      init(options.new)
    }else{
      console.log('default project is cocos2d-html-proj')
      init('cocos2d-html-game')
    }
    // process.exit(0)
}

if (options._.length === 0 && options.newCourse) {
    temp_path = "courseTemplate"
    if(optionsName.newCourse){
      init(options.newCourse)
    }else{
      console.log('default project is cocos2d-html-proj')
      init('cocos2d-html-course')
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
    _name = name
    let root = path.resolve(name);

    // var projectName = path.basename(root);
    let templatesPath = path.join(__dirname, temp_path);

    console.log(
        'This will create a new cocos2d-html project in',
        root
    );

    if (!fs.existsSync(root)) {
        fs.mkdirSync(root);
        // fs.mkdirSync(root+'/'+path.basename(root));
        // // traverse(templatesPath, root)   
        traverse(templatesPath, root)  
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
    reHtml = _html.replace(/<title>([\s\S]){1,}<\/title>/gm, '<title>'+ _name +'</title>')
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

// function exists(_path){

//     return fs.stat(_path);

// }

// // 判断是不是文件：

// function isFile(_path){

//     return exists(_path) && fs.statSync(_path).isFile();

// }

//     // 判断是不是目录：

// function isDir(_path){

//     return exists(_path) && fs.statSync(_path).isDirectory();

// }
function createResource(name){
  let root = path.resolve(name);

  let _string1 = `var res = {
    // 公共声音
    Right_audio: 'common/audios/right.mp3',
    Wrong_audio: 'common/audios/wrong.mp3',
    Win_audio: 'common/audios/celebration.mp3',
    Star_audio: 'common/audios/star.mp3',
    Button_audio: 'common/audios/button.mp3',

    // 公共图片
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

  fs.writeFileSync(root + '/src/resource.js', _string1, "utf-8");
  //添加游戏图片
  const paths1 = fs.readdirSync(root + '/res/Normal/source');

  let _myPathArr1 = []
  
  paths1.forEach(_path => {
      var pic = /\.(png|img)/i;
        if(pic.test(_path)){
          _myPathArr1.push(_path)
        }else{
          fs.stat(root + '/res/Normal/source' + '/' + _path, function(err, stats){
            if(stats.isDirectory()){
              console.log(root + '/res/Normal/source' + '/' + _path);
            }else{
              console.log(`${_path}:图片类型错误`);
            }
          })
        }
    });

  // _myPathArr1 = _myPathArr1.filter(function(item){
  //   if(item !== 'bg.png'){
  //     return item
  //   }
  // })

  if(_myPathArr1.length !== 0){
    _myPathArr1.forEach(function(item, index) {
      var pic1 = /\.(png)/i;
      if(index === 0){
        fs.appendFileSync(root + '/src/resource.js', ',\r\r//source图片\r', "utf-8")
      }
      if(index === _myPathArr1.length - 1){
        // var _str = `${item.replace('\.png','')}: 'source/${item}'\r}\r\r`
        if(pic1.test(item)){
          var _str = `${item.replace(extname(item),'')}: 'source/${item}'`
        }else{
          var _str = `${item.replace(extname(item),'')}: 'source/${item}'`
        }
      }else{
        if(pic1.test(item)){
          var _str = `${item.replace(extname(item),'')}: 'source/${item}',\r`
        }else{
          var _str = `${item.replace(extname(item),'')}: 'source/${item}',\r`
        }
      }
      fs.appendFileSync(root + '/src/resource.js', _str, "utf-8")
    })
  }

  // 添加配音
  // const paths2 = fs.readdirSync(root + '/res/Normal/audio/voice');

  // let _myPathArr2 = []
  // paths2.forEach(_path => {
  //     var pic = /\.(mp3)/g;
  //       if(pic.test(_path)){
  //         _myPathArr2.push(_path)
  //       }else{
  //         console.log(`${_path}:配音类型错误`);
  //       }
  //   });

  // _myPathArr2 = _myPathArr2.filter(function(item){
  //   if(item !== 'game_info.mp3'){
  //     return item
  //   }
  // })

  // if(_myPathArr2.length !== 0){
  //   _myPathArr2.forEach(function(item, index) {
  //     if(index === 0){
  //       fs.appendFileSync(root + '/src/resource.js', ',\r\r//source配音\r', "utf-8")
  //     }
  //     if(index === _myPathArr2.length - 1){
  //       // var _str = `${item.replace('.mp3','_audio')}: 'audio/voice/${item}'\r}\r\r`
  //       var _str = `${item.replace('.mp3','_audio')}: 'audio/voice/${item}'`
  //     }else{
  //       var _str = `${item.replace('.mp3','_audio')}: 'audio/voice/${item}',\r`
  //     }
  //     fs.appendFileSync(root + '/src/resource.js', _str, "utf-8")
  //   })
  // }

  // 添加音
  const paths3 = fs.readdirSync(root + '/res/Normal/audio');

  let _myPathArr3 = []
  paths3.forEach(_path => {
      var pic = /\.(mp3|wav)/i;
        if(pic.test(_path)){
          _myPathArr3.push(_path)
        }else{
          console.log(`${_path}:声音类型错误`);
        }
    });

  // _myPathArr3 = _myPathArr3.filter(function(item){
  //   if(item !== 'bgm_happy.mp3'){
  //     return item
  //   }
  // })

  if(_myPathArr3.length === 0){
    fs.appendFileSync(root + '/src/resource.js', '\r}\r\r', "utf-8")
  }else{
    _myPathArr3.forEach(function(item, index) {
      var pic1 = /\.mp3/i;
      // var pic2 = /\.wav/i;
      if(index === 0){
        fs.appendFileSync(root + '/src/resource.js', ',\r\r//source声音\r', "utf-8")
      }
      if(index === _myPathArr3.length - 1){
        if(pic1.test(item)){
          var _str = `${item.replace(extname(item),'_sound')}: 'audio/${item}'\r}\r\r`
        }else{
          var _str = `${item.replace(extname(item),'_sound')}: 'audio/${item}'\r}\r\r`
        }
      }else{
        if(pic1.test(item)){
          var _str = `${item.replace(extname(item),'_sound')}: 'audio/${item}',\r`
        }else{
          var _str = `${item.replace(extname(item),'_sound')}: 'audio/${item}',\r`
        }
      }
      fs.appendFileSync(root + '/src/resource.js', _str, "utf-8")
    })
  }

  let _string2 = `/* 预加载资源*/
  var g_resources = []
  for (var i in res) {
    g_resources.push(res[i])
  }`

  fs.appendFileSync(root + '/src/resource.js', _string2, "utf-8")
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
    voice: function (voice) {
      cc.audioEngine.playEffect(voice)
    },
    voiceTrue: function (voice) {
      cc.audioEngine.playEffect(voice, true)
    },
    // 个性
    gameBgAudio: function () {// 背景
      cc.audioEngine.playMusic(res.bgm_happyday_sound, true)
      cc.audioEngine.setMusicVolume(0.2)
    }`

  fs.writeFileSync(root + '/src/audio.js', _string1, "utf-8");

  // 添加配音方法
  // const paths2 = fs.readdirSync(root + '/res/Normal/audio/voice');

  // let _myPathArr2 = []
  // paths2.forEach(_path => {
  //     var pic = /\.(mp3)/g;
  //       if(pic.test(_path)){
  //         _myPathArr2.push(_path)
  //       }
  //   });

  // _myPathArr2 = _myPathArr2.filter(function(item){
  //   if(item !== 'game_info.mp3'){
  //     return item
  //   }
  // })

  // if(_myPathArr2.length !== 0){
  //   _myPathArr2.forEach(function(item, index) {
  //     if(index === 0){
  //       fs.appendFileSync(root + '/src/audio.js', ',\r//配音\r', "utf-8")
  //     }    
  //     if(index === _myPathArr2.length - 1){
  //       var _str = `${item.replace('.mp3','_audio')}: function() {
  //   cc.audioEngine.playEffect(res.${item.replace('.mp3','_audio')})
  // }`
  //     }else{
  //       var _str = `${item.replace('.mp3','_audio')}: function() {
  //   cc.audioEngine.playEffect(res.${item.replace('.mp3','_audio')})
  // },\r`
  //     }

  //     fs.appendFileSync(root + '/src/audio.js', _str, "utf-8")
  //   })
  // }

  // 添加声音方法
  const paths3 = fs.readdirSync(root + '/res/Normal/audio');

  let _myPathArr3 = []
  paths3.forEach(_path => {
      var pic = /\.(mp3|wav)/ig;
        if(pic.test(_path)){
          _myPathArr3.push(_path)
        }
    });

  // _myPathArr3 = _myPathArr3.filter(function(item){
  //   if(item !== 'bgm_happy.mp3'){
  //     return item
  //   }
  // })

  if(_myPathArr3.length === 0){
    fs.appendFileSync(root + '/src/audio.js', '\r}', "utf-8")
  }else{
    var pic1 = /\.mp3/i;
    _myPathArr3.forEach(function(item, index) {
      if(index === 0){
        fs.appendFileSync(root + '/src/audio.js', ',\r//声音\r', "utf-8")
      }
      if(index === _myPathArr3.length - 1){

        if(pic1.test(item)){
          var _str = `${item.replace(extname(item),'_sound')}: function() {
    cc.audioEngine.playEffect(res.${item.replace('.mp3','_sound')})
  }
  }`
        }else{
          var _str = `${item.replace(extname(item),'_sound')}: function() {
    cc.audioEngine.playEffect(res.${item.replace('.wav','_sound')})
  }
  }`
        }
        
      }else{
        if(pic1.test(item)){
          var _str = `${item.replace(extname(item),'_sound')}: function() {
    cc.audioEngine.playEffect(res.${item.replace('.mp3','_sound')})
  },\r`
        }else{
          var _str = `${item.replace(extname(item),'_sound')}: function() {
    cc.audioEngine.playEffect(res.${item.replace('.wav','_sound')})
  },\r`
        }
        
      }
      fs.appendFileSync(root + '/src/audio.js', _str, "utf-8")
    })
  }
}

if (options._.length === 0 && options.build) {
  
}
