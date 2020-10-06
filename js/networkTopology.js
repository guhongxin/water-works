$(function() {
  // 加载完成
  imgRatio(setMeter)
})
//定位仪表
function setMeter() {
  $('.instrumentlocation .meter').css('height', '76px')
  $('.instrumentlocation1').css({top: '31%', left: '18%' })
  $('.instrumentlocation2').css({top: '91%', left: '18%' })
  $('.instrumentlocation3').css({top: '5.9%', left: '31.2%' })
  $('.instrumentlocation4').css({top: '23%', left: '31.2%' })
  $('.instrumentlocation5').css({top: '40%', left: '31.2%' })
  $('.instrumentlocation6').css({top: '57.2%', left: '31.2%' })
  $('.instrumentlocation7').css({top: '74.2%', left: '31.2%' })
  $('.instrumentlocation8').css({top: '91%', left: '31.2%' })

  $('.instrumentlocation9').css({top: '4%', left: '43.5%' })
  $('.instrumentlocation10').css({top: '21%', left: '43.5%' })
  $('.instrumentlocation11').css({top: '38%', left: '43.5%' })
  $('.instrumentlocation12').css({top: '55%', left: '43.5%' })
  $('.instrumentlocation13').css({top: '72%', left: '43.5%' })
  $('.instrumentlocation14').css({top: '89%', left: '43.5%' })

  $('.instrumentlocation15').css({top: '4%', left: '57.9%' })
  $('.instrumentlocation16').css({top: '21%', left: '57.9%' })
  $('.instrumentlocation17').css({top: '38%', left: '57.9%' })
  $('.instrumentlocation18').css({top: '55%', left: '57.9%' })
  $('.instrumentlocation19').css({top: '72%', left: '57.9%' })
  $('.instrumentlocation20').css({top: '89%', left: '57.9%' })
  
  $('.instrumentlocation21').css({top: '4%', left: '72%' })
  $('.instrumentlocation22').css({top: '21%', left: '72%' })
  $('.instrumentlocation23').css({top: '38%', left: '72%' })
  $('.instrumentlocation24').css({top: '55%', left: '72%' })
  $('.instrumentlocation25').css({top: '72%', left: '72%' })
  $('.instrumentlocation26').css({top: '89%', left: '72%' })
}
// 获取图片比率
function imgRatio(callback) {
  let img = new Image()
  img.src = "./img/water-network.png"
  img.onload = function() {
    console.log('img', img)
    // 原始图片大小
    let wt = img.width
    let ht = img.height
    console.log(wt)
    console.log(ht)
    // 页面加载图片大小
    let waterworkimgwt = $('.water-work-img').width()
    let waterworkimgHt = $('.water-work-img').height()
    if (waterworkimgwt >= wt) {
      $('.water-network').css('width', wt + 'px')
      callback()
    }
  }
}