---
title: "蓝莓投屏Windows版使用必读"
thumbnailImagePosition: top
thumbnailImage: //d1u9biwaxjngwg.cloudfront.net/cover-image-showcase/city-750.jpg
#coverImage: https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
metaAlignment: center
coverMeta: out
date: 2020-02-21T22:50:04+08:00
weight: 1
categories:
- readme
tags:
keywords:
- tech
#thumbnailImage: //example.com/image.jpg
---

<!--more-->

下载zip解压即可体验, iPad/iPhone/Mac 使用airplay 镜像到windows, 可以把pc 作为苹果设备的扩展显示器

[直接下载](http://bluberry-10050152.file.myqcloud.com/win-airplay.zip) | [Gitee下载](https://gitee.com/halo-x/Airplay-SDK/tree/master/windows-receiver)  | [官网下载](http://deeprd.com/) 

## 使用必读
- 务必更新到最新版: `Blueberry VI`  
- Airplay 需要调用Apple Bonjour 广播服务, 先安装zip包内的 Bonjour64.msi 或 Bonjour.msi 
- 如安装后运行提示找不到 dll, 安装VC运行库 : https://aka.ms/vs/16/release/vc_redist.x86.exe


## Q & A
1. 视频推送投屏怎么用?
- 播放视频不要用镜像, 请用Airplay视频推送, 安装 [PotPlayer](https://daumpotplayer.com/download/) 或者 [VLC](https://www.videolan.org/vlc/) , 安装到C/D/E盘都行, 程序会调用其播放视频.   
2. 连接黑屏 ?  
- 确认是不是防火墙禁止了exe联网
3. Win 7 镜像是没有声音 ?
- 更新到Win 10, 不再维护Win 7 版本
4. iPhone找不到设备?
- 确认安装了Apple Bonjour 服务
5. 是否支持安卓镜像到windows, windows互相镜像 ?
- 本程序只支持iPhone/iPad/Mac 镜像到windows系统, 其他功能建议使用 [快投屏](http://kuaitouping.com)
 

## 更新历史
- V 重构, 支持4K屏, 增加全屏/窗口显示, 窗口大小自由调整等功能
- IV 增加视频投屏功能, 手机可通过Airplay投屏播放视频到电脑
- III 大幅降低镜像延迟
- II 增加按 f 切换全屏/窗口显示

## 视频展示
- [iPad/iPhone/Mac 使用airplay 镜像到windows电脑](https://www.bilibili.com/video/av90577703)

## 问题反馈
- 微信: maxfirefly
<img src="http://deeprd.com/docs/img/qrcode.png?raw=true" width="100" height="100">

## 投屏教程
![ ](http://deeprd.com/docs/img/cast.jpg?raw=true "Title")

## 图片展示
- iPhone
![](http://deeprd.com/docs/img/win3.png?raw=true "Title") 
![](http://deeprd.com/docs/img/win2.png?raw=true "Title") 

- iPad
![](http://deeprd.com/docs/img/win1.png?raw=true "Title") 
![](http://deeprd.com/docs/img/win5.png?raw=true "Title") 

- Mac
![](http://deeprd.com/docs/img/win4.png?raw=true "Title") 
![](http://deeprd.com/docs/img/win2.jpg?raw=true "Title") 
