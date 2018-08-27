<template>
<div id="home">
  <nextImg />
  <!-- 次のplayer画像の表示 -->
  <nameSet />
  <!-- nameの入力 -->
  <playerListSet />
  <!-- playerの一覧と編集 -->
  <router-link to="/game-start">{{ players.length }}人でゲームを始める</router-link>
</div>
</template>

<script>
import nextImg from '@/components/nextImg.vue'
import nameSet from '@/components/nameSet.vue'
import playerListSet from '@/components/playerListSet.vue'
export default {
  name: 'home',
  components: {
    nextImg,
    nameSet,
    playerListSet
  },
  computed: {
    players () { return this.$store.getters.players }
  }
}
</script>
