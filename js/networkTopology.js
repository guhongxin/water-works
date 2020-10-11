$(function() {
  // 加载完成
  imgRatio(setMeter0)
  $('.meter').on('click', function() {
    let index = $(this).data("instarument")
    if (index === 1) {
      location.href = './jmjd.html'
    }
  })
})
//1920定位仪表
function setMeter0() {
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

  $('.east-gd-details').css({top: '15%', left: '16%' })
  $('.west-gd-details').css({top: '75%', left: '17%' })

  $('.gd-txt1').css({top: '12.5%', left: '82.7%' })
  $('.gd-txt2').css({top: '29.5%', left: '82.7%' })
  $('.gd-txt3').css({top: '46.5%', left: '82.7%' })
  $('.gd-txt4').css({top: '63.5%', left: '82.7%' })
  $('.gd-txt5').css({top: '80.5%', left: '82.7%' })
  $('.gd-txt6').css({top: '97.5%', left: '82.7%' })

}
//1730定位仪表
function setMeter1() {
  $('.instrumentlocation .meter').css('height', '78px')
  $('.instrumentlocation1').css({top: '30%', left: '18%' })
  $('.instrumentlocation2').css({top: '90%', left: '18%' })
  $('.instrumentlocation3').css({top: '4.6%', left: '31.3%' })
  $('.instrumentlocation4').css({top: '21.5%', left: '31.3%' })
  $('.instrumentlocation5').css({top: '38.6%', left: '31.3%' })
  $('.instrumentlocation6').css({top: '55.8%', left: '31.3%' })
  $('.instrumentlocation7').css({top: '72.7%', left: '31.3%' })
  $('.instrumentlocation8').css({top: '89.6%', left: '31.3%' })

  $('.instrumentlocation9').css({top: '4%', left: '43.3%' })
  $('.instrumentlocation10').css({top: '21%', left: '43.3%' })
  $('.instrumentlocation11').css({top: '38%', left: '43.3%' })
  $('.instrumentlocation12').css({top: '55%', left: '43.3%' })
  $('.instrumentlocation13').css({top: '72%', left: '43.3%' })
  $('.instrumentlocation14').css({top: '89%', left: '43.3%' })

  $('.instrumentlocation15').css({top: '4%', left: '57.6%' })
  $('.instrumentlocation16').css({top: '21%', left: '57.6%' })
  $('.instrumentlocation17').css({top: '38%', left: '57.6%' })
  $('.instrumentlocation18').css({top: '55%', left: '57.6%' })
  $('.instrumentlocation19').css({top: '72%', left: '57.6%' })
  $('.instrumentlocation20').css({top: '89%', left: '57.6%' })
  
  $('.instrumentlocation21').css({top: '4%', left: '71.8%' })
  $('.instrumentlocation22').css({top: '21%', left: '71.8%' })
  $('.instrumentlocation23').css({top: '38%', left: '71.8%' })
  $('.instrumentlocation24').css({top: '55%', left: '71.8%' })
  $('.instrumentlocation25').css({top: '72%', left: '71.8%' })
  $('.instrumentlocation26').css({top: '89%', left: '71.8%' })

  $('.east-gd-details').css({top: '14%', left: '16%' })
  $('.west-gd-details').css({top: '74%', left: '17%' })

  $('.gd-txt1').css({top: '12.5%', left: '82.7%' })
  $('.gd-txt2').css({top: '29.5%', left: '82.7%' })
  $('.gd-txt3').css({top: '46.5%', left: '82.7%' })
  $('.gd-txt4').css({top: '63.5%', left: '82.7%' })
  $('.gd-txt5').css({top: '80.5%', left: '82.7%' })
  $('.gd-txt6').css({top: '97.5%', left: '82.7%' })
}

//1730定位仪表
function setMeter2() {
  $('.instrumentlocation .meter').css('height', '60px')
  $('.instrumentlocation1').css({top: '29%', left: '18%' })
  $('.instrumentlocation2').css({top: '89%', left: '18%' })
  $('.instrumentlocation3').css({top: '3.4%', left: '31.2%' })
  $('.instrumentlocation4').css({top: '20.4%', left: '31.2%' })
  $('.instrumentlocation5').css({top: '37.5%', left: '31.2%' })
  $('.instrumentlocation6').css({top: '55%', left: '31.2%' })
  $('.instrumentlocation7').css({top: '71.7%', left: '31.2%' })
  $('.instrumentlocation8').css({top: '89%', left: '31.2%' })

  $('.instrumentlocation9').css({top: '4%', left: '42.4%' })
  $('.instrumentlocation10').css({top: '21%', left: '42.4%' })
  $('.instrumentlocation11').css({top: '38%', left: '42.4%' })
  $('.instrumentlocation12').css({top: '55%', left: '42.4%' })
  $('.instrumentlocation13').css({top: '72%', left: '42.4%' })
  $('.instrumentlocation14').css({top: '89%', left: '42.4%' })

  $('.instrumentlocation15').css({top: '4%', left: '56.6%' })
  $('.instrumentlocation16').css({top: '21%', left: '56.6%' })
  $('.instrumentlocation17').css({top: '38%', left: '56.6%' })
  $('.instrumentlocation18').css({top: '55%', left: '56.6%' })
  $('.instrumentlocation19').css({top: '72%', left: '56.6%' })
  $('.instrumentlocation20').css({top: '89%', left: '56.6%' })
  
  $('.instrumentlocation21').css({top: '4%', left: '70.8%' })
  $('.instrumentlocation22').css({top: '21%', left: '70.8%' })
  $('.instrumentlocation23').css({top: '38%', left: '70.8%' })
  $('.instrumentlocation24').css({top: '55%', left: '70.8%' })
  $('.instrumentlocation25').css({top: '72%', left: '70.8%' })
  $('.instrumentlocation26').css({top: '89%', left: '70.8%' })

  $('.east-gd-details').css({top: '6%', left: '13%' })
  $('.west-gd-details').css({top: '65%', left: '15%' })
  $('.gd-name').css({'font-size': '12px'})
  $('.gd-txt1').css({top: '12.2%', left: '82.4%' })
  $('.gd-txt2').css({top: '29.2%', left: '82.4%' })
  $('.gd-txt3').css({top: '46.2%', left: '82.4%' })
  $('.gd-txt4').css({top: '63.2%', left: '82.4%' })
  $('.gd-txt5').css({top: '80.2%', left: '82.4%' })
  $('.gd-txt6').css({top: '97.2%', left: '82.4%' })
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
    } else {
      // 获取屏幕分辨率
      let screenWidth = window.screen.width
      if (screenWidth >= 1920) {
        $('.water-network').css('width', '1730px')
        setMeter1()
      } else {
        $('.water-network').css('width', '1200px')
        setMeter2()
        console.log('screenWidth', screenWidth)
      }
    }
  }
}