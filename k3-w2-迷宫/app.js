var BASE_URL = window.location.protocol + '//' + document.domain + '/v2/'
var Route = {
  AUTH_URL: BASE_URL + 'index/game/auth',
  TASK_URL: BASE_URL + 'index/game/theme/task',
  REPORT_URL: BASE_URL + 'index/game/task/report'
}
var mag = []
var browser = {
  versions: (function () {
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

function createXHR () {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest()
  } else if (typeof ActiveXObject !== 'undefined') {
    var version = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp']
    for (var i = 0; i < version.length; i++) {
      try { return new ActiveXObject(version[i]) } catch (e) { }
    }
  } else { }
}

var App = {
  data: { 'token': '', 'student_id': '', 'category_id': '', 'trade_status': '', 'theme_id': '' },
  // 跳转到支付
  goPay: function (res) {
    console.log('发起支付...')
    if (browser.versions.android) {
      Android.gotopay(res)
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:gotopay=' + res
    } else {
      console.log('不支持的平台')
    }
  },
  // 默认的返回或关闭
  jsBack: function (opt) {
    if (!opt) {
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
  showHeader: function () {
    if (browser.versions.android) {
      Android.showhomeheader()
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:showhomeheader'
    } else {
      console.log('不支持的平台')
    }
  },
  // 隐藏头信息
  hideHeader: function () {
    if (browser.versions.android) {
      Android.hidehomeheader()
    } else if (browser && (browser.versions.iPhone || browser.versions.iPad || browser.versions.iPod)) {
      window.location.href = 'jsback:hidehomeheader'
    } else {
      console.log('不支持的平台')
    }
  },
  Ajax: function (obj) {
    var xhr = createXHR()
    obj.url = obj.url + '?rand=' + Math.random()
    obj.data = App.setP(obj.data)
    if (obj.type === 'get' || obj.type === 'GET') {
      obj.url += obj.url.indexOf('?') == '-1' ? '?' + obj.data : '&' + obj.data
    }
    if (obj.async === true) {
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { callBack() }
      }
    }
    xhr.open(obj.type, obj.url, obj.async)
    if (obj.type === 'post' || obj.type === 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send(obj.data)
    } else {
      xhr.send(null)
    }
    if (obj.async === false) { callBack() }
    function callBack () {
      if (xhr.status == 200) {
        obj.success(xhr.responseText)
      }
    }
  },
  /**
     * 游戏数据上报接口
     * var data = {
     *   'task_id': '58ad4cccc4e3e6383e960beecb8f8c10', //游戏id
     *   'is_finish': 1,                                //是否完成
     *   'finish_star':5,                               // 获得多少颗星星
     *   'finish_steps': 10,                            //总共操作步骤数
     *   'finish_time': 120                             //操作用时
     * };
     * 所有游戏引用app.js ,并收集好数据后，通过App.report(data);提交数据。
     * @param data
     */
  report: function (data) {
    var obj = {}
    if (data) {
      var params = App.getP('token')
      obj.token = App.getP('token')
      data.student_id = App.getP('student_id')
      obj.data = JSON.stringify(data)
      App.Ajax({
        'type': 'post',
        'data': obj,
        'async': true,
        'url': Route.REPORT_URL,
        'success': function (res) {
          eval('var res=' + res + ';')
          console.log(res)
        }
      })
    }
  },
  init: function () {
    if (App.getP('token')) {
      App.data.token = App.getP('token')
    }
    if (App.getP('trade_status')) {
      App.data.trade_status = App.getP('trade_status')
    }
    if (App.getP('category_id')) {
      App.data.category_id = App.getP('category_id')
    }
    if (App.getP('student_id')) {
      App.data.student_id = App.getP('student_id')
    }
    if (App.getP('theme_id')) {
      App.data.theme_id = App.getP('theme_id')
    }
  },
  getP: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var parameters = window.location.search.substr(1).match(reg)
    if (parameters) {
      return parameters[2]
    }
    return null
  },
  setP: function (params) {
    if (params) {
      var arr = []
      for (var param in params) {
        arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]))
      }
      return arr.join('&')
    }
    return null
  },
  parseUrl: function (url, params) {
    if (!params) {
      params = App.data
    }
    var uri = App.setP(params)
    if (url.indexOf('?') === -1) {
      url += '?r=' + Math.random()
    }
    if (uri) {
      url += '&' + uri
    }
    return url
  }
}
App.init()
