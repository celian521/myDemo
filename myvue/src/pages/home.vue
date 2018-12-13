<template>
  <div>home ======= index222
    <van-button type="default">默认按钮===</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容"/>
      <van-cell title="单元格" value="内容" label="描述信息"/>
    </van-cell-group>
    <van-slider v-model="value" :min="10" :max="90"/>
    @click.stop.prevent
    <rend />
  </div>
</template>

<script>
import rend from '@/pages/render'
export default {
  data() {
    return {
      value: 50
    };
  },
  components: {
    rend
  },
  mounted() {
    let a = this.$utils.a();
    console.log(a);
  }
};
</script>

<style>
</style>
