# Airplay Receiver For macOS / Ubuntu

For running on macOS, follow these steps:

```bash
brew install cmake openssl libplist gstreamer 
brew install gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gst-libav

$otool -L airdemo
airdemo:
    /usr/local/opt/gst-plugins-base/lib/libgstsdp-1.0.0.dylib (compatibility version 1803.0.0, current version 1803.0.0)
    /usr/local/opt/gst-plugins-base/lib/libgstrtp-1.0.0.dylib (compatibility version 1803.0.0, current version 1803.0.0)
    /usr/local/opt/gst-plugins-base/lib/libgstvideo-1.0.0.dylib (compatibility version 1803.0.0, current version 1803.0.0)
    /usr/local/opt/gst-plugins-base/lib/libgstapp-1.0.0.dylib (compatibility version 1803.0.0, current version 1803.0.0)
    /usr/local/opt/gstreamer/lib/libgstbase-1.0.0.dylib (compatibility version 1803.0.0, current version 1803.0.0)
    /usr/local/opt/gstreamer/lib/libgstreamer-1.0.0.dylib (compatibility version 1803.0.0, current version 1803.0.0)
    /usr/local/opt/glib/lib/libgobject-2.0.0.dylib (compatibility version 6601.0.0, current version 6601.4.0)
    /usr/local/opt/glib/lib/libglib-2.0.0.dylib (compatibility version 6601.0.0, current version 6601.4.0)
    /usr/local/opt/gettext/lib/libintl.8.dylib (compatibility version 11.0.0, current version 11.0.0)
    /usr/lib/libSystem.B.dylib (compatibility version 1.0.0, current version 1281.100.1)
    /usr/lib/libc++.1.dylib (compatibility version 1.0.0, current version 902.1.0)
```   
  
##
![](macos-airplay-receiver.png?raw=true "Title")

##
![](linux-airplay-receiver.png?raw=true "Title")