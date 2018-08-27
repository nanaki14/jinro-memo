<template>
  <div class="bl_inputBlock">
    <div class="bl_inputBlock_form">
      <input ref="input" name='name' v-model="name"
      @keydown.enter="addNewName"
      @compositionstart="composing=true"
      @compositionend="composing=false"
      placeholder="名前を入力">
      <button class="el_addButton" @click="addNewName"><i class="fas fa-plus">+</i></button>
    </div><!--.bl_inputBlock_form-->
  </div><!--.bl_inputBlock-->
</template>

<script>
export default {
  name: 'nameSet',
  data () {
    return {
      name: '',
      composing: false
    }
  },
  computed: {
  },
  methods: {
    addNewName () {
      if (!this.name) return
      this.$store.dispatch('addNewName', {name: this.$refs.input.value, id: this.$store.getters.id})
      this.name = ''
    }
  }
}
</script>
