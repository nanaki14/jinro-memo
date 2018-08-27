<template>
<div class="bl_nameSelect">
  <select v-if="show" v-model="selected" @change="changeStatus()">
    <option value="">選択してください</option>
    <option value="peace">該当なし</option>
    <option v-for='player in players' v-if="player.status === 'survival'" :key="player.id" :value="player.id">{{ player.name }}</option>
  </select>
  <div v-else>
    <button status="survival" @click="changeStatusBack()">back</button>
    <div v-if="this.selectedIndex === -1">
      該当なし
    </div>
    <div v-else>
      <div class="bl_nameSelect_img">
        <img :src="`/static/img/${players[selectedIndex].status}.png`" alt="players[selectedIndex].status" class="bl_nameSelect_img_status">
        <img :src="`/static/img/user${players[selectedIndex].img}.jpg`" alt="">
      </div>
      {{players[selectedIndex].name}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'nameSelector',
  props: {
    status: String,
    dayCount: Number
  },
  computed: {
    players () { return this.$store.getters.players },
    selectedItem: function selectedItem () {
      return this.players[this.selectedIndex]
    },
    selectedIndex: function selectedIndex () {
      return this.players.findIndex(i => i.id === this.selected)
    }
  },
  data () {
    return {
      selected: '',
      show: true
    }
  },
  methods: {
    changeStatus () {
      if (this.selectedIndex === -1) {
        this.show = false
      } else {
        this.$store.dispatch('changeStatus', {index: this.selectedIndex, status: this.status})
        this.$store.dispatch('setDays', {day: this.dayCount, status: this.status, player: this.selectedItem.name})
        this.$emit('input', true)
        this.show = false
      }
    },
    changeStatusBack () {
      if (this.selectedIndex === -1) {
        this.show = true
        this.selected = ''
      } else {
        this.$store.dispatch('changeStatus', {index: this.selectedIndex, status: 'survival'})
        this.$store.dispatch('setDays', {day: this.dayCount, status: this.status, player: ''})
        this.show = true
        this.selected = ''
      }
    }
  }
}
</script>

<style>
  .bl_nameSelect_img{
    position: relative;
    height: 50px;
  }
  .bl_nameSelect_img img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  .bl_nameSelect_img_status{
    z-index: 1;
  }
</style>
