const wxml = `
<view class="container" >
  <view class="item-box red">
  </view>
  <view class="item-box green" >
    <text class="text">yeah!</text>
  </view>
  <view class="item-box blue">
      <image class="img" src="https://quxue-data.oss-cn-beijing.aliyuncs.com/shop/product_test/logo83kGpBAyFD.png"></image>
  </view>
</view>
`

const style = {
  container: {
    width: 300,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  itemBox: {
    width: 80,
    height: 60,
  },
  red: {
    backgroundColor: '#ff0000'
  },
  green: {
    backgroundColor: '#00ff00'
  },
  blue: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 80,
    height: 60,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  }
}

module.exports.wxml = wxml
module.exports.style = style
