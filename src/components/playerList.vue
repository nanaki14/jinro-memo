<template>
<div class="bl_userBlockUnit">
  <div class="bl_userBlock" v-for='player in players' :key="player.id">
    <div class="bl_nameBlock">
      <div class="bl_nameBlock_img">
        <figure class="bl_nameBlock_img_status">
          <img :src="'/static/img/' + player.status + '.png'" :alt="player.status" class="bl_nameBlock_statusImg">
        </figure>
        <figure class="bl_nameBlock_img_user">
          <img v-bind:src="['/static/img/user' + player.img + '.jpg']" alt="">
        </figure>
      </div>
      <p>{{ player.name }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'playerListSet',
  computed: {
    players () { return this.$store.getters.players }
  },
  methods: {
  }
}
</script>

<style>
.bl_nameBlock_img{
  position: relative;
  height: 150px;
}
.bl_nameBlock_img_status{
  position: absolute;
top: 50%;
left: 50%;
transform: translateY(-50%) translateX(-50%);
  z-index: 1;
  margin: 0;
}
.bl_nameBlock_img_user{
  position: absolute;
top: 50%;
left: 50%;
transform: translateY(-50%) translateX(-50%);
margin: 0;
}
</style>
