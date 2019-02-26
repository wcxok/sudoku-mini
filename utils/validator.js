/**
 * 验证手机号码是否正确
 */
function validatorMobile(mobile) {
  if (mobile.lengt == 0) {
    wx.showToast({
      title: '输入的手机号为空',
      icon: 'success',
      duration: 1500
    })
    return false
  }
  if (!(/^1[34578]\d{9}$/).test(mobile)) {
    wx.showToast({
      title: '请输入正确的手机号码',
      icon: 'success',
      duration: 1500
    })
    return false
  }
}

module.exports = {
  validatorMobile: validatorMobile
}