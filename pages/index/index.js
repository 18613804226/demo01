Page({

  /**
   * 页面的初始数据
   */
  data: {
   sort:[],
   wang:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:8888/goodsSorts',
      success:res=>{
        console.log(res);
        this.setData({
          sort:res.data.data
        })
      }
    })
    wx.request({
      url: 'http://localhost:8888/scrollXList',
      success:res=>{
        console.log(res);
        this.setData({
          wang:res.data.data
        })
      }
    })
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
    
  },
  onclick(e){
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/goodslist/goodslist?index='+index,
    })
    
  }
})