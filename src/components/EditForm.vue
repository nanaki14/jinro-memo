<template>
  <div class="edit-form">
    <input ref="input" :value="message" @input="doUpdate">
    <h3>v-model を使った場合</h3>
    <input v-model="message2">
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'EditForm',
  computed: {
    message () { return this.$store.getters.message },
    message2: {
      get () { return store.getters.message },
      set (value) { store.dispatch('doUpdate', value) }
    }
  },
  methods: {
    doUpdate () {
      this.$store.dispatch('doUpdate', this.$refs.input.value)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
