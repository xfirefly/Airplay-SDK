# Airplay Receiver for windows
下载zip解压即可体验, iPad/iPhone/Mac 使用airplay 镜像到windows, 可以把pc 作为苹果设备的扩展显示器

- [直接下载](http://api.blueberry-tek.com/download/wincast/win-airplay.zip)
- [Gitee下载](https://gitee.com/halo-x/Airplay-SDK/tree/master/windows-receiver) 
- [官网下载](http://deeprd.com/) 

## 使用必读
- Airplay 需要调用Apple Bonjour 广播服务, 先安装zip包内的 Bonjour64.msi 或 Bonjour.msi 
- 如安装后运行提示找不到 dll, 安装VC运行库 : https://aka.ms/vs/16/release/vc_redist.x86.exe
- [iPad 镜像](https://www.bilibili.com/video/av86015516/)

## Q & A
1. 视频推送投屏怎么用?
- 播放视频不要用镜像模式, 请用Airplay视频推送, 需要安装 [PotPlayer](https://daumpotplayer.com/download/) 或者 [VLC](https://www.videolan.org/vlc/) , 安装到C/D/E盘都行, 程序会调用其播放视频.   
2. 连接黑屏 ?  
- 确认是不是防火墙禁止了exe联网
3. 杀毒软件报毒 ?
- 因程序加壳, 360或者Win杀毒可能会误报, 担心的话请禁止程序访问互联网
4. iPhone找不到设备?
- 确认安装了Apple Bonjour 服务
5. 支持安卓镜像到windows吗?
- 本程序只支持iPhone/iPad/Mac 镜像到windows系统, 安卓建议使用 [scrcpy](https://github.com/Genymobile/scrcpy)

## 更新历史
- V 重构, 支持4K屏, 增加全屏/窗口显示, 窗口大小自由调整等功能
- IV 增加视频投屏功能, 手机可通过Airplay投屏播放视频到电脑
- III 大幅降低镜像延迟
- II 增加按 f 切换全屏/窗口显示

## 联系
- 微信: maxfirefly
<img src="../image/qrcode.png?raw=true" width="100" height="100">

## 投屏教程
![ ](../image/cast.jpg?raw=true "Title")

## 图片展示
- iPhone
![](../image/win3.png?raw=true "Title") 

![](../image/win2.png?raw=true "Title") 

- iPad
![](../image/win1.png?raw=true "Title") 
![](../image/win5.png?raw=true "Title") 

- Mac
![](../image/win4.png?raw=true "Title") 
![](../image/win2.jpg?raw=true "Title") 
