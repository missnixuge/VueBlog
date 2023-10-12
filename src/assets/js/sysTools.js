// get brower
export function GetCurrentBrowser () {
    let ua = navigator.userAgent.toLocaleLowerCase()
    let browserType = null
    console.log('浏览器',ua)
    if (ua.match(/msie/) != null || ua.match(/trident/) != null) 
    {
        browserType = 'IE'
    } 
    else if (ua.match(/firefox/) != null) 
    {
        browserType = 'Firefox'
    } else if (ua.match(/ucbrowser/) != null) {
        browserType = 'UC'
    } else if (ua.match(/opera/) != null || ua.match(/opr/) != null) {  
        browserType = 'opera'
    } else if (ua.match(/bidubrowser/) != null) {
        browserType = 'baidu'
    } else if (ua.match(/metasr/) != null) {
        browserType = 'sougou'
    } else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
        browserType = 'QQ'
    } else if (ua.match(/maxthon/) != null) {
        browserType = 'maxthon'
    } else if (ua.match(/edg/) != null) {
        browserType = 'Edge'
    } else if (ua.match(/chrome/) != null) {
        var is360 = _mime('type', 'application/vnd.chromium.remoting-viewer'
        )
        if (is360) {
            browserType = '360'
        } else {
            browserType = 'Chrome'
        }
    } else if (ua.match(/safari/) != null) {
        browserType = 'Safari'
    } else {
        browserType = 'others'
    }
    return browserType
}function _mime (option, value) {
    var mimeTypes = navigator.mimeTypes
    for (var mt in mimeTypes)
     {
        if (mimeTypes[mt][option] === value)
         {
            return true
        }
    }
        return false
}// get os
export function GetOs () {
    let sUserAgent = navigator.userAgent.toLocaleLowerCase()
    let platform = navigator.platform.toLocaleLowerCase()
   
    let isWin = (platform === 'win32') || (platform === 'windows')
    let isMac = (platform === 'mac68k') || (platform === 'macppc') || (platform === 'macintosh') || (platform === 'macintel')
    if (isMac) 
    return 'Mac'
    var isUnix = (platform === 'x11') && !isWin && !isMac
    if (isUnix)
     return 'Unix'
     var isLinux = (String(platform).indexOf('linux') > -1)
     if (isLinux)
      return 'Linux'
     if (isWin) 
     {
        console.log('sUserAgent:',sUserAgent)
        var isWin2K = sUserAgent.indexOf('windows nt 5.0') > -1 || sUserAgent.indexOf('windows 2000') > -1
        if (isWin2K) return 'WWindows 2000'
        var isWinXP = sUserAgent.indexOf('windows nt 5.1') > -1 || sUserAgent.indexOf('windows xp') > -1
        if (isWinXP) return 'Windows XP'
        var isWin2003 = sUserAgent.indexOf('windows nt 5.2') > -1 || sUserAgent.indexOf('windows 2003') > -1
        if (isWin2003) return 'Windows 2003'
        var isWinVista = sUserAgent.indexOf('windows nt 6.0') > -1 || sUserAgent.indexOf('windows vista') > -1
        if (isWinVista) return 'Windows Vista'
        var isWin7 = sUserAgent.indexOf('windows nt 6.1') > -1 || sUserAgent.indexOf('windows 7') > -1
        if (isWin7) 
        return 'Windows 7'
        var isWin10 = sUserAgent.indexOf('windows nt 10.0') > -1 || sUserAgent.indexOf('windows 10') > -1
        if (isWin10) 
        return 'Windows 10'
        var isWin11 = sUserAgent.indexOf('windows nt 11.0') > -1 || sUserAgent.indexOf('windows 11') > -1
        if (isWin11) 
        return 'Windows 11'
    }
     if (sUserAgent.indexOf('android') > -1) return 'Android'
     if (sUserAgent.indexOf('iphone') > -1) return 'iPhone'
     if (sUserAgent.indexOf('symbianos') > -1) return 'SymbianOS'
     if (sUserAgent.indexOf('windows phone') > -1) return 'Windows Phone'
     if (sUserAgent.indexOf('ipad') > -1) return 'iPad'
     if (sUserAgent.indexOf('ipod') > -1) return 'iPod'
     return 'others'
}// getAddress
// {/*<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>*/}
// {/*export function GetAddress () {*/}
//   {/*return returnCitySN*/}
// {/*}*/}