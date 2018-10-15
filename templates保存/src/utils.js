// deep拷贝
function deepCopy(o) {
  if (o instanceof Array) {
    var n = []
    for (var i = 0; i < o.length; ++i) {
      n[i] = deepCopy(o[i])
    }
    return n

  } else if (o instanceof Object) {
    var n = {}
    for (var i in o) {
      n[i] = deepCopy(o[i])
    }
    return n
  }
  return o
}
// 随机排序
function shuffle(arr){
  var len = arr.length
  if(len === 0){
    return []
  }
  if(len === 1){
    return arr
  }
  var arr1 = deepCopy(arr)
  for(var i = 0; i < len - 1; i++){
    var idx = Math.floor(Math.random() * (len - i))
    var temp = arr1[idx]
    arr1[idx] = arr1[len - i - 1]
    arr1[len - i - 1] = temp
  }
  // if(JSON.stringify(arr) === JSON.stringify(arr1)){
  //   console.log('相等')
  //   return shuffle(arr)
  // }
  return arr1
}
// 完全打乱顺序，没有一项是相同的
// shuffletwo:function(arr) {
//  // cc.log("arr,arr1,flag")
//  var len = arr.length;
//  if(len === 0){
//      return;
//  }
//  if(len === 1){
//      return;
//  }
//  var arr1 = shuffle(arr);
//  var flag = true;
//  for(var i = 0;i < len ;i++){
//      if(arr[i] === arr1[i]){
//          flag = false;
//      }
//  }
//  if(flag){
//      return arr1;
//  }
//  return this.shuffletwo(arr);

// },
function contains(a, obj) { // 检查数组中是否包含指定的值 并返回建值
  var i = a.length
  while (i--) {
    if (a[i] === obj) {
      return i
    }
  }
  return false
}
function randomArray(numbers, countNum){ // 返回指定长度的数组 值为指定数字长度的随机数
  for (var i = 0; i < numbers; i++) {
    var num = Math.round(Math.random() * numbers)
    if(contains(countNum, num) === false && countNum.length < numbers && num !== numbers){
      countNum.push(num)
    }
  }
  if(countNum.length < numbers){
    return randomArray(numbers, countNum)
  }else{
    return countNum
  }
}
// 快速生成0到100的数组
// var _arr = Array.apply(null, Array(len)).map(function(item, i) {
//   return i
// })
// var arr = new Array(100)
// var i = arr.length
// while(i--){arr[i] = i}
