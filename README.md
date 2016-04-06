# Front End Workflow.

#

```bash
| - fed-workflow
	| - .temp 本地服务器目录
	| - src  开发源码
		| - bower_components 前端依赖的脚本
		| - fonts 字体文件
		| - html_modules html模块
		| - images 图片模块
		| - script js文件
		| - node_modules nodejs模块
		| - sass scss文件
		| - templates 模板文件
	| - public 静态公共文件
	| - node_modules nodejs模块
	| - app.js 服务器端测试主程序模块
| - README.md 项目说明文件

```
# Init

* 根目录
* 运行`npm install` 安装node.js服务器依赖
* 切换到src目录
* 运行`npm install` 安装gulp插件
* 运行`bower install` 初始化前端依赖库

#运行

* 在`src`目录下运行`gulp`命令，自动构建到`.temp` 目录
* 运行`gulp server` 可将build目录拷贝到public下，通过本地ip或者域名访问
