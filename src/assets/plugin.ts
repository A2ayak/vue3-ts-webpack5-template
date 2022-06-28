import SvgIcon from '@/components/globalComp/SvgIcon.vue'
import type { App } from 'vue'

const componentPlugin: any = {
  install(vue: App, options: any) {
    if (
      options &&
      options.imports &&
      Array.isArray(options.imports) &&
      options.imports.length > 0
    ) {
      // 按需引入图标
      const { imports } = options
      imports.forEach((svgName: any) => {
        require(`@/assets/icons/${svgName}.svg`)
      })
    } else {
      // 全量引入图标
      const ctx = require.context('@/assets/icons', false, /\.svg$/)
      ctx.keys().forEach((path) => {
        const temp = path.match(/\.\/([A-Za-z0-9\-_]+)\.svg$/)
        if (!temp) return
        const name = temp[1]
        require(`@/assets/icons/${name}.svg`)
      })
    }
    vue.component(SvgIcon.name, SvgIcon)
  }
}
export default componentPlugin
