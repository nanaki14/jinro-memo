<template>
  <figure class="bl_inputBlock_img">
    <img v-bind:src="['/static/img/user' + img + '.jpg']" alt="">
  </figure><!--.bl_inputBlock_img-->
</template>

<script>
export default {
  name: 'nextImg',
  computed: {
    img () { return this.$store.getters.img }
  }
}
</script>
