$(function() {
  // 加载完成
  oneimgRatio(onesetMeter0)
  twoimgRatio(twosetMeter0)
  treeimgRatio(treesetMeter0)
  $('.meter').on('click', function() {
    let index = $(this).data("instarument")
    if (index === undefined) return false 
    let pageName = $(this).data("pageName") || ''
    let wz = $(this).data("wz") || ''
    let wzArr = wz.split('-')
    let _titleName = pageName + ' 流量管控中心'
    $('.wz-place').css('display', 'block');
    $('.page-title .title').text(_titleName)
    $('.wz-place .home').css('cursor', 'auto');
    $('.wz-place .wz-place-one').css('cursor', 'auto');
    if (wzArr.length > 1) {
      $('.wz-place .wz-place-one').text(wzArr[0]);
      $('.wz-place .wz-place-two').css('display', 'inline');
      $('.wz-place .wz-place-two-txt').text(wzArr[1]);
      $('.wz-place .home').css('cursor', 'pointer');
      $('.wz-place .wz-place-one').css('cursor', 'pointer');
    } else {
      $('.wz-place .wz-place-one').text(wzArr[0]);
      $('.wz-place .wz-place-two').css('display', 'none');
      $('.wz-place .wz-place-two-txt').text('');
      $('.wz-place .home').css('cursor', 'pointer');
    }
    if (index + '' === '1') {
      $('.primary-piping').css('display', 'none')
      $('.secondary-piping').css('display', 'block')
      $('.tertiary-piping').css('display', 'none')
    } else if (index === '2-1') {
      $('.primary-piping').css('display', 'none')
      $('.secondary-piping').css('display', 'none')
      $('.tertiary-piping').css('display', 'block')
    }
  })
  $('.wz-place .home').on('click', function() {
    $('.primary-piping').css('display', 'block')
    $('.secondary-piping').css('display', 'none')
    $('.tertiary-piping').css('display', 'none')
    $('.page-title .title').text('取水泵站机组轴承运行监控')
    $('.wz-place').css('display', 'none');
  })
  $('.wz-place .wz-place-one').on('click', function() {
    $('.primary-piping').css('display', 'none')
    $('.secondary-piping').css('display', 'block')
    $('.tertiary-piping').css('display', 'none')
    let txt = $(this).text()
    $('.page-title .title').text(txt + ' 流量管控中心')
    $('.wz-place .wz-place-two').css('display', 'none');
  })
})
//1920定位仪表
function onesetMeter0() {
  $('.primary-piping .instrumentlocation .meter').css({'height':'86px', 'transform': 'scale(1.1)'})
  $('.primary-piping .instrumentlocation1').css({top: '29%', left: '18%' })
  $('.primary-piping .instrumentlocation2').css({top: '88.2%', left: '18%' })
  $('.primary-piping .instrumentlocation3').css({top: '3.9%', left: '31.2%' })
  $('.primary-piping .instrumentlocation4').css({top: '20.6%', left: '31.2%' })
  $('.primary-piping .instrumentlocation5').css({top: '37.6%', left: '31.2%' })
  $('.primary-piping .instrumentlocation6').css({top: '54.7%', left: '31.2%' })
  $('.primary-piping .instrumentlocation7').css({top: '71.2%', left: '31.2%' })
  $('.primary-piping .instrumentlocation8').css({top: '88.1%', left: '31.2%' })

  $('.primary-piping .instrumentlocation9').css({top: '4%', left: '43.5%' })
  $('.primary-piping .instrumentlocation10').css({top: '21%', left: '43.5%' })
  $('.primary-piping .instrumentlocation11').css({top: '38%', left: '43.5%' })
  $('.primary-piping .instrumentlocation12').css({top: '55%', left: '43.5%' })
  $('.primary-piping .instrumentlocation13').css({top: '72%', left: '43.5%' })
  $('.primary-piping .instrumentlocation14').css({top: '89%', left: '43.5%' })

  $('.primary-piping .instrumentlocation15').css({top: '4%', left: '57.9%' })
  $('.primary-piping .instrumentlocation16').css({top: '21%', left: '57.9%' })
  $('.primary-piping .instrumentlocation17').css({top: '38%', left: '57.9%' })
  $('.primary-piping .instrumentlocation18').css({top: '55%', left: '57.9%' })
  $('.primary-piping .instrumentlocation19').css({top: '72%', left: '57.9%' })
  $('.primary-piping .instrumentlocation20').css({top: '89%', left: '57.9%' })
  
  $('.primary-piping .instrumentlocation21').css({top: '4%', left: '72%' })
  $('.primary-piping .instrumentlocation22').css({top: '21%', left: '72%' })
  $('.primary-piping .instrumentlocation23').css({top: '38%', left: '72%' })
  $('.primary-piping .instrumentlocation24').css({top: '55%', left: '72%' })
  $('.primary-piping .instrumentlocation25').css({top: '72%', left: '72%' })
  $('.primary-piping .instrumentlocation26').css({top: '89%', left: '72%' })

  $('.primary-piping .east-gd-details').css({top: '12%', left: '16%' })
  $('.primary-piping .west-gd-details').css({top: '72%', left: '17%' })

  $('.primary-piping .gd-txt1').css({top: '12.5%', left: '82.7%' })
  $('.primary-piping .gd-txt2').css({top: '29.5%', left: '82.7%' })
  $('.primary-piping .gd-txt3').css({top: '46.5%', left: '82.7%' })
  $('.primary-piping .gd-txt4').css({top: '63.5%', left: '82.7%' })
  $('.primary-piping .gd-txt5').css({top: '80.5%', left: '82.7%' })
  $('.primary-piping .gd-txt6').css({top: '97.5%', left: '82.7%' })

}
//1730定位仪表
function onesetMeter1() {
  $('.primary-piping .instrumentlocation .meter').css('height', '78px')
  $('.primary-piping .instrumentlocation1').css({top: '29.5%', left: '18%' })
  $('.primary-piping .instrumentlocation2').css({top: '88.5%', left: '18%' })
  $('.primary-piping .instrumentlocation3').css({top: '4.2%', left: '31.3%' })
  $('.primary-piping .instrumentlocation4').css({top: '21.2%', left: '31.3%' })
  $('.primary-piping .instrumentlocation5').css({top: '38%', left: '31.3%' })
  $('.primary-piping .instrumentlocation6').css({top: '54.9%', left: '31.3%' })
  $('.primary-piping .instrumentlocation7').css({top: '71.6%', left: '31.3%' })
  $('.primary-piping .instrumentlocation8').css({top: '88.4%', left: '31.3%' })

  $('.primary-piping .instrumentlocation9').css({top: '4%', left: '43.3%' })
  $('.primary-piping .instrumentlocation10').css({top: '21%', left: '43.3%' })
  $('.primary-piping .instrumentlocation11').css({top: '38%', left: '43.3%' })
  $('.primary-piping .instrumentlocation12').css({top: '55%', left: '43.3%' })
  $('.primary-piping .instrumentlocation13').css({top: '72%', left: '43.3%' })
  $('.primary-piping .instrumentlocation14').css({top: '89%', left: '43.3%' })

  $('.primary-piping .instrumentlocation15').css({top: '4%', left: '57.6%' })
  $('.primary-piping .instrumentlocation16').css({top: '21%', left: '57.6%' })
  $('.primary-piping .instrumentlocation17').css({top: '38%', left: '57.6%' })
  $('.primary-piping .instrumentlocation18').css({top: '55%', left: '57.6%' })
  $('.primary-piping .instrumentlocation19').css({top: '72%', left: '57.6%' })
  $('.primary-piping .instrumentlocation20').css({top: '89%', left: '57.6%' })
  
  $('.primary-piping .instrumentlocation21').css({top: '4%', left: '71.8%' })
  $('.primary-piping .instrumentlocation22').css({top: '21%', left: '71.8%' })
  $('.primary-piping .instrumentlocation23').css({top: '38%', left: '71.8%' })
  $('.primary-piping .instrumentlocation24').css({top: '55%', left: '71.8%' })
  $('.primary-piping .instrumentlocation25').css({top: '72%', left: '71.8%' })
  $('.primary-piping .instrumentlocation26').css({top: '89%', left: '71.8%' })

  $('.primary-piping .east-gd-details').css({top: '11%', left: '16%' })
  $('.primary-piping .west-gd-details').css({top: '71%', left: '17%' })

  $('.primary-piping .gd-txt1').css({top: '12.5%', left: '82.7%' })
  $('.primary-piping .gd-txt2').css({top: '29.5%', left: '82.7%' })
  $('.primary-piping .gd-txt3').css({top: '46.5%', left: '82.7%' })
  $('.primary-piping .gd-txt4').css({top: '63.5%', left: '82.7%' })
  $('.primary-piping .gd-txt5').css({top: '80.5%', left: '82.7%' })
  $('.primary-piping .gd-txt6').css({top: '97.5%', left: '82.7%' })
}

//1730定位仪表
function onesetMeter2() {
  $('.primary-piping .instrumentlocation .meter').css('height', '60px')
  $('.primary-piping .instrumentlocation1').css({top: '28.5%', left: '18%' })
  $('.primary-piping .instrumentlocation2').css({top: '87.6%', left: '18%' })
  $('.primary-piping .instrumentlocation3').css({top: '3.2%', left: '31.2%' })
  $('.primary-piping .instrumentlocation4').css({top: '20.2%', left: '31.2%' })
  $('.primary-piping .instrumentlocation5').css({top: '37.1%', left: '31.2%' })
  $('.primary-piping .instrumentlocation6').css({top: '53.8%', left: '31.2%' })
  $('.primary-piping .instrumentlocation7').css({top: '70.7%', left: '31.2%' })
  $('.primary-piping .instrumentlocation8').css({top: '87.5%', left: '31.2%' })

  $('.primary-piping .instrumentlocation9').css({top: '4%', left: '42.4%' })
  $('.primary-piping .instrumentlocation10').css({top: '21%', left: '42.4%' })
  $('.primary-piping .instrumentlocation11').css({top: '38%', left: '42.4%' })
  $('.primary-piping .instrumentlocation12').css({top: '55%', left: '42.4%' })
  $('.primary-piping .instrumentlocation13').css({top: '72%', left: '42.4%' })
  $('.primary-piping .instrumentlocation14').css({top: '89%', left: '42.4%' })

  $('.primary-piping .instrumentlocation15').css({top: '4%', left: '56.6%' })
  $('.primary-piping .instrumentlocation16').css({top: '21%', left: '56.6%' })
  $('.primary-piping .instrumentlocation17').css({top: '38%', left: '56.6%' })
  $('.primary-piping .instrumentlocation18').css({top: '55%', left: '56.6%' })
  $('.primary-piping .instrumentlocation19').css({top: '72%', left: '56.6%' })
  $('.primary-piping .instrumentlocation20').css({top: '89%', left: '56.6%' })
  
  $('.primary-piping .instrumentlocation21').css({top: '4%', left: '70.8%' })
  $('.primary-piping .instrumentlocation22').css({top: '21%', left: '70.8%' })
  $('.primary-piping .instrumentlocation23').css({top: '38%', left: '70.8%' })
  $('.primary-piping .instrumentlocation24').css({top: '55%', left: '70.8%' })
  $('.primary-piping .instrumentlocation25').css({top: '72%', left: '70.8%' })
  $('.primary-piping .instrumentlocation26').css({top: '89%', left: '70.8%' })

  $('.primary-piping .east-gd-details').css({top: '3%', left: '13%' })
  $('.primary-piping .west-gd-details').css({top: '62%', left: '15%' })

  $('.primary-piping .gd-name').css({'font-size': '12px'})
  $('.primary-piping .gd-txt1').css({top: '12.2%', left: '82.4%' })
  $('.primary-piping .gd-txt2').css({top: '29.2%', left: '82.4%' })
  $('.primary-piping .gd-txt3').css({top: '46.2%', left: '82.4%' })
  $('.primary-piping .gd-txt4').css({top: '63.2%', left: '82.4%' })
  $('.primary-piping .gd-txt5').css({top: '80.2%', left: '82.4%' })
  $('.primary-piping .gd-txt6').css({top: '97.2%', left: '82.4%' })
}

//1920定位仪表
function twosetMeter0() {
  $('.secondary-piping .instrumentlocation .meter').css('height', '80px')
  $('.secondary-piping .instrumentlocation .meter3').css('height', '34px')

  $('.secondary-piping .instrumentlocation1').css({top: '30%', left: '18%' })

  $('.secondary-piping .instrumentlocation2').css({top: '4.8%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation3').css({top: '21.8%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation4').css({top: '38.6%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation5').css({top: '55.4%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation6').css({top: '72.2%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation7').css({top: '89.1%', left: '31.2%' })

  $('.secondary-piping .instrumentlocation8').css({top: '4.3%', left: '43.4%' })
  $('.secondary-piping .instrumentlocation9').css({top: '21.5%', left: '43.4%' })
  $('.secondary-piping .instrumentlocation10').css({top: '38.3%', left: '43.4%' })
  $('.secondary-piping .instrumentlocation11').css({top: '55.5%', left: '43.4%' })
  $('.secondary-piping .instrumentlocation12').css({top: '72.3%', left: '43.4%' })
  $('.secondary-piping .instrumentlocation13').css({top: '89.5%', left: '43.4%' })

  $('.secondary-piping .instrumentlocation14').css({top: '4.3%', left: '57.6%' })
  $('.secondary-piping .instrumentlocation15').css({top: '21.5%', left: '57.6%' })
  $('.secondary-piping .instrumentlocation16').css({top: '38.3%', left: '57.6%' })
  $('.secondary-piping .instrumentlocation17').css({top: '55.5%', left: '57.6%' })
  $('.secondary-piping .instrumentlocation18').css({top: '72.3%', left: '57.6%' })
  $('.secondary-piping .instrumentlocation19').css({top: '89.5%', left: '57.6%' })

  $('.secondary-piping .instrumentlocation20').css({top: '4.3%', left: '71.9%' })
  $('.secondary-piping .instrumentlocation21').css({top: '21.5%', left: '71.9%' })
  $('.secondary-piping .instrumentlocation22').css({top: '38.3%', left: '71.9%' })
  $('.secondary-piping .instrumentlocation23').css({top: '55.5%', left: '71.9%' })
  $('.secondary-piping .instrumentlocation24').css({top: '72.3%', left: '71.9%' })
  $('.secondary-piping .instrumentlocation25').css({top: '89.5%', left: '71.9%' })

  $('.secondary-piping .east-gd-details').css({top: '13%', left: '16%' })

  $('.secondary-piping .gd-txt1').css({top: '12%', left: '82.7%' })
  $('.secondary-piping .gd-txt2').css({top: '29%', left: '82.7%' })
  $('.secondary-piping .gd-txt3').css({top: '46%', left: '82.7%' })
  $('.secondary-piping .gd-txt4').css({top: '63%', left: '82.7%' })
  $('.secondary-piping.gd-txt4').css({top: '63%', left: '82.7%' })
  $('.secondary-piping .gd-txt4').css({top: '63%', left: '82.7%' })
  $('.secondary-piping .gd-txt4').css({top: '63%', left: '82.7%' })
  $('.secondary-piping .gd-txt5').css({top: '80%', left: '82.7%' })
  $('.secondary-piping .gd-txt6').css({top: '97%', left: '82.7%' })
  $('.secondary-piping .gd-txt7').css({top: '-1%', left: '44.6%' })
  $('.secondary-piping .gd-txt8').css({top: '-1%', left: '58.8%' })
  $('.secondary-piping .gd-txt9').css({top: '-1%', left: '73%' })
  $('.secondary-piping .gd-txt10').css({top: '17%', left: '44.5%' })
  $('.secondary-piping .gd-txt11').css({top: '17%', left: '59%' })
  $('.secondary-piping .gd-txt12').css({top: '17%', left: '72.8%' })
  $('.secondary-piping .gd-txt13').css({top: '34%', left: '44.9%' })
  $('.secondary-piping .gd-txt14').css({top: '34%', left: '58.8%' })
  $('.secondary-piping .gd-txt15').css({top: '34%', left: '73.7%' })
  $('.secondary-piping .gd-txt16').css({top: '51%', left: '44.5%' })
  $('.secondary-piping .gd-txt17').css({top: '51%', left: '58.8%' })
  $('.secondary-piping .gd-txt18').css({top: '51%', left: '72.7%' })
  $('.secondary-piping .gd-txt19').css({top: '68%', left: '44.8%' })
  $('.secondary-piping .gd-txt20').css({top: '68%', left: '59%' })
  $('.secondary-piping .gd-txt21').css({top: '68%', left: '73.5%' })
  $('.secondary-piping .gd-txt22').css({top: '85%', left: '44.8%' })
  $('.secondary-piping .gd-txt23').css({top: '85%', left: '59.2%' })
  $('.secondary-piping .gd-txt24').css({top: '85%', left: '73.5%' })
  $('.secondary-piping .water-tank-name').css({top: '67%', left: '6.5%' })
}
//1730定位仪表
function twosetMeter1() {
  $('.secondary-piping .instrumentlocation .meter').css('height', '79px')
  $('.secondary-piping .instrumentlocation .meter3').css('height', '34px')

  $('.secondary-piping .instrumentlocation1').css({top: '29.3%', left: '18%' })

  $('.secondary-piping .instrumentlocation2').css({top: '4%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation3').css({top: '21%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation4').css({top: '37.9%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation5').css({top: '54.8%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation6').css({top: '71.6%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation7').css({top: '88.3%', left: '31.2%' })

  $('.secondary-piping .instrumentlocation8').css({top: '4.3%', left: '43.2%' })
  $('.secondary-piping .instrumentlocation9').css({top: '21.5%', left: '43.2%' })
  $('.secondary-piping .instrumentlocation10').css({top: '38.3%', left: '43.2%' })
  $('.secondary-piping .instrumentlocation11').css({top: '55.5%', left: '43.2%' })
  $('.secondary-piping .instrumentlocation12').css({top: '72.3%', left: '43.2%' })
  $('.secondary-piping .instrumentlocation13').css({top: '89.5%', left: '43.2%' })

  $('.secondary-piping .instrumentlocation14').css({top: '4.3%', left: '57.4%' })
  $('.secondary-piping .instrumentlocation15').css({top: '21.5%', left: '57.4%' })
  $('.secondary-piping .instrumentlocation16').css({top: '38.3%', left: '57.4%' })
  $('.secondary-piping .instrumentlocation17').css({top: '55.5%', left: '57.4%' })
  $('.secondary-piping .instrumentlocation18').css({top: '72.3%', left: '57.4%' })
  $('.secondary-piping .instrumentlocation19').css({top: '89.5%', left: '57.4%' })

  $('.secondary-piping .instrumentlocation20').css({top: '4.3%', left: '71.6%' })
  $('.secondary-piping .instrumentlocation21').css({top: '21.5%', left: '71.6%' })
  $('.secondary-piping .instrumentlocation22').css({top: '38.3%', left: '71.6%' })
  $('.secondary-piping .instrumentlocation23').css({top: '55.5%', left: '71.6%' })
  $('.secondary-piping .instrumentlocation24').css({top: '72.3%', left: '71.6%' })
  $('.secondary-piping .instrumentlocation25').css({top: '89.5%', left: '71.6%' })

  $('.secondary-piping .east-gd-details').css({top: '11%', left: '16%' })

  $('.secondary-piping .gd-name').css({'font-size': '14px'})
  $('.secondary-piping .gd-txt1').css({top: '12%', left: '82.7%' })
  $('.secondary-piping .gd-txt2').css({top: '29%', left: '82.7%' })
  $('.secondary-piping .gd-txt3').css({top: '46%', left: '82.7%' })
  $('.secondary-piping .gd-txt4').css({top: '63%', left: '82.7%' })
  $('.secondary-piping .gd-txt5').css({top: '80%', left: '82.7%' })
  $('.secondary-piping .gd-txt6').css({top: '97%', left: '82.7%' })
  $('.secondary-piping .gd-txt7').css({top: '-1%', left: '44.6%' })
  $('.secondary-piping .gd-txt8').css({top: '-1%', left: '58.8%' })
  $('.secondary-piping .gd-txt9').css({top: '-1%', left: '73%' })
  $('.secondary-piping .gd-txt10').css({top: '17%', left: '44.5%' })
  $('.secondary-piping .gd-txt11').css({top: '17%', left: '59%' })
  $('.secondary-piping .gd-txt12').css({top: '17%', left: '72.8%' })
  $('.secondary-piping .gd-txt13').css({top: '34%', left: '44.9%' })
  $('.secondary-piping .gd-txt14').css({top: '34%', left: '58.8%' })
  $('.secondary-piping .gd-txt15').css({top: '34%', left: '73.7%' })
  $('.secondary-piping .gd-txt16').css({top: '51%', left: '44.5%' })
  $('.secondary-piping .gd-txt17').css({top: '51%', left: '58.8%' })
  $('.secondary-piping .gd-txt18').css({top: '51%', left: '72.7%' })
  $('.secondary-piping .gd-txt19').css({top: '68%', left: '44.8%' })
  $('.secondary-piping .gd-txt20').css({top: '68%', left: '59%' })
  $('.secondary-piping .gd-txt21').css({top: '68%', left: '73.5%' })
  $('.secondary-piping .gd-txt22').css({top: '85%', left: '44.8%' })
  $('.secondary-piping .gd-txt23').css({top: '85%', left: '59.2%' })
  $('.secondary-piping .gd-txt24').css({top: '85%', left: '73.5%' })
  $('.secondary-piping .water-tank-name').css({top: '67%', left: '6.5%' })
}
//1200定位仪表
function twosetMeter2() {
  $('.secondary-piping .instrumentlocation .meter').css('height', '60px')
  $('.secondary-piping .instrumentlocation .meter3').css('height', '34px')

  $('.secondary-piping .instrumentlocation1').css({top: '28.3%', left: '18%' })

  $('.secondary-piping .instrumentlocation2').css({top: '3.4%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation3').css({top: '20%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation4').css({top: '37%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation5').css({top: '53.8%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation6').css({top: '70.6%', left: '31.2%' })
  $('.secondary-piping .instrumentlocation7').css({top: '87.8%', left: '31.2%' })

  $('.secondary-piping .instrumentlocation8').css({top: '3%', left: '42.1%' })
  $('.secondary-piping .instrumentlocation9').css({top: '20%', left: '42.1%' })
  $('.secondary-piping .instrumentlocation10').css({top: '37%', left: '42.1%' })
  $('.secondary-piping .instrumentlocation11').css({top: '54%', left: '42.1%' })
  $('.secondary-piping .instrumentlocation12').css({top: '71%', left: '42.1%' })
  $('.secondary-piping .instrumentlocation13').css({top: '88%', left: '42.1%' })

  $('.secondary-piping .instrumentlocation14').css({top: '3%', left: '56.3%' })
  $('.secondary-piping .instrumentlocation15').css({top: '20%', left: '56.3%' })
  $('.secondary-piping .instrumentlocation16').css({top: '37%', left: '56.3%' })
  $('.secondary-piping .instrumentlocation17').css({top: '54%', left: '56.3%' })
  $('.secondary-piping .instrumentlocation18').css({top: '71%', left: '56.3%' })
  $('.secondary-piping .instrumentlocation19').css({top: '88%', left: '56.3%' })

  $('.secondary-piping .instrumentlocation20').css({top: '3%', left: '70.6%' })
  $('.secondary-piping .instrumentlocation21').css({top: '20%', left: '70.6%' })
  $('.secondary-piping .instrumentlocation22').css({top: '37%', left: '70.6%' })
  $('.secondary-piping .instrumentlocation23').css({top: '54%', left: '70.6%' })
  $('.secondary-piping .instrumentlocation24').css({top: '71%', left: '70.6%' })
  $('.secondary-piping .instrumentlocation25').css({top: '88%', left: '70.6%' })

  $('.secondary-piping .east-gd-details').css({top: '3%', left: '14%' })
  
  $('.secondary-piping .gd-name').css({'font-size': '14px'})
  $('.secondary-piping .gd-txt1').css({top: '12%', left: '82.7%' })
  $('.secondary-piping .gd-txt2').css({top: '29%', left: '82.7%' })
  $('.secondary-piping .gd-txt3').css({top: '46%', left: '82.7%' })
  $('.secondary-piping .gd-txt4').css({top: '63%', left: '82.7%' })
  $('.secondary-piping .gd-txt5').css({top: '80%', left: '82.7%' })
  $('.secondary-piping .gd-txt6').css({top: '97%', left: '82.7%' })
  $('.secondary-piping .gd-txt7').css({top: '-1%', left: '44.6%' })
  $('.secondary-piping .gd-txt8').css({top: '-1%', left: '58.8%' })
  $('.secondary-piping .gd-txt9').css({top: '-1%', left: '73%' })
  $('.secondary-piping .gd-txt10').css({top: '17%', left: '44.5%' })
  $('.secondary-piping .gd-txt11').css({top: '17%', left: '59%' })
  $('.secondary-piping .gd-txt12').css({top: '17%', left: '72.8%' })
  $('.secondary-piping .gd-txt13').css({top: '34%', left: '44.9%' })
  $('.secondary-piping .gd-txt14').css({top: '34%', left: '58.8%' })
  $('.secondary-piping .gd-txt15').css({top: '34%', left: '73.7%' })
  $('.secondary-piping .gd-txt16').css({top: '51%', left: '44.5%' })
  $('.secondary-piping .gd-txt17').css({top: '51%', left: '58.8%' })
  $('.secondary-piping .gd-txt18').css({top: '51%', left: '72.7%' })
  $('.secondary-piping .gd-txt19').css({top: '68%', left: '44.8%' })
  $('.secondary-piping .gd-txt20').css({top: '68%', left: '59%' })
  $('.secondary-piping .gd-txt21').css({top: '68%', left: '73.5%' })
  $('.secondary-piping .gd-txt22').css({top: '85%', left: '44.8%' })
  $('.secondary-piping .gd-txt23').css({top: '85%', left: '59.2%' })
  $('.secondary-piping .gd-txt24').css({top: '85%', left: '73.5%' })
  $('.secondary-piping .water-tank-name').css({top: '67%', left: '6.5%' })
}
//1920定位仪表
function treesetMeter0() {
  $('.tertiary-piping .instrumentlocation .meter').css('height', '80px')
  $('.tertiary-piping .instrumentlocation .meter3').css('height', '34px')

  $('.tertiary-piping .instrumentlocation1').css({top: '30%', left: '18%' })

  $('.tertiary-piping .instrumentlocation2').css({top: '4.8%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation3').css({top: '21.8%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation4').css({top: '38.6%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation5').css({top: '55.4%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation6').css({top: '72.2%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation7').css({top: '89.1%', left: '31.2%' })

  $('.tertiary-piping .instrumentlocation8').css({top: '4.3%', left: '43.4%' })
  $('.tertiary-piping .instrumentlocation9').css({top: '21.5%', left: '43.4%' })
  $('.tertiary-piping .instrumentlocation10').css({top: '38.3%', left: '43.4%' })
  $('.tertiary-piping .instrumentlocation11').css({top: '55.5%', left: '43.4%' })
  $('.tertiary-piping .instrumentlocation12').css({top: '72.3%', left: '43.4%' })
  $('.tertiary-piping .instrumentlocation13').css({top: '89.5%', left: '43.4%' })

  $('.tertiary-piping .instrumentlocation14').css({top: '4.3%', left: '57.6%' })
  $('.tertiary-piping .instrumentlocation15').css({top: '21.5%', left: '57.6%' })
  $('.tertiary-piping .instrumentlocation16').css({top: '38.3%', left: '57.6%' })
  $('.tertiary-piping .instrumentlocation17').css({top: '55.5%', left: '57.6%' })
  $('.tertiary-piping .instrumentlocation18').css({top: '72.3%', left: '57.6%' })
  $('.tertiary-piping .instrumentlocation19').css({top: '89.5%', left: '57.6%' })

  $('.tertiary-piping .instrumentlocation20').css({top: '4.3%', left: '71.9%' })
  $('.tertiary-piping .instrumentlocation21').css({top: '21.5%', left: '71.9%' })
  $('.tertiary-piping .instrumentlocation22').css({top: '38.3%', left: '71.9%' })
  $('.tertiary-piping .instrumentlocation23').css({top: '55.5%', left: '71.9%' })
  $('.tertiary-piping .instrumentlocation24').css({top: '72.3%', left: '71.9%' })
  $('.tertiary-piping .instrumentlocation25').css({top: '89.5%', left: '71.9%' })

  $('.tertiary-piping .east-gd-details').css({top: '11%', left: '16%' })

  $('.tertiary-piping .gd-txt1').css({top: '12%', left: '82.7%' })
  $('.tertiary-piping .gd-txt2').css({top: '29%', left: '82.7%' })
  $('.tertiary-piping .gd-txt3').css({top: '46%', left: '82.7%' })
  $('.tertiary-piping .gd-txt4').css({top: '63%', left: '82.7%' })
  $('.tertiary-piping .gd-txt5').css({top: '80%', left: '82.7%' })
  $('.tertiary-piping .gd-txt6').css({top: '97%', left: '82.7%' })
  $('.tertiary-piping .gd-txt7').css({top: '-1%', left: '44.6%' })
  $('.tertiary-piping .gd-txt8').css({top: '-1%', left: '58.8%' })
  $('.tertiary-piping .gd-txt9').css({top: '-1%', left: '73%' })
  $('.tertiary-piping .gd-txt10').css({top: '17%', left: '44.5%' })
  $('.tertiary-piping .gd-txt11').css({top: '17%', left: '59%' })
  $('.tertiary-piping .gd-txt12').css({top: '17%', left: '72.8%' })
  $('.tertiary-piping .gd-txt13').css({top: '34%', left: '44.9%' })
  $('.tertiary-piping .gd-txt14').css({top: '34%', left: '58.8%' })
  $('.tertiary-piping .gd-txt15').css({top: '34%', left: '73.7%' })
  $('.tertiary-piping .gd-txt16').css({top: '51%', left: '44.5%' })
  $('.tertiary-piping .gd-txt17').css({top: '51%', left: '58.8%' })
  $('.tertiary-piping .gd-txt18').css({top: '51%', left: '72.7%' })
  $('.tertiary-piping .gd-txt19').css({top: '68%', left: '44.8%' })
  $('.tertiary-piping .gd-txt20').css({top: '68%', left: '59%' })
  $('.tertiary-piping .gd-txt21').css({top: '68%', left: '73.5%' })
  $('.tertiary-piping .gd-txt22').css({top: '85%', left: '44.8%' })
  $('.tertiary-piping .gd-txt23').css({top: '85%', left: '59.2%' })
  $('.tertiary-piping .gd-txt24').css({top: '85%', left: '73.5%' })
  $('.tertiary-piping .water-tank-name').css({top: '67%', left: '7.5%' })
}
//1730定位仪表
function treesetMeter1() {
  $('.tertiary-piping .instrumentlocation .meter').css('height', '79px')
  $('.tertiary-piping .instrumentlocation .meter3').css('height', '34px')

  $('.tertiary-piping .instrumentlocation1').css({top: '29.3%', left: '18%' })

  $('.tertiary-piping .instrumentlocation2').css({top: '4%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation3').css({top: '21%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation4').css({top: '37.9%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation5').css({top: '54.8%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation6').css({top: '71.6%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation7').css({top: '88.3%', left: '31.2%' })

  $('.tertiary-piping .instrumentlocation8').css({top: '4.3%', left: '43.2%' })
  $('.tertiary-piping .instrumentlocation9').css({top: '21.5%', left: '43.2%' })
  $('.tertiary-piping .instrumentlocation10').css({top: '38.3%', left: '43.2%' })
  $('.tertiary-piping .instrumentlocation11').css({top: '55.5%', left: '43.2%' })
  $('.tertiary-piping .instrumentlocation12').css({top: '72.3%', left: '43.2%' })
  $('.tertiary-piping .instrumentlocation13').css({top: '89.5%', left: '43.2%' })

  $('.tertiary-piping .instrumentlocation14').css({top: '4.3%', left: '57.4%' })
  $('.tertiary-piping .instrumentlocation15').css({top: '21.5%', left: '57.4%' })
  $('.tertiary-piping .instrumentlocation16').css({top: '38.3%', left: '57.4%' })
  $('.tertiary-piping .instrumentlocation17').css({top: '55.5%', left: '57.4%' })
  $('.tertiary-piping .instrumentlocation18').css({top: '72.3%', left: '57.4%' })
  $('.tertiary-piping .instrumentlocation19').css({top: '89.5%', left: '57.4%' })

  $('.tertiary-piping .instrumentlocation20').css({top: '4.3%', left: '71.6%' })
  $('.tertiary-piping .instrumentlocation21').css({top: '21.5%', left: '71.6%' })
  $('.tertiary-piping .instrumentlocation22').css({top: '38.3%', left: '71.6%' })
  $('.tertiary-piping .instrumentlocation23').css({top: '55.5%', left: '71.6%' })
  $('.tertiary-piping .instrumentlocation24').css({top: '72.3%', left: '71.6%' })
  $('.tertiary-piping .instrumentlocation25').css({top: '89.5%', left: '71.6%' })

  $('.tertiary-piping .east-gd-details').css({top: '11%', left: '16%' })

  $('.tertiary-piping .gd-name').css({'font-size': '14px'})
  $('.tertiary-piping .gd-txt1').css({top: '12%', left: '82.7%' })
  $('.tertiary-piping .gd-txt2').css({top: '29%', left: '82.7%' })
  $('.tertiary-piping .gd-txt3').css({top: '46%', left: '82.7%' })
  $('.tertiary-piping .gd-txt4').css({top: '63%', left: '82.7%' })
  $('.tertiary-piping .gd-txt5').css({top: '80%', left: '82.7%' })
  $('.tertiary-piping .gd-txt6').css({top: '97%', left: '82.7%' })
  $('.tertiary-piping .gd-txt7').css({top: '-1%', left: '44.6%' })
  $('.tertiary-piping .gd-txt8').css({top: '-1%', left: '58.8%' })
  $('.tertiary-piping .gd-txt9').css({top: '-1%', left: '73%' })
  $('.tertiary-piping .gd-txt10').css({top: '17%', left: '44.5%' })
  $('.tertiary-piping .gd-txt11').css({top: '17%', left: '59%' })
  $('.tertiary-piping .gd-txt12').css({top: '17%', left: '72.8%' })
  $('.tertiary-piping .gd-txt13').css({top: '34%', left: '44.9%' })
  $('.tertiary-piping .gd-txt14').css({top: '34%', left: '58.8%' })
  $('.tertiary-piping .gd-txt15').css({top: '34%', left: '73.7%' })
  $('.tertiary-piping .gd-txt16').css({top: '51%', left: '44.5%' })
  $('.tertiary-piping .gd-txt17').css({top: '51%', left: '58.8%' })
  $('.tertiary-piping .gd-txt18').css({top: '51%', left: '72.7%' })
  $('.tertiary-piping .gd-txt19').css({top: '68%', left: '44.8%' })
  $('.tertiary-piping .gd-txt20').css({top: '68%', left: '59%' })
  $('.tertiary-piping .gd-txt21').css({top: '68%', left: '73.5%' })
  $('.tertiary-piping .gd-txt22').css({top: '85%', left: '44.8%' })
  $('.tertiary-piping .gd-txt23').css({top: '85%', left: '59.2%' })
  $('.tertiary-piping .gd-txt24').css({top: '85%', left: '73.5%' })
  $('.tertiary-piping .water-tank-name').css({top: '67%', left: '7.5%' })
}

//1200定位仪表
function treesetMeter2() {
  $('.tertiary-piping .instrumentlocation .meter').css('height', '60px')
  $('.tertiary-piping .instrumentlocation .meter3').css('height', '34px')

  $('.tertiary-piping .instrumentlocation1').css({top: '28.3%', left: '18%' })

  $('.tertiary-piping .instrumentlocation2').css({top: '3.4%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation3').css({top: '20%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation4').css({top: '37%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation5').css({top: '53.8%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation6').css({top: '70.6%', left: '31.2%' })
  $('.tertiary-piping .instrumentlocation7').css({top: '87.8%', left: '31.2%' })

  $('.tertiary-piping .instrumentlocation8').css({top: '3%', left: '42.1%' })
  $('.tertiary-piping .instrumentlocation9').css({top: '20%', left: '42.1%' })
  $('.tertiary-piping .instrumentlocation10').css({top: '37%', left: '42.1%' })
  $('.tertiary-piping .instrumentlocation11').css({top: '54%', left: '42.1%' })
  $('.tertiary-piping .instrumentlocation12').css({top: '71%', left: '42.1%' })
  $('.tertiary-piping .instrumentlocation13').css({top: '88%', left: '42.1%' })

  $('.tertiary-piping .instrumentlocation14').css({top: '3%', left: '56.3%' })
  $('.tertiary-piping .instrumentlocation15').css({top: '20%', left: '56.3%' })
  $('.tertiary-piping .instrumentlocation16').css({top: '37%', left: '56.3%' })
  $('.tertiary-piping .instrumentlocation17').css({top: '54%', left: '56.3%' })
  $('.tertiary-piping .instrumentlocation18').css({top: '71%', left: '56.3%' })
  $('.tertiary-piping .instrumentlocation19').css({top: '88%', left: '56.3%' })

  $('.tertiary-piping .instrumentlocation20').css({top: '3%', left: '70.6%' })
  $('.tertiary-piping .instrumentlocation21').css({top: '20%', left: '70.6%' })
  $('.tertiary-piping .instrumentlocation22').css({top: '37%', left: '70.6%' })
  $('.tertiary-piping .instrumentlocation23').css({top: '54%', left: '70.6%' })
  $('.tertiary-piping .instrumentlocation24').css({top: '71%', left: '70.6%' })
  $('.tertiary-piping .instrumentlocation25').css({top: '88%', left: '70.6%' })

  $('.tertiary-piping .east-gd-details').css({top: '3%', left: '14%' })
  
  $('.tertiary-piping .gd-name').css({'font-size': '14px'})
  $('.tertiary-piping .gd-txt1').css({top: '12%', left: '82.7%' })
  $('.tertiary-piping .gd-txt2').css({top: '29%', left: '82.7%' })
  $('.tertiary-piping .gd-txt3').css({top: '46%', left: '82.7%' })
  $('.tertiary-piping .gd-txt4').css({top: '63%', left: '82.7%' })
  $('.tertiary-piping .gd-txt5').css({top: '80%', left: '82.7%' })
  $('.tertiary-piping .gd-txt6').css({top: '97%', left: '82.7%' })
  $('.tertiary-piping .gd-txt7').css({top: '-1%', left: '44.6%' })
  $('.tertiary-piping .gd-txt8').css({top: '-1%', left: '58.8%' })
  $('.tertiary-piping .gd-txt9').css({top: '-1%', left: '73%' })
  $('.tertiary-piping .gd-txt10').css({top: '17%', left: '44.5%' })
  $('.tertiary-piping .gd-txt11').css({top: '17%', left: '59%' })
  $('.tertiary-piping .gd-txt12').css({top: '17%', left: '72.8%' })
  $('.tertiary-piping .gd-txt13').css({top: '34%', left: '44.9%' })
  $('.tertiary-piping .gd-txt14').css({top: '34%', left: '58.8%' })
  $('.tertiary-piping .gd-txt15').css({top: '34%', left: '73.7%' })
  $('.tertiary-piping .gd-txt16').css({top: '51%', left: '44.5%' })
  $('.tertiary-piping .gd-txt17').css({top: '51%', left: '58.8%' })
  $('.tertiary-piping .gd-txt18').css({top: '51%', left: '72.7%' })
  $('.tertiary-piping .gd-txt19').css({top: '68%', left: '44.8%' })
  $('.tertiary-piping .gd-txt20').css({top: '68%', left: '59%' })
  $('.tertiary-piping .gd-txt21').css({top: '68%', left: '73.5%' })
  $('.tertiary-piping .gd-txt22').css({top: '85%', left: '44.8%' })
  $('.tertiary-piping .gd-txt23').css({top: '85%', left: '59.2%' })
  $('.tertiary-piping .gd-txt24').css({top: '85%', left: '73.5%' })
  $('.tertiary-piping .water-tank-name').css({top: '67%', left: '7.5%' })
}

// 获取一级图片比率
function oneimgRatio(callback) {
  let img = new Image()
  img.src = "./img/water-network.gif"
  img.onload = function() {
    // 原始图片大小
    let wt = img.width
    // 页面加载图片大小
    let waterworkimgwt = $('.primary-piping').width()
    if (waterworkimgwt >= wt) {
      $('.primary-piping').css('width', wt + 'px')
      callback()
    } else {
      // 获取屏幕分辨率
      let screenWidth = window.screen.width
      if (screenWidth >= 1920) {
        $('.primary-piping').css('width', '1730px')
        onesetMeter1()
      } else {
        $('.primary-piping').css('width', '1200px')
        onesetMeter2()
      }
    }
  }
}
// 获取二级图片比率
function twoimgRatio(callback) {
  let img = new Image()
  img.src = "./img/gd.gif"
  img.onload = function() {
    // 原始图片大小
    let wt = img.width
    // 页面加载图片大小
    let waterworkimgwt = $('.secondary-piping').width()
    if (waterworkimgwt >= wt) {
      $('.secondary-piping').css('width', wt + 'px')
      callback()
    } else {
      // 获取屏幕分辨率
      let screenWidth = window.screen.width
      if (screenWidth >= 1920) {
        $('.secondary-piping').css('width', '1730px')
        twosetMeter1()
      } else {
        $('.secondary-piping').css('width', '1200px')
        twosetMeter2()
      }
    }
  }
}
// 获取三级图片比率
function treeimgRatio(callback) {
  let img = new Image()
  img.src = "./img/gd.gif"
  img.onload = function() {
    // 原始图片大小
    let wt = img.width
    // 页面加载图片大小
    let waterworkimgwt = $('.tertiary-piping').width()
    if (waterworkimgwt >= wt) {
      $('.tertiary-piping').css('width', wt + 'px')
      callback()
    } else {
      // 获取屏幕分辨率
      let screenWidth = window.screen.width
      if (screenWidth >= 1920) {
        $('.tertiary-piping').css('width', '1730px')
        treesetMeter1()
      } else {
        $('.tertiary-piping').css('width', '1200px')
        treesetMeter2()
      }
    }
  }
}