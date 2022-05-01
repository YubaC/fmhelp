// <script src="js/pc.js"></script>
function IsPc() { //是PC→false，是移动端→true
    let userAgent = navigator.userAgent,
        Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    console.log('userAgent:', userAgent)
    return Agents.some((i) => {
        return userAgent.includes(i)
    })
}

if (!IsPc()) {
    document.write('<script type="text/javascript" charset="utf-8" src="https://haogeshuohuanihaohaoting.github.io/static/mdCreateMenu.js"><\/script>');
}