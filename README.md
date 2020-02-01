[English Readme](README_EN.md)

# Airplay Receiver SDK
下载仓库里的app即可体验

- [直接下载app](https://fir.im/nlpv)
- [Gitee镜像]( https://gitee.com/halo-x/Airplay-SDK )
- **出售Airplay协议源代码, 可运行在 rockchip linux , windows, android 等平台**
-	支持Airplay/DLNA 和自有编码协议.
-	iOS和MacOS里, 使用Airplay协议, 无需安装软件, 直接镜像投屏
-	Android系统, 使用 Miracast协议, 无需安装软件, 直接镜像投屏,可以投系统声音  (Miracast 依赖于不同芯片平台实现, 集成至蓝莓投屏) .
-	Windows系统安装蓝莓研发的投屏客户端, 可以用投屏码 一键投屏到对应接收端. 支持同时镜像电脑屏幕到多个接收端,  接收端也可以同时显示多路屏幕, 即支持一投多和多投一, 适合会议办公, PPT演示
-	Android系统也可以安装蓝莓研发的投屏客户端App, 实现分屏显示(Android限制, 不能录制系统声音, 所以声音还是从手机输出)
-	接收端支持1080p四路分屏显示
-	支持4K视频播放 , 可以推送爱奇异/腾讯视频/优酷 等App 的4K内容播放 (依赖于接收端硬件规格)
-	对协议层和解码层深度优化, 延迟低, 投屏玩赛车游戏无延迟感,  iOS 和Android延时120ms左右, 电脑投屏 150ms左右
-	支持竖屏显示器显示, 手机屏幕可放大显示在广告机等竖屏显示器上
- [Windows发送端](http://fenti.me/yi)
- [Android发送端](https://fir.im/pfad)

## SDK / 协议源码

- 提供Airplay协议SDK, 亦可出售协议源码

## 联系

- 微信: maxfirefly

<img src="image/qrcode.png?raw=true" width="300" height="300">



## 功能图片展示
- MacOS 镜像
![Alt text](image/mac.jpg?raw=true "Title")

- 支持最多四分屏显示功能, 它的优势在于，可以同时展示4份方案内容在大屏幕上。多台电脑或手机，可以同时将屏幕投屏至电视 
![Alt text](image/four.png?raw=true "Title")

- 蓝莓投屏对竖屏显示做了深度优化, 支持Airplay / Miracast / 蓝莓投屏手机端 竖屏显示, 延时低, 不损失原始画质
![Alt text](image/v.png?raw=true "Title")

- 支持设置密码, 分辨率等
![Alt text](image/main.png?raw=true "Title")
![Alt text](image/setup.png?raw=true "Title")

## 其他问题
App安装到有些平台, 可能出现镜像卡顿延时， 是因为各芯片公司的codec实现差异， 目前这个app主要在Rockchip / 高通手机 平台调试 .
在 Rockchip 3288 上面是很流畅的， 可以点击链接看看.  为取得最好效果, 需要针对芯片平台调试优化

[两分屏](https://v.youku.com/v_show/id_XNDI3MjkxMDMwOA==.html?spm=a2h3j.8428770.3416059.1)

[安卓投屏](https://v.youku.com/v_show/id_XNDI3MjkxMjE5Mg==.html?spm=a2h3j.8428770.3416059.1)
