---
title: "安卓投屏到电脑 - 使用scrcpy"
thumbnailImagePosition: top
thumbnailImage: //d1u9biwaxjngwg.cloudfront.net/cover-image-showcase/city-750.jpg
#coverImage: //d1u9biwaxjngwg.cloudfront.net/cover-image-showcase/city.jpg
metaAlignment: center
coverMeta: out
date: 2020-02-21T22:50:04+08:00
weight: 10
categories:
- readme
tags:
keywords:
- tech
#thumbnailImage: //example.com/image.jpg
---

<!--more-->
 scrcpy通过adb调试的方式来将手机屏幕投到电脑上，并可以通过电脑控制您的Android设备。它可以通过USB连接，也可以通过Wifi连接（类似于隔空投屏），而且不需要任何root权限，不需要在手机里安装任何程序。scrcpy同时适用于GNU / Linux，Windows和macOS。

### 功能特性

- 简洁（原生，仅显示设备屏幕）
- 性能（30~60fps）
- 质量（1920×1080或以上）
- 低延迟（35~70ms）
- 启动时间短（显示第一张图像约1秒）
- 非侵入性（设备上没有安装任何东西）
- 此项目为开源项目，Github地址：Genymobile/scrcpy 

### 使用scrcpy的要求
- Android设备至少需要API 21（Android 5.0以上版本）;
- 确保在您的设备上启用了adb调试;
- 在某些设备上，您还需要启用其他选项以使用键盘和鼠标控制它。
- adb调试的开启一般是多次点击手机系统版本，如我用的是MIUI10，开启方法是 “设置”->“我的设备”->“全部参数”->点击7下MIUI版本，开启“开发者选项”。然后在 “设置”->“更多设置”->“开发者选项” 中同时开启 USB调试 和 USB调试(安全设置)。


 
### 使用电脑连接手机
在Android手机中打开了USB调试后，我们即可在电脑中使用adb进行调试。

首先下载scrcpy，可去releases下载最新版本 
下载地址：https://github.com/Genymobile/scrcpy/releases

使用USB进行连接,此方式推荐使用，相对更加流畅。
手机通过USB连接到PC上，首次连接会弹出是否信任该电脑，点击始终信任即可。
 
 ### 苹果手机投屏
 scrcpy 只支持安卓手机, 如果需要苹果手机投屏, [扫码安装 蓝莓投屏App](http://d.deeprd.com/nlpv) 即可, 投屏教程请访问[软件官网](http://deeprd.com/) 
