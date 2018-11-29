<template>
<div>
  home ======= index222
  <van-button type="default">默认按钮===</van-button>
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
<van-slider v-model="value" :min="10" :max="90" />

</div>

</template>

<script>
export default {
  data() {
    return {
      value:50
    }
  }
};
</script>

<style>
</style>
