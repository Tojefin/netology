export default function DateTimePretty(WrapComponent) {
  return function ({date}) {
    
    let prettyTime
    let uploadTime = new Date(date).getTime();
    let nowTime = new Date().getTime();
    let diff = nowTime - uploadTime;

    let dd = Math.floor(diff / 1000 / 60 / (60 * 24));
    var hh = new Date(diff).getHours();

    if(dd > 1) {
      prettyTime = `${dd} дней назад`
    } else if(hh > 1) {
      prettyTime = `5 часов назад`
    } else if(hh < 1) {
      prettyTime = `12 минут назад`
    }

    return <WrapComponent date={prettyTime} />
  }
}