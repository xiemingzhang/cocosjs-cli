var BASE_URL = window.location.protocol + '//' + document.domain + '/v4/'
// var BASE_URL = window.location.protocol + '//' + 'api.miyamibao.com' + '/v4/';
var Route = {
  REPORT_URL: 'index/game/task/report',
  SUB_RECORD_URL: 'parent/assignment/task/child/save',
  GET_RECORD_URL: 'parent/assignment/task/content',
  UPIMG_AWS_URL: 'upload/aws'
}
var mag = []
var browser = {
  versions: (function() {
    var u = navigator.userAgent
    var app = navigator.appVersion
    return {
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1,
      iPad: u.indexOf('iPad') > -1,
      iPod: u.indexOf('iPod') > -1,
      webApp: u.indexOf('Safari') == -1
    }

  }()),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

function createXHR(){
  if(typeof XMLHttpRequest !== 'undefined'){
    return new XMLHttpRequest()
  }else if(typeof ActiveXObject !== 'undefined'){
    var version = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp']
    for(var i = 0; i < version.length; i++){
      try{return new ActiveXObject(version[i])}catch(e){}
    }
  }else{}
}

var App = {
  data: {'token': '', 'student_id': '', 'category_id': '', 'trade_status': '', 'theme_id': ''},
  // 跳转到支付
  goPay: function(res){
    console.log('发起支付...')
    if (browser.versions.android) {
      Android.gotopay(res)
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)){
      window.location.href = 'jsback:gotopay=' + res
    }else{
      console.log('不支持的平台')
    }
  },
  // 默认的返回或关闭
  jsBack: function(opt){
    if(!opt){
      opt = 'close'
    }
    try {
      if (browser && browser.versions.android) {
        Android.doback(opt)
      } else if (browser && (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad)) {
        window.location.href = 'jsback:doback=' + opt
      }
    } catch (e) {
      console.log(e)
    }
  },
  // 显示头信息
  showHeader: function(){
    if (browser.versions.android) {
      Android.showhomeheader()
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)){
      window.location.href = 'jsback:showhomeheader'
    }else{
      console.log('不支持的平台')
    }
  },
  // 隐藏头信息
  hideHeader: function(){
    if (browser.versions.android) {
      Android.hidehomeheader()
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)){
      window.location.href = 'jsback:hidehomeheader'
    }else{
      console.log('不支持的平台')
    }
  },
  // 开始
  recordStart: function () {
    var gameID = 'gameID123'
    if (browser.versions.android) {
      Android.recordstart(gameID)
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:recordstart=' + gameID
    } else {
      console.log('不支持的平台')
    }
  },
  // 暂停
  recordEnd: function () {
    if (browser.versions.android) {
      Android.recordend()
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:recordend'
    } else {
      console.log('不支持的平台')
    }
  },
  // 播放
  recordPlay: function () {
    if (browser.versions.android) {
      Android.recordPlay()
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:recordPlay'
    } else {
      console.log('不支持的平台')
    }
  },
  // 截屏
  screenshotsStart: function () {
    var gameID = 'gameID123'
    if (browser.versions.android) {
      Android.screenshotsStart(gameID)
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:screenshotsStart=' + gameID
    } else {
      console.log('不支持的平台')
    }
  },
  // 拍照
  takePhotoStart: function () {
    var gameID = 'gameID123'
    if (browser.versions.android) {
      Android.takePhotoStart(gameID)
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:takePhotoStart=' + gameID
    } else {
      console.log('不支持的平台')
    }
  },
  screenshotsResult: function (obj) {
    // date = JSON.stringify(screenshotsResult)
    // var box = document.getElementById("box");
    document.getElementById('img').src = obj
  },
  recordResult: function (obj) {
    // date = JSON.stringify(screenshotsResult)
    // var box = document.getElementById("box");
    document.getElementById('music1').src = obj
  },
  takePhotoResult: function (obj) {
    // date = JSON.stringify(screenshotsResult)
    // var box = document.getElementById("box");
    document.getElementById('img').src = obj
  },
  Ajax: function(obj){
    var xhr = createXHR()
    obj.url = obj.url + '?rand=' + Math.random()
    obj.data = App.setP(obj.data)
    if(obj.type === 'get' || obj.type === 'GET'){
      obj.url += obj.url.indexOf('?') == '-1' ? '?' + obj.data : '&' + obj.data
    }
    if(obj.async === true){
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){callBack()}
      }
    }
    xhr.open(obj.type, obj.url, obj.async)
    if(obj.type === 'post' || obj.type === 'POST'){
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send(obj.data)
    }else{
      xhr.send(null)
    }
    if(obj.async === false){callBack()}
    function callBack(){
      if(xhr.status == 200){
        obj.success(xhr.responseText)
      }
    }
  },
  report: function (data) {
    var obj = {}
    if (data) {
      // 修改 id
      var url = window.location.href
      var urlArr = url.split('/')
      // 如果是线上
      if(urlArr.indexOf('game.miyamibao.com') !== -1){
        var taskID = url.split('/')[4]
        // 如果是本地
      }else{
        var taskID = App.getP('task_id')
      }

      data.task_id = taskID
      // 上报连接
      var hostURL = BASE_URL
      if(App.getP('hostURL')){
        hostURL = App.getP('hostURL')
      }
      // 替换 game 为 api
      var hostArr = hostURL.split('/')
      hostArr.forEach(function(item, index){
        if(item == 'game.miyamibao.com'){
          hostArr[index] = item.replace(/game/g, 'api')
          return false
        }
      })
      hostURL = hostArr.join('/')

      var params = App.getP('token')
      obj.token = App.getP('token')
      data.student_id = App.getP('student_id')
      obj.data = JSON.stringify(data)
      App.Ajax({
        'type': 'post',
        'data': obj,
        'async': true,
        'url': hostURL + Route.REPORT_URL,
        'success': function (res) {
          eval('var res=' + res + ';')
          console.log(res)
        }
      })
    }
  },
  subData: function (data) {
    var obj = {}
    if (data) {
      // 修改 id
      var url = window.location.href
      var urlArr = url.split('/')
      // 如果是线上
      if(urlArr.indexOf('game.miyamibao.com') !== -1){
        var taskID = url.split('/')[4]
        // 如果是本地
      }else{
        var taskID = App.getP('task_id')
      }

      data.task_id = taskID
      // 上报连接
      var hostURL = BASE_URL
      if(App.getP('hostURL')){
        hostURL = App.getP('hostURL')
      }
      // 替换 game 为 api
      var hostArr = hostURL.split('/')
      hostArr.forEach(function(item, index){
        if(item == 'game.miyamibao.com'){
          hostArr[index] = item.replace(/game/g, 'api')
          return false
        }
      })
      hostURL = hostArr.join('/')

      var params = App.getP('token')
      obj.task_id = taskID
      obj.token = App.getP('token')
      obj.data = JSON.stringify(data.data)
      obj.type = data.type

      console.log(obj)
      App.Ajax({
        'type': 'post',
        'data': obj,
        'async': true,
        'url': hostURL + Route.SUB_RECORD_URL,
        'success': function (res) {
          setTimeout(function(){startScene.finish(2)}, 0)
          console.log(res)
          // if(res.status == 1){
          //   myScene.gameEnd();
          // }
        }
      })
    }
  },
  upImg: function(file) {
    // 上报连接
    var hostURL = BASE_URL
    if(App.getP('hostURL')){
      hostURL = App.getP('hostURL')
    }
    // 替换 game 为 api
    var hostArr = hostURL.split('/')
    hostArr.forEach(function(item, index){
      if(item == 'game.miyamibao.com'){
        hostArr[index] = item.replace(/game/g, 'api')
        return false
      }
    })
    hostURL = hostArr.join('/')

    var token = App.getP('token')

    var formData = new FormData()
    // 完成提交数据
    console.log(file)
    formData.append('file_name', file)
    formData.append('token', token)

    console.log(hostURL + Route.UPIMG_AWS_URL)

    $.ajax({
      type: 'post',
      data: formData,
      url: hostURL + Route.UPIMG_AWS_URL,
      dataType: 'json',
      processData: false,
      contentType: false,
      async: false,
      'success': function (res) {
        // eval('var res=' + res + ';')
        console.log(res)
        if(res.status == 1){
          console.log(res.data.url)
          // App.screenshotsResult(obj)
          screenImg.data[0].url = res.data.url
          // startScene.finish(0.1)
          // 上传截图
          console.log(screenImg)
          App.subData(screenImg)
          screenImg = {
            type: 2, // type为1是音效，2是截图
            data: [{'page': 1, 'url': ''}] // 内部数组的第一项是页数，第二项是图片路径
          }
        }
      },
      err: function (err) {
        setTimeout(function(){startScene.finish(2)}, 0)
        console.log(err)
      }
    })
  },
  getRcord: function () {
    var obj = {}
    // 修改 id
    var url = window.location.href
    var urlArr = url.split('/')

    var taskID = App.getP('task_id')

    // 上报连接
    var hostURL = BASE_URL
    if(App.getP('hostURL')){
      hostURL = App.getP('hostURL')
    }
    // 替换 game 为 api
    var hostArr = hostURL.split('/')
    hostArr.forEach(function(item, index){
      if(item == 'game.miyamibao.com'){
        hostArr[index] = item.replace(/game/g, 'api')
        return false
      }
    })
    hostURL = hostArr.join('/')

    obj.task_id = taskID
    obj.student_id = App.getP('student_id')
    obj.token = App.getP('token')

    console.log(obj)
    App.Ajax({
      'type': 'get',
      'data': obj,
      'async': true,
      'url': hostURL + Route.GET_RECORD_URL,
      'success': function (res) {
        var res = JSON.parse(res)
        console.log(res.status)
        if(res.status == '1'){
          babyData = res.data
        }
      }
    })
  },
  init: function(){
    if(App.getP('token')){
      App.data.token = App.getP('token')
    }
    if(App.getP('trade_status')){
      App.data.trade_status = App.getP('trade_status')
    }
    if(App.getP('category_id')){
      App.data.category_id = App.getP('category_id')
    }
    if(App.getP('student_id')){
      App.data.student_id = App.getP('student_id')
    }
    if(App.getP('theme_id')){
      App.data.theme_id = App.getP('theme_id')
    }
  },
  getP: function(name){
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var parameters = window.location.search.substr(1).match(reg)
    if (parameters) {
      return parameters[2]
    }
    return null
  },
  setP: function(params){
    if(params){
      var arr = []
      for(var param in params){
        arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]))
      }
      return arr.join('&')
    }
    return null
  },
  parseUrl: function(url, params){
    if(!params){
      params = App.data
    }
    var uri = App.setP(params)
    if(url.indexOf('?') === -1){
      url += '?r=' + Math.random()
    }
    if(uri){
      url += '&' + uri
    }
    return url
  }
}
App.init()

// var screenshotsResult = function (obj) {
//   // App.screenshotsResult(obj)
//   screenImg.data[0].url = obj
//   // startScene.finish(0.1)
//   // 上传截图
//   cc.log(screenImg)
//   App.subData(screenImg)
//   screenImg = {
//     type: 2, // type为1是音效，2是截图
//     data: [{'page': 1, 'url': ''}] // 内部数组的第一项是页数，第二项是图片路径
//   }
// }

