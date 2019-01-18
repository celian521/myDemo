<template>
  <div>
  event
  </div>
</template>

<script>
import event from "@/libs/event.js";
export default {
  data() {
    return {

    };
  },
  components: {

  },
  mounted() {

    event.$on('foo', (e) => {
			console.log("foo", e);
    })

    event.$emit('foo', "ste")
  }
};
</script>

<style>
</style>
