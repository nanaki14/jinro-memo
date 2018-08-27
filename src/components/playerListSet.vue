<template>
<div class="bl_userBlockUnit">
  <div class="bl_userBlock" v-for='(player, index) in players' :key="player.id">
    <button class="el_closeButton" @click="playerRemove(index)"><i class="fas fa-times">X</i></button>
    <div>
      <figure>
        <img v-bind:src="`/static/img/user${player.img}.jpg`" alt="">
      </figure>
      <div v-if="player.edit">
        <input v-model="newName"
        @keydown.enter='nameUpdate(index)'
        @compositionstart="composing=true"
        @compositionend="composing=false"><button class="el_closeButton" @click="nameUpdate(index)">変更</button><button class="el_closeButton" @click="editToggle(index)">キャンセル</button>
      </div>
      <p v-else>
        {{ player.name }}<button class="el_closeButton" @click="editToggle(index)">編集</button>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'playerListSet',
  data () {
    return {
      newName: '',
      composing: false
    }
  },
  computed: {
    img () { return this.$store.getters.img },
    players () { return this.$store.getters.players },
    id () { return this.$store.getters.id }
  },
  methods: {
    playerRemove (index) {
      this.$store.dispatch('playerRemove', index)
    },
    editToggle (index) {
      this.$store.dispatch('editToggle', index)
      this.newName = ''
    },
    nameUpdate (index) {
      if (!this.newName) return
      this.$store.dispatch('nameUpdate', { index: index, name: this.newName })
      this.newName = ''
      this.$store.dispatch('editToggle', index)
    }
  }
}
</script>

<style>
.bl_userBlockUnit{
  display:flex;
}
.bl_userBlock{
  flex: 1;
}
</style>
