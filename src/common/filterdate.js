const formatDate = function (value, format) {
    var date = new Date(value);
    function addZero(date) {
      if (date < 10) {
        return "0" + date;
      }
      return date;
    }
    let getTime = {
      yyyy: date.getFullYear(),
      yy: date.getFullYear() % 100,
      MM: addZero(date.getMonth() + 1),
      M: date.getMonth() + 1,
      dd: addZero(date.getDate()),
      d: date.getDate(),
      HH: addZero(date.getHours()),
      H: date.getHours(),
      hh: addZero(date.getHours() % 12),
      h: date.getHours() % 12,
      mm: addZero(date.getMinutes()),
      m: date.getMinutes(),
      ss: addZero(date.getSeconds()),
      s: date.getSeconds(),
      w: (function () {
        let a = ["日", "一", "二", "三", "四", "五", "六"];
        return a[date.getDay()];
      })(),
    };
    for (let i in getTime) {
      format = format.replace(i, getTime[i]);
    }
    return format;
  }
export {
    formatDate //通过此处导出方法
} 