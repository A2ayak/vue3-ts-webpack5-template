import type { App } from 'vue'

const requireComponent = require.context(
  '.', // 其组件目录的相对路径
  true, // 是否查询其子目录
  /\.vue$/, // 匹配基础组件文件名的正则表达式
  'sync' // 可选的， 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once'，默认值是 'sync'
)

export default {
  install (Vue: App) {
    requireComponent.keys().forEach(fileName => {
      console.log(fileName)
      
      const componentConfig = requireComponent(fileName)
      const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
      Vue.component(componentName, componentConfig.default || componentConfig)
    })
  }
}