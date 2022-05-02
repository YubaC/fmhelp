// setTimeout(function() {
reloaded = false

function reloadimage() {
    if (!reloaded) {
        // console.log(1)
        refreshImage("download_times", "https://img.shields.io/github/downloads/YubaC/filemanager/total?style=for-the-badge&color=yellow")
        refreshImage("forks", "https://img.shields.io/github/forks/YubaC/filemanager.svg?style=for-the-badge&color=green")
        refreshImage("stars", "https://img.shields.io/github/stars/YubaC/filemanager.svg?style=for-the-badge&color=green")
        refreshImage("watchers", "https://img.shields.io/github/watchers/YubaC/filemanager.svg?style=for-the-badge&color=green")
        reloaded = true
    }
}

function downloadFile(url) {
    let domA = document.createElement('a'); // js创建a标签
    domA.setAttribute('download', ''); // 给a标签设置download属性
    domA.setAttribute('href', url); // 给a标签href属性赋值为要下载文件的路径
    domA.click(); // 点击下载
}

function refreshImage(imgElement, imgURL) {
    // create a new timestamp 
    var timestamp = new Date().getTime();

    var el = document.getElementById(imgElement);

    var queryString = "&t=" + timestamp;

    el.src = imgURL + queryString;
}
// ————————————————
// 版权声明：本文为CSDN博主「allway2」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/allway2/article/details/118301109


function godownload() {
    url = 'https://api.github.com/repos/yubac/filemanager/releases/latest'
    var httpRequest = new XMLHttpRequest(); //第一步：建立所需的对象
    httpRequest.open('GET', url, true); //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText; //获取到json字符串，还需解析
            console.log(json);
            obj = JSON.parse(json);
            downloadFile('https://ghproxy.com/' + obj["assets"][0]["browser_download_url"])
            setTimeout(function() {
                    refreshImage("download_times", "https://img.shields.io/github/downloads/YubaC/filemanager/total?style=for-the-badge")
                }, 2 * 1000)
                // document.getElementById('download').innerHTML = '<a href = "' + obj["assets"][0]["browser_download_url"] + '">下载最新版<\/a>'
        }
    };
}