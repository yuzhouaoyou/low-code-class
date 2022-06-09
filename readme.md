# 千峰训练营低代码可视化平台课件
- ## 教程链接: [b站](https://www.bilibili.com/video/BV1y3411z7ST) 
- ## 教程链接2: [b站](https://www.bilibili.com/video/BV16U4y1E7yx)

# 想法
我的初衷是想实现一个类似火山互联、E、E4A这种可视化IDE
它可以在线直接生成适应不同平台的安装包。<br/>
这种IDE不仅要ui设计区还需要代码编辑器，并应当全部使用fixed布局，API需要封装成中文<br/>
如在设计区双击按钮，将会在button上添加@click属性绑定并生成事件'按钮x_被单击'<br/>
参数1 事件<br/>
_按钮1_被单击<br/>
&nbsp;&nbsp;&nbsp;如果 _按钮1.标题 == ‘我爱你’<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_按钮1.标题 = ‘我不爱你’<br/>
<br/>
而且css框架应该封装成皮肤类库形式 且拥有全局加载和手动加载方式 如：<br />
//全局<br/>
使用 'element-ui' //只需要这一句所有新建的组件都会使用此样式<br/>
_按钮1.使用('element-ui') //单个组件使用，可覆盖全局<br/>
<br/>
支持库相关，所有支持库应当实现统一接口，以方便挂载<br/>
基本支持库<br/>
&nbsp; - 系统核心库->应当封装所有常用js方法<br/>
&nbsp; - win核心库->封装常用原生winapi<br/>
&nbsp; - 安卓核心库->封装常用原生安卓api<br/>
&nbsp; - ...其他工具类<br/>
<br/>
关于路由，路由应当变为窗口，如const router = [path:'/窗口1',component: _窗口1]<br/>
onMounted(_窗口1_创建完毕)<br/>
关于生成，生成使用现有框架如electron,hybird等，并开发云端生成接口，直接生成应用安装包
