const app = getApp()

Page({
  data: {
      audios:[
          {
              id:1,
              name:"第一个音频",
              src:'https://audioplay-1254432228.cos.ap-shanghai.myqcloud.com/0120806d9da65b553678cbc82def68ef79ee3f3d.mp3'
          },
          {
              id:2,
              name:"第二个音频",
              src:'https://audioplay-1254432228.cos.ap-shanghai.myqcloud.com/0120806d9da65b553678cbc82def68ef79ee3f3d.mp3'
          },
          {
              id:3,
              name:"第三个音频",
              src:'https://audioplay-1254432228.cos.ap-shanghai.myqcloud.com/0120806d9da65b553678cbc82def68ef79ee3f3d.mp3'
          }
      ],
      id:1,
      audio:'https://audioplay-1254432228.cos.ap-shanghai.myqcloud.com/0120806d9da65b553678cbc82def68ef79ee3f3d.mp3'
  },
  onLoad: function () {

  },
})
