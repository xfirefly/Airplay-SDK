# 蓝莓投屏SDK
提供投屏SDK, 快速实现Windows/iOS/Android/MacOS 投屏到大屏幕, 适合家用/教育/会议/广告 等行业


-	支持Airplay/ Miracast /DLNA 和自有编码协议.
- 支持多个iOS/Mac 设备同时镜像连接显示(最多同时4个)
-	iOS和MacOS里, 使用Airplay协议, 无需安装软件, 直接镜像投屏 , 支持设置密码等Airplay特性.
-	Android系统, 使用 Miracast协议, 无需安装软件, 直接镜像投屏,可以投系统声音  (Miracast 依赖于不同芯片平台实现, 集成至蓝莓投屏) .
-	Windows系统安装蓝莓研发的投屏客户端, 可以用投屏码 一键投屏到对应接收端. 支持同时镜像电脑屏幕到多个接收端,  接收端也可以同时显示多路屏幕, 即支持一投多和多投一, 适合会议办公, PPT演示
-	Android系统也可以安装蓝莓研发的投屏客户端App, 实现分屏显示(Android限制, 不能录制系统声音, 所以声音还是从手机输出)
-	接收端支持1080p四路分屏显示
-	支持4K视频播放 , 可以推送爱奇异/腾讯视频/优酷 等App 的4K内容播放 (依赖于接收端硬件规格)
-	对协议层和解码层深度优化, 延迟低, 投屏玩赛车游戏无延迟感,  iOS 和Android延时120ms左右, 电脑投屏 150ms左右
-	支持竖屏显示器显示, 手机屏幕可放大显示在广告机等竖屏显示器上

## 软件SDK合作

- 提供各系统软件 SDK,  可自行设计UI, 整合 Airplay/ Miracast /DLNA 协议  
- 提供整合好的App, 实现快速集成, 内部设置可由其他App调用广播完成
- 也可以由我们定制软件UI, 提供最终产品

## 硬件定制合作

- 适合不方便整合SDK 的场景, 可提供基于Realtek 或者 Rockchip等芯片的pcba模块/整机

## 联系

- 微信/电话: 17722630259



## 功能图片展示

#### 支持最多四分屏显示功能, 它的优势在于，可以同时展示4份方案内容在大屏幕上。多台电脑或手机，可以同时将屏幕投屏至电视 
![Alt text](image/four.png?raw=true "Title")

#### 蓝莓投屏对竖屏显示做了深度优化, 支持Airplay / Miracast / 蓝莓投屏手机端 竖屏显示, 延时低, 不损失原始画质
![Alt text](image/v.png?raw=true "Title")

#### 支持设置密码, 分辨率等
![Alt text](image/main.png?raw=true "Title")
![Alt text](image/setup.png?raw=true "Title")


## 其他问题
App安装到有些平台, 可能出现镜像卡顿延时， 是因为各芯片公司的codec实现差异， 目前这个app主要在Rockchip / 高通手机 平台调试 .
在 Rockchip 3288 上面是很流畅的， 可以点击链接看看.  为取得最好效果, 需要针对芯片平台调试优化

[两分屏](https://v.youku.com/v_show/id_XNDI3MjkxMDMwOA==.html?spm=a2h3j.8428770.3416059.1)

[安卓投屏](https://v.youku.com/v_show/id_XNDI3MjkxMjE5Mg==.html?spm=a2h3j.8428770.3416059.1)
