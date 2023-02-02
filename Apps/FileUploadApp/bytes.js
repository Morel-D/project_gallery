function formatBytes(a,b=2){
    if(!+a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));

    return`${parseFloat((a/Math.pow(1024,d)).toFixed(c))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}`
}


// formatBytes(bytes, decimals)

formatBytes(1024)       // 1 KB
formatBytes('1024')     // 1 KB
formatBytes(1234)       // 1.21 KB
formatBytes(1234, 3)    // 1.205 KB
formatBytes(0)          // 0 Bytes
formatBytes('0')        // 0 Bytes