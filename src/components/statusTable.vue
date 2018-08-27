<template>
  <div class="bl_statusTable">
    <div class="bl_statusTable_days">
      <p class="bl_statusTable_days_head">死因</p>
      <div class="bl_statusTable_days_execution">処刑</div>
      <div class="bl_statusTable_days_miserable">襲撃</div>
      <div class="bl_statusTable_days_others">その他</div>
    </div>
    <!-- ここから -->
    <div class="bl_statusTable_days">
      <p class="bl_statusTable_days_head">day0</p>
      <div class="bl_statusTable_days_execution">
        <!-- status="hoge"でstatusをhogeに変更可能 -->
        <nameSelector status="execution" />
      </div>
      <div class="bl_statusTable_days_miserable">
        <nameSelector status="miserable" />
      </div>
      <div class="bl_statusTable_days_miserable">
        <nameSelector status="others" />
      </div>
    </div>
    <!-- ここまでをループさせたい
    1.どれか1つ選択されるとdayが進むようにしたい。つまり3つの項目が入力されたらではないので
    |死因|day0 |day1 |day2 |day3 |
    |処刑|未選択|未選択|未選択|未選択|
    |襲撃|選択済|選択済|選択済|選択済|
    |死亡|未選択|未選択|未選択|未選択|…
    という状態もありえる
    2.別テーブルも追加予定なので日付を揃えたい
    ＜statusTable＞
    |死因|day0 |day1 |day2 |day3 |
    |処刑|未選択|未選択|未選択|未選択|
    |襲撃|選択済|選択済|未選択|未選択|
    |死亡|未選択|未選択|未選択|未選択|…
    ＜hogeTable＞
    |fuga|day0 |day1 |day2 |day3 |
    |piyo|未選択|未選択|選択済|選択済|…
    のようにhogeTableでday2の選択を行った場合もday3はどのTableでもループさせたい
     -->
  </div>
</template>

<script>
import nameSelector from '@/components/nameSelector.vue'
export default {
  name: 'statusTable',
  components: {
    nameSelector
  },
  computed: {
    players () { return this.$store.getters.players }
  },
  data () {
    return {
    }
  },
  methods: {
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
