# Airplay Receiver for windows
下载zip解压即可体验, iPad/iPhone/Mac 使用airplay 镜像到windows, 可以把pc 作为苹果设备的扩展显示器

- [直接下载](http://api.blueberry-tek.com/download/wincast/win-airplay.zip)
- [Gitee下载](https://gitee.com/halo-x/Airplay-SDK/tree/master/windows-receiver) 
- [官网下载](http://deeprd.com/) 

## 运行依赖
- Airplay 需要调用Apple Bonjour 广播服务, 安装zip包内的 Bonjour64.msi 或 Bonjour.msi
- 如安装后运行提示找不到 dll, 安装VC运行库 : https://aka.ms/vs/16/release/vc_redist.x86.exe

## Q & A
0. 视频投屏怎么用?
- 播放视频不要用镜像模式, 请用Airplay视频推送, 需要安装 [PotPlayer](https://daumpotplayer.com/download/) 或者 [VLC](https://www.videolan.org/vlc/) , 安装到C盘即可, 程序会调用其播放视频.  优先用: C:\Program Files\DAUM\PotPlayer\PotPlayerMini64.exe  第二: C:\Program Files\VideoLAN\VLC\vlc.exe
1. 按 f 全屏后图像显示不全 ?   
-  修改 win10/设置/显示/缩放与布局 为 100%,  因请求iOS/Mac端编码1080p视频, 所以显示器最低要求为1920*1080
2. 连接黑屏 ?  
- 确认是不是防火墙禁止了exe联网
3. 杀毒软件报毒 ?
- 因程序加壳, 360或者Win杀毒会误报, 担心的话请禁止程序连互联网
4. iPhone找不到设备 win-airplay ?
- 确认安装了Apple Bonjour 服务

## 更新历史
- v4 增加视频投屏功能, 手机可通过Airplay投屏播放视频到电脑
- v3 大幅降低镜像延迟
- v2 增加按 f 切换全屏/窗口显示

## 联系
- 微信: maxfirefly

<img src="../image/qrcode.png?raw=true" width="200" height="200">

## 投屏教程
![Alt text](../image/cast.jpg?raw=true "Title")

## 视频展示
 
[iPad 镜像](https://www.bilibili.com/video/av86015516/)

## 图片展示
- iPhone
![Alt text](../image/win3.jpg?raw=true "Title") 

- iPad
![Alt text](../image/win.png?raw=true "Title") 

- Mac
![Alt text](../image/win2.jpg?raw=true "Title") 
