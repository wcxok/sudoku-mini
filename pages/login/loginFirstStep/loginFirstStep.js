// loginFirstStep.js
let vMobile = require('../../../utils/validator')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: ''
  },
  bindMobile (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  linkTo (e) {    
    // 不关闭当前页面跳转到应用内的其他页面
    if (!vMobile.validatorMobile) {
      return false
    }
    wx.navigateTo({
      url: '../loginSecondStep/loginSecondStep?mobile=' + this.data.mobile,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})