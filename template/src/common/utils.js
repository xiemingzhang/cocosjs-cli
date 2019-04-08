// ---------------------------参考https://github.com/adobe-webplatform/Snap.svg/blob/master/dist/snap.svg.js
function parsePathString(pathString) {
  if (!pathString) {
    return null
  }
  var pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig,
    paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
    data = []

  if (!data.length) {
    String(pathString).replace(pathCommand, function(a, b, c) {
      var params = [],
        name = b.toLowerCase()
      c.replace(pathValues, function(a, b) {
        b && params.push(+b)
      })
      if (name == 'm' && params.length > 2) {
        data.push([b].concat(params.splice(0, 2)))
        name = 'l'
        b = b == 'm' ? 'l' : 'L'
      }
      if (name == 'o' && params.length == 1) {
        data.push([b, params[0]])
      }
      if (name == 'r') {
        data.push([b].concat(params))
      } else {
        while (params.length >= paramCounts[name]) {
          data.push([b].concat(params.splice(0, paramCounts[name])))
          if (!paramCounts[name]) {
            break
          }
        }
      }
    })
  }
  return data
}

function pathToAbsolute(pathArray) {
  pathArray = parsePathString(pathArray)
  var res = [],
    x = 0,
    y = 0,
    mx = 0,
    my = 0,
    start = 0,
    pa0
  if (pathArray[0][0] == 'M') {
    x = +pathArray[0][1]
    y = +pathArray[0][2]
    mx = x
    my = y
    start++
    res[0] = ['M', x, y]
  }
  var crz = pathArray.length == 3 &&
            pathArray[0][0] == 'M' &&
            pathArray[1][0].toUpperCase() == 'R' &&
            pathArray[2][0].toUpperCase() == 'Z'
  for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
    res.push(r = [])
    pa = pathArray[i]
    pa0 = pa[0]
    if (pa0 != pa0.toUpperCase()) {
      r[0] = pa0.toUpperCase()
      switch (r[0]) {
        case 'A':
          r[1] = pa[1]
          r[2] = pa[2]
          r[3] = pa[3]
          r[4] = pa[4]
          r[5] = pa[5]
          r[6] = +pa[6] + x
          r[7] = +pa[7] + y
          break
        case 'V':
          r[1] = +pa[1] + y
          break
        case 'H':
          r[1] = +pa[1] + x
          break
        case 'R':
          var dots = [x, y].concat(pa.slice(1))
          for (var j = 2, jj = dots.length; j < jj; j++) {
            dots[j] = +dots[j] + x
            dots[++j] = +dots[j] + y
          }
          res.pop()
          res = res.concat(catmullRom2bezier(dots, crz))
          break
        case 'O':
          res.pop()
          dots = ellipsePath(x, y, pa[1], pa[2])
          dots.push(dots[0])
          res = res.concat(dots)
          break
        case 'U':
          res.pop()
          res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]))
          r = ['U'].concat(res[res.length - 1].slice(-2))
          break
        case 'M':
          mx = +pa[1] + x
          my = +pa[2] + y
          break
        default:
          for (j = 1, jj = pa.length; j < jj; j++) {
            r[j] = +pa[j] + (j % 2 ? x : y)
          }
      }
    } else if (pa0 == 'R') {
      dots = [x, y].concat(pa.slice(1))
      res.pop()
      res = res.concat(catmullRom2bezier(dots, crz))
      r = ['R'].concat(pa.slice(-2))
    } else if (pa0 == 'O') {
      res.pop()
      dots = ellipsePath(x, y, pa[1], pa[2])
      dots.push(dots[0])
      res = res.concat(dots)
    } else if (pa0 == 'U') {
      res.pop()
      res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]))
      r = ['U'].concat(res[res.length - 1].slice(-2))
    } else {
      for (var k = 0, kk = pa.length; k < kk; k++) {
        r[k] = pa[k]
      }
    }
    pa0 = pa0.toUpperCase()
    if (pa0 != 'O') {
      switch (r[0]) {
        case 'Z':
          x = +mx
          y = +my
          break
        case 'H':
          x = r[1]
          break
        case 'V':
          y = r[1]
          break
        case 'M':
          mx = r[r.length - 2]
          my = r[r.length - 1]
          break
        default:
          x = r[r.length - 2]
          y = r[r.length - 1]
      }
    }
  }
  function ellipsePath(x, y, rx, ry, a) {
    if (a == null && ry == null) {
      ry = rx
    }
    x = +x
    y = +y
    rx = +rx
    ry = +ry
    if (a != null) {
      var rad = Math.PI / 180,
        x1 = x + rx * Math.cos(-ry * rad),
        x2 = x + rx * Math.cos(-a * rad),
        y1 = y + rx * Math.sin(-ry * rad),
        y2 = y + rx * Math.sin(-a * rad),
        res = [['M', x1, y1], ['A', rx, rx, 0, +(a - ry > 180), 0, x2, y2]]
    } else {
      res = [
        ['M', x, y],
        ['m', 0, -ry],
        ['a', rx, ry, 0, 1, 1, 0, 2 * ry],
        ['a', rx, ry, 0, 1, 1, 0, -2 * ry],
        ['z']
      ]
    }
    return res
  }

  // http://schepers.cc/getting-to-the-point
  function catmullRom2bezier(crp, z) {
    var d = []
    for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
      var p = [
        {x: +crp[i - 2], y: +crp[i - 1]},
        {x: +crp[i], y: +crp[i + 1]},
        {x: +crp[i + 2], y: +crp[i + 3]},
        {x: +crp[i + 4], y: +crp[i + 5]}
      ]
      if (z) {
        if (!i) {
          p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]}
        } else if (iLen - 4 == i) {
          p[3] = {x: +crp[0], y: +crp[1]}
        } else if (iLen - 2 == i) {
          p[2] = {x: +crp[0], y: +crp[1]}
          p[3] = {x: +crp[2], y: +crp[3]}
        }
      } else {
        if (iLen - 4 == i) {
          p[3] = p[2]
        } else if (!i) {
          p[0] = {x: +crp[i], y: +crp[i + 1]}
        }
      }
      d.push(['C',
        (-p[0].x + 6 * p[1].x + p[2].x) / 6,
        (-p[0].y + 6 * p[1].y + p[2].y) / 6,
        (p[1].x + 6 * p[2].x - p[3].x) / 6,
        (p[1].y + 6 * p[2].y - p[3].y) / 6,
        p[2].x,
        p[2].y
      ])
    }

    return d
  }

  return res
}

function path2curve(path, path2) {
  var p = pathToAbsolute(path),
    attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
    // attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
    processPath = function(path, d, pcom) {
      var nx, ny
      if (!path) {
        return ['C', d.x, d.y, d.x, d.y, d.x, d.y]
      }
      !(path[0] in {T: 1, Q: 1}) && (d.qx = d.qy = null)
      switch (path[0]) {
        case 'M':
          d.X = path[1]
          d.Y = path[2]
          break
        case 'A':
          path = ['C'].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))))
          break
        case 'S':
          if (pcom == 'C' || pcom == 'S') { // In "S" case we have to take into account, if the previous command is C/S.
            nx = d.x * 2 - d.bx // And reflect the previous
            ny = d.y * 2 - d.by // command's control point relative to the current point.
          } else { // or some else or nothing
            nx = d.x
            ny = d.y
          }
          path = ['C', nx, ny].concat(path.slice(1))
          break
        case 'T':
          if (pcom == 'Q' || pcom == 'T') { // In "T" case we have to take into account, if the previous command is Q/T.
            d.qx = d.x * 2 - d.qx // And make a reflection similar
            d.qy = d.y * 2 - d.qy // to case "S".
          } else { // or something else or nothing
            d.qx = d.x
            d.qy = d.y
          }
          path = ['C'].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]))
          break
        case 'Q':
          d.qx = path[1]
          d.qy = path[2]
          path = ['C'].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]))
          break
        case 'L':
          path = ['C'].concat(l2c(d.x, d.y, path[1], path[2]))
          break
        case 'H':
          path = ['C'].concat(l2c(d.x, d.y, path[1], d.y))
          break
        case 'V':
          path = ['C'].concat(l2c(d.x, d.y, d.x, path[1]))
          break
        case 'Z':
          path = ['C'].concat(l2c(d.x, d.y, d.X, d.Y))
          break
      }
      function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = Math.PI * 120 / 180,
          rad = Math.PI / 180 * (+angle || 0),
          res = [],
          xy,
          rotate = function(x, y, rad) {
            var X = x * Math.cos(rad) - y * Math.sin(rad),
              Y = x * Math.sin(rad) + y * Math.cos(rad)
            return {x: X, y: Y}
          }
        if (!rx || !ry) {
          return [x1, y1, x2, y2, x2, y2]
        }
        if (!recursive) {
          xy = rotate(x1, y1, -rad)
          x1 = xy.x
          y1 = xy.y
          xy = rotate(x2, y2, -rad)
          x2 = xy.x
          y2 = xy.y
          var cos = Math.cos(Math.PI / 180 * angle),
            sin = Math.sin(Math.PI / 180 * angle),
            x = (x1 - x2) / 2,
            y = (y1 - y2) / 2
          var h = x * x / (rx * rx) + y * y / (ry * ry)
          if (h > 1) {
            h = Math.sqrt(h)
            rx = h * rx
            ry = h * ry
          }
          var rx2 = rx * rx,
            ry2 = ry * ry,
            k = (large_arc_flag == sweep_flag ? -1 : 1) *
                    Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
            cx = k * rx * y / ry + (x1 + x2) / 2,
            cy = k * -ry * x / rx + (y1 + y2) / 2,
            f1 = Math.asin(((y1 - cy) / ry).toFixed(9)),
            f2 = Math.asin(((y2 - cy) / ry).toFixed(9))

          f1 = x1 < cx ? Math.PI - f1 : f1
          f2 = x2 < cx ? Math.PI - f2 : f2
          f1 < 0 && (f1 = Math.PI * 2 + f1)
          f2 < 0 && (f2 = Math.PI * 2 + f2)
          if (sweep_flag && f1 > f2) {
            f1 = f1 - Math.PI * 2
          }
          if (!sweep_flag && f2 > f1) {
            f2 = f2 - Math.PI * 2
          }
        } else {
          f1 = recursive[0]
          f2 = recursive[1]
          cx = recursive[2]
          cy = recursive[3]
        }
        var df = f2 - f1
        if (Math.abs(df) > _120) {
          var f2old = f2,
            x2old = x2,
            y2old = y2
          f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1)
          x2 = cx + rx * Math.cos(f2)
          y2 = cy + ry * Math.sin(f2)
          res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy])
        }
        df = f2 - f1
        var c1 = Math.cos(f1),
          s1 = Math.sin(f1),
          c2 = Math.cos(f2),
          s2 = Math.sin(f2),
          t = Math.tan(df / 4),
          hx = 4 / 3 * rx * t,
          hy = 4 / 3 * ry * t,
          m1 = [x1, y1],
          m2 = [x1 + hx * s1, y1 - hy * c1],
          m3 = [x2 + hx * s2, y2 - hy * c2],
          m4 = [x2, y2]
        m2[0] = 2 * m1[0] - m2[0]
        m2[1] = 2 * m1[1] - m2[1]
        if (recursive) {
          return [m2, m3, m4].concat(res)
        } else {
          res = [m2, m3, m4].concat(res).join().split(',')
          var newres = []
          for (var i = 0, ii = res.length; i < ii; i++) {
            newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x
          }
          return newres
        }
      }
      return path
    },
    fixArc = function(pp, i) {
      if (pp[i].length > 7) {
        pp[i].shift()
        var pi = pp[i]
        while (pi.length) {
          pcoms1[i] = 'A' // if created multiple C:s, their original seg is saved
          // p2 && (pcoms2[i] = 'A') // the same as above
          pp.splice(i++, 0, ['C'].concat(pi.splice(0, 6)))
        }
        pp.splice(i, 1)
        ii = Math.max(p.length || 0)
      }
    },
    fixM = function(path1, path2, a1, a2, i) {
      if (path1 && path2 && path1[i][0] == 'M' && path2[i][0] != 'M') {
        path2.splice(i, 0, ['M', a2.x, a2.y])
        a1.bx = 0
        a1.by = 0
        a1.x = path1[i][1]
        a1.y = path1[i][2]
        ii = Math.max(p.length, p2 && p2.length || 0)
      }
    },
    pcoms1 = [], // path commands of original path p
    pcoms2 = [], // path commands of original path p2
    pfirst = '', // temporary holder for original path command
    pcom = '' // holder for previous path command of original path
  for (var i = 0, ii = Math.max(p.length || 0); i < ii; i++) {
    p[i] && (pfirst = p[i][0]) // save current path command

    if (pfirst != 'C') // C is not saved yet, because it may be result of conversion
    {
      pcoms1[i] = pfirst // Save current path command
      i && (pcom = pcoms1[i - 1]) // Get previous path command pcom
    }
    p[i] = processPath(p[i], attrs, pcom) // Previous path command is inputted to processPath

    if (pcoms1[i] != 'A' && pfirst == 'C') {pcoms1[i] = 'C'} // A is the only command
    // which may produce multiple C:s
    // so we have to make sure that C is also C in original path

    fixArc(p, i) // fixArc adds also the right amount of A:s to pcoms1

    // if (p2) { // the same procedures is done to p2
    //   p2[i] && (pfirst = p2[i][0])
    //   if (pfirst != 'C') {
    //     pcoms2[i] = pfirst
    //     i && (pcom = pcoms2[i - 1])
    //   }
    //   p2[i] = processPath(p2[i], attrs2, pcom)

    //   if (pcoms2[i] != 'A' && pfirst == 'C') {
    //     pcoms2[i] = 'C'
    //   }

    //   fixArc(p2, i)
    // }
    fixM(p, p, attrs, attrs, i)
    // fixM(p2, p, attrs2, attrs, i)
    var seg = p[i],
      // seg2 = p2 && p2[i],
      seglen = seg.length
      // seg2len = p2 && seg2.length
    attrs.x = seg[seglen - 2]
    attrs.y = seg[seglen - 1]
    attrs.bx = parseFloat(seg[seglen - 4]) || attrs.x
    attrs.by = parseFloat(seg[seglen - 3]) || attrs.y
    // attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x)
    // attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y)
    // attrs2.x = p2 && seg2[seg2len - 2]
    // attrs2.y = p2 && seg2[seg2len - 1]
  }

  function l2c(x1, y1, x2, y2) {
    return [x1, y1, x2, y2, x2, y2]
  }
  function q2c(x1, y1, ax, ay, x2, y2) {
    var _13 = 1 / 3,
      _23 = 2 / 3
    return [
      _13 * x1 + _23 * ax,
      _13 * y1 + _23 * ay,
      _13 * x2 + _23 * ax,
      _13 * y2 + _23 * ay,
      x2,
      y2
    ]
  }
  return p
}

function getLengthFactory(istotal, subpath) {
  return function(path, length, onlystart) {
    // if (path instanceof Element) {
    //   path = path.attr('d')
    // }
    path = path2curve(path)
    var x, y, p, l, sp = '', subpaths = {}, point,
      len = 0
    for (var i = 0, ii = path.length; i < ii; i++) {
      p = path[i]
      if (p[0] == 'M') {
        x = +p[1]
        y = +p[2]
      } else {
        l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6])
        if (len + l > length) {
          if (!istotal && !subpath) {
            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len)
            return point
          }
        }
        len += l
        x = +p[5]
        y = +p[6]
      }
      sp += p.shift() + p
    }
    subpaths.end = sp
    point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1)

    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
      function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
          t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3
        return t * t2 - 3 * p1 + 3 * p2
      }

      function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
          z = 1
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z
        var z2 = z / 2,
          n = 12,
          Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816],
          Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
          sum = 0
        for (var i = 0; i < n; i++) {
          var ct = z2 * Tvalues[i] + z2,
            xbase = base3(ct, x1, x2, x3, x4),
            ybase = base3(ct, y1, y2, y3, y4),
            comb = xbase * xbase + ybase * ybase
          sum += Cvalues[i] * Math.sqrt(comb)
        }
        return z2 * sum
      }

      function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
          return
        }
        var t = 1,
          step = t / 2,
          t2 = t - step,
          l,
          e = 0.01
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2)
        while (Math.abs(l - ll) > e) {
          step /= 2
          t2 += (l < ll ? 1 : -1) * step
          l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2)
        }
        return t2
      }
      if (length == null) {
        return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y)
      } else {
        return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
          getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length))
      }
    }

    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
      var t1 = 1 - t,
        t13 = Math.pow(t1, 3),
        t12 = Math.pow(t1, 2),
        t2 = t * t,
        t3 = t2 * t,
        x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
        y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
        mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
        my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
        nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
        ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
        ax = t1 * p1x + t * c1x,
        ay = t1 * p1y + t * c1y,
        cx = t1 * c2x + t * p2x,
        cy = t1 * c2y + t * p2y,
        alpha = 90 - Math.atan2(mx - nx, my - ny) * 180 / Math.PI
        // (mx > nx || my < ny) && (alpha += 180);
      return {
        x: x,
        y: y,
        m: {x: mx, y: my},
        n: {x: nx, y: ny},
        start: {x: ax, y: ay},
        end: {x: cx, y: cy},
        alpha: alpha
      }
    }

    return point
  }
}
var getTotalLength = getLengthFactory(1)
var getPointAtLength = getLengthFactory()
// --------------------------------------------------------
// svgpath转为游戏坐标数组
// i 间距
// varianceX 横向调整
// varianceY 纵向向调整
function getPointArr(svgPath, i, varianceX, varianceY) {
  var pointArr = []
  var totalLen = getTotalLength(svgPath)
  for(var pathLen = 0;pathLen < totalLen;pathLen += i) {
    var preMove = getPointAtLength(svgPath, pathLen)
    pointArr.push({x: preMove.x * fix + varianceX, y: (414 * fix - preMove.y * fix) + varianceY})
  }
  return pointArr
}
// /**
//  * Check the obj whether is function or not
//  * @param {*} obj
//  * @returns {boolean}
//  */
// function isFunction(obj) {
//   return typeof obj === 'function'
// }

// /**
//  * Check the obj whether is number or not
//  * @param {*} obj
//  * @returns {boolean}
//  */
// function isNumber(obj) {
//   return typeof obj === 'number' || Object.prototype.toString.call(obj) === '[object Number]'
// }

// /**
//  * Check the obj whether is string or not
//  * @param {*} obj
//  * @returns {boolean}
//  */
// function isString(obj) {
//   return typeof obj === 'string' || Object.prototype.toString.call(obj) === '[object String]'
// }

// *
//  * Check the obj whether is array or not
//  * @param {*} obj
//  * @returns {boolean}
 
// function isArray(obj) {
//   return Array.isArray(obj) || obj instanceof Array || 
//         (typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Array]')
// }

// /**
//  * Check the obj whether is undefined or not
//  * @param {*} obj
//  * @returns {boolean}
//  */
// function isUndefined(obj) {
//   return typeof obj === 'undefined'
// }

// /**
//  * Check the obj whether is object or not
//  * @param {*} obj
//  * @returns {boolean}
//  */
// function isObject(obj) {
//   return typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]'
// }
//获取从0到len-1的递增的所有元素的数组
function getArr(len) {
  return Array.apply(null, Array(len)).map(function(item, i) {
    return i
  })
}
//获取i到j范围的一个随机整数
function getNum(min, max) {
  return ~~(Math.random() * (max - min + 1)) + min
}
//多维数组转为一维数组
function flatten(arr) {
  var res = []
  for(var i = 0;i < arr.length;i++) {
    if(isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res
}
// 不涉及继承的对象deep拷贝
function deepCopy(o) {
  return JSON.parse(JSON.stringify(o))
}
// 数组交换元素
function alterItem(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}
// 数组元素随机换顺序
function shuffle(arr) {
   var len = arr.length;
   if(len <= 1){
       return;
   }
  return arr.sort(function (a,b) {
    return Math.random() - 0.5;
  })
}

//完全打乱顺序，没有一项是相同的
// function shuffle_absolute(arr) {
//  var len = arr.length;
//  if(len <= 1){
//        return;
//    }
//  var _arr = deepCopy(arr) 
//  shuffle(_arr);
//  var flag = true;
//  for(var i = 0;i < len ;i++){
//      if(arr[i] === arr1[i]){
//          flag = false;
//      }
//  }
//  if(flag){
//      return _arr;
//  }
//  return shuffle_absolute(arr);
// }

//////////////////
Function.prototype.bind = Function.prototype.bind || function (oThis) {
    if (!cc.isFunction(this)) {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
            return fToBind.apply(this instanceof fNOP && oThis
                ? this
                : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
};
