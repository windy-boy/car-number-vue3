// 导入车牌号输入组件
import CarNumber from './car-number';

// 组件列表
const components = [CarNumber]

const install = function(app) {
  // 注册全局组件
  components.map(component => app.component(component.name, component))
}

export default {
  install,
  CarNumber
}