/*动画切入效果*/
const cards = document.querySelectorAll('.index-card')
if (cards.length) {
  document.querySelector('.row').setAttribute('style', 'overflow: hidden;')
  const coefficient = document.documentElement.clientWidth > 768 ? .5 : .3
  const origin = document.documentElement.clientHeight - cards[0].getBoundingClientRect().height * coefficient

  function throttle(fn, wait) {
    let timer = null;
    return function () {
      const context = this;
      const args = arguments;
      if (!timer) {
        timer = setTimeout(function () {
          fn.apply(context, args);
          timer = null;
        }, wait)
      }
    }
  }

  function handle() {
    cards.forEach(card => {
      card.setAttribute('style', `--state: ${(card.getBoundingClientRect().top - origin) < 0 ? 1 : 0};`)
    })
    console.log(1)
  }


  document.addEventListener("scroll", throttle(handle, 100));
}

/*网站建站时间*/
var now = new Date();
function createtime() {
    var grt= new Date("03/31/2024 15:00:00");//在此处修改你的建站时间，格式：月/日/年 时:分:秒
    now.setTime(now.getTime()+250);
    days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
    hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
    if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;}
    seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;}
    document.getElementById("timeDate").innerHTML = "本站已安全运行 "+dnum+" 天 ";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}
setInterval("createtime()",250);

