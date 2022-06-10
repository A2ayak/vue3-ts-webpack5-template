<template>
  <div>
    <svg-icon icon="nodata" />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted, defineComponent } from 'vue'
export default defineComponent({
  name: '',
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
      ...toRefs(data),
    }
  }
})

</script>
<style scoped lang='scss'>
  div {
    background-color: #fff;
  }
</style>