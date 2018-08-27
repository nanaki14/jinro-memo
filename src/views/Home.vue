<template>
<div id="home">
  <nextImg />
  <!-- 次のplayer画像の表示 -->
  <nameSet />
  <!-- nameの入力 -->
  <playerListSet />
  <!-- playerの一覧と編集 -->
  <button type="button" @click="hundleClick">{{ players.length }}人でゲームを始める</button>
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
  },
  methods: {
    hundleClick () {
      if (this.$store.getters.players.length > 1) {
        this.$router.push('/game-start')
      } else {
        alert('プレイヤーは２人以上必要だよね')
      }
    }
  }
}
</script>
