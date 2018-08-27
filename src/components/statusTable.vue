<template>
  <div class="bl_statusTable">
    <div class="bl_statusTable_days">
      <p class="bl_statusTable_days_head">死因</p>
      <div class="bl_statusTable_days_execution">処刑</div>
      <div class="bl_statusTable_days_miserable">襲撃</div>
      <div class="bl_statusTable_days_others">その他</div>
    </div>

    <statusTableDays
      v-for="(day, index) in days"
      :key="index"
      :dayCount="index"
      />
  </div>
</template>

<script>
import statusTableDays from '@/components/statusTableDays.vue'
export default {
  name: 'statusTable',
  components: {
    statusTableDays
  },
  computed: {
    days () { return this.$store.getters.days }
  }
}
</script>

<style>
p{
  margin: 0;
}
.bl_statusTable{
  display: grid;
  grid-template-columns:repeat(4,1fr);
  border: 2px solid #333;
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
