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
    console.log(_index)
  })
})