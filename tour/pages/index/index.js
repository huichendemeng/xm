//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      list:[],
      nav:[],
      hot:[],
      you:[]
  },
  getcarouselImg: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/imagelist',
      success: (res) => {
        this.setData({list: res.data });
      }
    })
  },
  getNavList:function(){
    wx.request({
      url: 'http://127.0.0.1:3001/nav',
      success:(res)=>{
        this.setData({nav:res.data})
      }
    })
  },
  getHot:function(){
    wx.request({
      url: 'http://127.0.0.1:3001/hot',
      success: (res) => {
        this.setData({ hot: res.data })
      }
    })
  },
  getYou:function(){
    wx.request({
      url: 'http://127.0.0.1:3001/youxuan',
      success: (res) => {
        this.setData({ you: res.data });
      }
    })
  },
  handleJumpPage: function (event) {
    var id = event.target.id;
    console.log(event)
    if (id == 1) { wx.navigateTo({ url: '/pages/liner/liner' }) };
    if (id == 2) { wx.navigateTo({ url: '/pages/ticket/ticket' }) }
  },
  onLoad:function(){
    this.getcarouselImg();
    this.getNavList();
    this.getHot();
    this.getYou();
  }
 
})
