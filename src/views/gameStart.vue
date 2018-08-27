<template>
<div id="home">
  <router-link to="/">プレイヤー編集へ戻る</router-link>
  <playerList />
  <!-- Homeで追加されたplayerの一覧 -->
  <statusTable />
  <!-- playerのstatus編集を行えるテーブル -->
</div>
</template>

<script>
import playerList from '@/components/playerList.vue'
import statusTable from '@/components/statusTable.vue'
export default {
  name: 'gameStart',
  components: {
    playerList,
    statusTable
  },
  computed: {
    players () { return this.$store.getters.players }
  },
  created () {
    if (this.players.length === 0) {
      this.$router.push('/')
    }
  }
}
</script>
