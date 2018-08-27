<template>
<div class="bl_statusTable_days">
  <p class="bl_statusTable_days_head">{{`day${dayCount}`}}</p>
  <div class="bl_statusTable_days_execution">
    <!-- status="hoge"でstatusをhogeに変更可能 -->
    <nameSelector status="execution" :dayCount="dayCount" v-model="isInput"/>
  </div>
  <div class="bl_statusTable_days_miserable">
    <nameSelector status="miserable" :dayCount="dayCount" v-model="isInput"/>
  </div>
  <div class="bl_statusTable_days_miserable">
    <nameSelector status="others" :dayCount="dayCount" v-model="isInput"/>
  </div>
</div>
</template>

<script>
import nameSelector from '@/components/nameSelector.vue'
export default {
  name: 'statusTableDays',
  components: {
    nameSelector
  },
  props: {
    dayCount: Number
  },
  data () {
    return {
      isInput: false
    }
  },
  watch: {
    isInput: function (newState, oldState) {
      if (oldState === false) {
        this.$store.dispatch('addDays', {index: this.dayCount + 1})
      }
    }
  }
}
</script>

<style>
p{
  margin: 0;
}
.bl_statusTable_days > p{
  height: 30px;
  border-bottom: 2px solid #333;
  border-right: 2px solid #333;
}
.bl_statusTable_days > div{
  height: 100px;
  border-bottom: 2px solid #333;
  border-right: 2px solid #333;
}
.bl_statusTable_days > div img{
  width: 50px;
}
</style>
