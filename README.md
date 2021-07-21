# car-number-vue3

### 介绍
* car-number-vue3是一款基于vue3的车牌号输入控件，支持自定义输入框。

### 示例
[gitHub](https://windy-boy.github.io/vue-car-number-demo)

[gitee](http://chenjiancong.gitee.io/vue-car-number-demo)

### 项目中使用
* 下载

```
npm install car-number-vue3
```
* 在main.js中加入

```
import CarNumber from 'car-number-vue3'
import 'car-number-vue3/lib/carNumber.css'

createApp(App).use(CarNumber).mount('#app')
```
* 在需要的页面中使用

```
<CarNumber></CarNumber>
```

## API

### Props
名字|类型|默认值|说明
--|--|--|--
width|Number|200| 输入框宽度
height|Number|30| 输入框高度
borderColor|String|#959595| 输入框边框颜色
backgroundColor|String|transparent| 输入框背景颜色
borderRadius|Number|0| 边框圆角
fontColor|String|#959595| 文字颜色
fontSize|Number|16| 文字大小
defaultCarPlate|String|null| 默认车牌号
maskBackground|String|transparent| 遮罩颜色
clickMaskCloseKeyBoard|Boolean|true| 是否点击遮罩关闭键盘
isNewEnergy|Boolean|false| 是否新能源车牌

### Events
名字|参数|说明
--|--|--
@submit|--|关闭键盘时触发；返回输入的值

### Slots
参数|slotProps|说明
--|--|--
default|value:Array|自定义输入框

## 贡献
有任何意见或建议都欢迎提 issue

## License
[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)

## 特别感谢
[vue](https://github.com/vuejs/vue)

[input-number-plate](https://github.com/wokeT/input-number-plate)

## Change Log

* 1.0.2

fix bug

* 1.0.1

fix bug

* 1.0.0

首次发版
