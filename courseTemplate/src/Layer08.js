var Layer08 = MyLayer.extend({
  ctor: function() {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.bg03)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：分句欣赏 3/10')

    this.sprs = this.sprites(layer08_data[0], true)

     var  TreeShader_fsh =
"                                                 \n\
#ifdef GL_ES                                            \n\
    precision mediump float;                                    \n\
#endif                                                \n\
\n\
varying vec2 v_texCoord;                                      \n\
uniform sampler2D u_texture;                                    \n\
uniform float u_time;                                       \n\
\n\
// 1                                                \n\
const float speed = 1.0;                                      \n\
const float bendFactor = 0.05;                                   \n\
void main()                                             \n\
{                                                 \n\
    // 获得高度，texCoord从下到上为0到1                                  \n\
    float height = v_texCoord.y;                                \n\
    // 获得偏移量，一个幂函数，值愈大，导数越大，偏移量愈大                         \n\
    float offset = pow(height, 2.5);                                \n\
    // 偏移量随时间变化，并乘以幅度，设置频率                                \n\
    offset *= (sin(u_time * speed) * bendFactor);                         \n\
    // 使x坐标偏移，fract取区间值（0，1）                                \n\
    gl_FragColor = texture2D(CC_Texture0, fract(vec2(v_texCoord.x + offset, v_texCoord.y))); \n\
}";

    var shader = this.shader = new cc.GLProgram()
    shader.initWithString(cc.SHADER_POSITION_TEXTURE_A8COLOR_VERT, TreeShader_fsh)
    shader.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR)// 对应vs里面的顶点坐标
    shader.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION)// 对应vs里面的顶点颜色
    shader.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS)// 对应vs里面的顶点纹理坐标
    shader.link()
    shader.updateUniforms()

  },
  onStart: function() {
    sound.s8_sound()
    sound.niaojiao_sound()
    var self = this
    var sprs = this.sprs
    var shader = this.shader

    sprs[0].frame([res.鸟01, res.鸟02], 0.45, 0)
    sprs[1].frame([res.鸟03, res.鸟04], 0.5, 0)
    sprs[0].runAction(cc.moveBy(17, 1000, 50))
    sprs[1].runAction(cc.moveBy(17, 800, -50))

    this.scheduleOnce(function(){
      sprs[2].frame([res.草说话01, res.草说话02], 0.5, 0)
    }, 14)

    sprs[3].runAction(cc.sequence(cc.moveBy(1, -15, -50), cc.moveBy(1, 10, -50)).repeat(4))
    sprs[4].runAction(cc.sequence(cc.moveBy(1, -17, -70), cc.moveBy(1, 12, -70)).repeat(4))
    sprs[5].runAction(cc.sequence(cc.moveBy(1, -12, -60), cc.moveBy(1, 10, -50)).repeat(4))

    // sprs[6].frame([res.柳树00, res.柳树01], 0.6, 0)
    shader.use()//没有这个会抖动一下
    shader.setUniformsForBuiltins()
    var m_nTimeUniformLocation = shader.getUniformLocationForName('u_time')
    gl.useProgram(shader.getProgram())

    sprs[6].shaderProgram = shader
    sprs[6].t = 0 
    sprs[6].scheduleUpdate()
    sprs[6].update = function(dt) {
      sprs[6].t += dt
      shader.use()
      shader.setUniformsForBuiltins()
      m_nTimeUniformLocation = shader.getUniformLocationForName('u_time')
      gl.uniform1f(m_nTimeUniformLocation, sprs[6].t) // 这个函数由于jsb实现有问题，在手机侧实际只能传递整数，需要注意。html5是正常的。
    }

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      sprs[1].stopAllActions()
      sprs[2].stopAllActions()
      sprs[6].unscheduleUpdate()
      this.next()
    }, 17)
  }
  // update: function (dt) {

  // }
})

