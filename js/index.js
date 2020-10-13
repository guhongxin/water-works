var data = [{
  motorType: '卧式',
  motorModel: 'CH-W6',
  zcA: {
    zcModel: 'R7055',
    speed: '50-200',
    checkVal: 2.8,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcB: {
    zcModel: 'R7055',
    speed: '50-200',
    checkVal: 2.9,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcC: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 3.1,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcD: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 3.5,
    state: 0 // 正常 1-待维护 2-已损坏
  } 
}, {
  motorType: '卧式',
  motorModel: 'CH-W6',
  zcA: {
    zcModel: 'R7055',
    speed: '50-200',
    checkVal: 3,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcB: {
    zcModel: 'R7055',
    speed: '50-200',
    checkVal: 2.9,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcC: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 3.5,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcD: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 3.5,
    state: 0 // 正常 1-待维护 2-已损坏
  } 
}, {
  motorType: '卧式',
  motorModel: 'CH-W6',
  zcA: {
    zcModel: 'R7055',
    speed: '50-200',
    checkVal: 3.8,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcB: {
    zcModel: 'R7055',
    speed: '50-200',
    checkVal: 5.5,
    state: 1 // 正常 1-待维护 2-已损坏
  },
  zcC: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 4.5,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcD: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 4,
    state: 0 // 正常 1-待维护 2-已损坏
  } 
}, {
  motorType: '立式',
  motorModel: 'CH-Z3',
  zcA: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 3.5,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcB: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 3.7,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcC: {
    zcModel: 'R7055',
    speed: '50-200',
    checkVal: 3.3,
    state: 0 // 正常 1-待维护 2-已损坏
  } 
}, {
  motorType: '立式',
  motorModel: 'CH-Z3',
  zcA: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 3.7,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcB: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 4.5,
    state: 0 // 正常 1-待维护 2-已损坏
  },
  zcC: {
    zcModel: 'R7055',
    speed: '50-200',
    checkVal: 6.8,
    state: 1 // 正常 1-待维护 2-已损坏
  } 
}, {
  motorType: '立式',
  motorModel: 'CH-Z3',
  zcA: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 6.5,
    state: 1 // 正常 1-待维护 2-已损坏
  },
  zcB: {
    zcModel: 'R6040',
    speed: '80-300',
    checkVal: 8.6,
    state: 2 // 正常 1-待维护 2-已损坏
  },
  zcC: {
    zcModel: 'R7055',
    speed: '50-200',
    checkVal: 6.3,
    state: 1 // 正常 1-待维护 2-已损坏
  } 
}]
$(function() {
  // 加载完成
  $('.menu .menu-item').on('click', function() {
    // 点击菜单，该菜单添加选中的类，移除选中的类
    $(this).addClass('active-menu-item')
      .siblings().removeClass('active-menu-item').addClass('no-active-menu-item')
    let _index = $(this).index()
    let showName = $(this).data('showName')
    $('.crew').css('display', 'none')
    $('.' + showName).css('display', 'block')
    let _data = data[_index]
    let stateClass = ['normal', 'alarm', 'damage']
    $('.crew2 .bearingA i').removeClass().addClass('status')
    $('.crew2 .bearingB i').removeClass().addClass('status')
    $('.crew2 .bearingC i').removeClass().addClass('status')
    $('.crew2 .bearingD i').removeClass().addClass('status')
    $('.crew1 .bearingB i').removeClass().addClass('status')
    $('.crew1 .bearingC i').removeClass().addClass('status')
    if (showName === 'crew2') {
      // 卧式
      let _stateA =_data.zcA.state
      let _stateB =_data.zcB.state
      let _stateC =_data.zcC.state
      let _stateD =_data.zcD.state
      $('.crew2 .bearingA .status').addClass(stateClass[_stateA])
      $('.crew2 .bearingB .status').addClass(stateClass[_stateB])
      $('.crew2 .bearingC .status').addClass(stateClass[_stateC])
      $('.crew2 .bearingD .status').addClass(stateClass[_stateD])
    } else {
      // 立式
      let _stateA =_data.zcA.state
      let _stateB =_data.zcB.state
      let _stateC =_data.zcC.state
      $('.crew1 .bearingA .status').addClass(stateClass[_stateA])
      $('.crew1 .bearingB .status').addClass(stateClass[_stateB])
      $('.crew1 .bearingC .status').addClass(stateClass[_stateC])
    }
  })
  $('.menu .menu-item').eq(0).trigger('click')
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
  let warningboxHt = $('.warning-box').height()
  let warningboxTitleHt = $('.warning-box-title').height()
  $('.warn-info').css('height', 'calc(92% - '+ warningboxTitleHt+'px)')
})