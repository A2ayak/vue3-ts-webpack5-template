<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted, defineComponent } from 'vue'
import Home from '@/views/Home.vue'
export default defineComponent({
  name: 'App',
  components: {
    Home
  },
  setup() {
    console.log('1-开始创建组件-setup')
    const data = reactive({})
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}
</style>
