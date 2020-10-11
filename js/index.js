$(function() {
  // 加载完成
  $('.menu .menu-item ').on('click', function() {
    // 点击菜单，该菜单添加选中的类，移除选中的类
    if ($(this).hasClass('active-menu-item')) {
      // 如果有该类，就不进行其它操作
      return  false
    }
    $(this).addClass('active-menu-item')
      .siblings().removeClass('active-menu-item').addClass('no-active-menu-item')
    let _index = $(this).index() % 2
    $('.crew').css('display', 'none')
    $('.crew').eq(_index).css('display', 'block')
  })
  // 获取屏幕分辨率
  let screenWidth = window.screen.width
  if (screenWidth >= 1920 && screenWidth <= 2560) {
    $('#bearing .part-two  .table-list > .table:first-child .table-head .table-tr .table-th').css({
      'height': '50px',
      'line-height': '50px'
    })
    $('#bearing .part-two  .table-list > .table:not(:first-child) .table-head .table-tr .table-th').css({
      'height': '25px',
      'line-height': '25px'
    })
    $('#bearing .table .table-body .table-tr .table-td').css({
      'height': '25px',
      'width': '100%',
      'line-height': '25px'
    })
    $('#bearing .table-footer .details').css({
      'text-align': 'center',
      'height': '25px',
      'line-height': '25px'
    })
    $('#bearing .part-one .part-one-middle .crew .bearing').css({
      'font-size': '12px'
    })
    $('#bearing .table .table-tr .table-td').css({
      'font-size': '12px'
    })
    $('#bearing .table .table-tr .table-th').css({
      'font-size': '12px'
    })
    $('#bearing .table-footer .details').css({
      'font-size': '12px'
    })
  } else if (screenWidth > 2560) {
    $('#bearing .part-two  .table-list > .table:first-child .table-head .table-tr .table-th').css({
      'height': '100px',
      'line-height': '100px'
    })
    $('#bearing .part-two  .table-list > .table:not(:first-child) .table-head .table-tr .table-th').css({
      'height': '50px',
      'line-height': '50px'
    })
    $('#bearing .table .table-body .table-tr .table-td').css({
      'height': '50px',
      'width': '100%',
      'line-height': '50px'
    })
    $('#bearing .table-footer .details').css({
      'text-align': 'center',
      'height': '50px',
      'line-height': '50px'
    })
    $('#bearing .part-one .part-one-middle .crew .bearing').css({
      'font-size': '16px'
    })
    $('#bearing .table .table-tr .table-td').css({
      'font-size': '16px'
    })
    $('#bearing .table .table-tr .table-th').css({
      'font-size': '16px'
    })
    $('#bearing .table-footer .details').css({
      'font-size': '16px'
    })
  } else {
    $('#bearing .part-two  .table-list > .table:first-child .table-head .table-tr .table-th').css({
      'height': '40px',
      'line-height': '40px'
    })
    $('#bearing .part-two  .table-list > .table:not(:first-child) .table-head .table-tr .table-th').css({
      'height': '20px',
      'line-height': '20px'
    })
    $('#bearing .table .table-body .table-tr .table-td').css({
      'height': '20px',
      'width': '100%',
      'line-height': '20px'
    })
    $('#bearing .table-footer .details').css({
      'text-align': 'center',
      'height': '20px',
      'line-height': '20px'
    })
    $('#bearing .part-one .part-one-middle .crew .bearing').css({
      'font-size': '12px'
    })
    $('#bearing .table .table-tr .table-td').css({
      'font-size': '12px'
    })
    $('#bearing .table .table-tr .table-th').css({
      'font-size': '12px'
    })
    $('#bearing .table-footer .details').css({
      'font-size': '12px'
    })
  }
})