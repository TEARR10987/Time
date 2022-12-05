function updateTime() {
    var time = new Date();
    var dname = 
        hr = time.getHours(),//
        min = time.getMinutes(),//
        sec = time.getSeconds(),//
        pe = "AM";//
    // 抓AM或PM
    if (hr >= 12) {
        pe = "PM";
    } else {
        pe = "AM"
    }

    // 轉換成兩位數
    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var ids = ["hour", "minutes", "seconds", "period"];
    var values = [hr.pad(2), min.pad(2), sec.pad(2), pe];

    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function startTime() {
    updateTime();
    window.setInterval("updateTime()", 1);
}