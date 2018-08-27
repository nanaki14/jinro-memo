import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    img: 1,
    nextId: 0,
    players: [
    ],
    days: [
      {
        execution: '',
        miserable: '',
        others: ''
      }
    ]
  },
  getters: {
    players (state) {
      return state.players
    },
    days (state) {
      return state.days
    },
    id (state) {
      return state.nextId
    },
    img (state) {
      return state.img
    }
  },
  mutations: {
    setName (state, {name, id}) {
      state.players.push({name: name, id: id++, img: state.img, edit: false, status: 'survival'})
      // 1~10のループ処理
      state.img++
      if (state.img > 10) {
        state.img = 1
      }
      state.nextId = id
    },
    // playerの削除
    playerRemove (state, index) {
      state.players.splice(index, 1)
    },
    // edit=trueをfalseにedit=falseをtrueにする処理<-これstoreで管理する必要なかったかも
    editToggle (state, index) {
      state.players[index].edit = !state.players[index].edit
    },
    // nameの編集
    nameUpdate (state, {index, name}) {
      state.players[index].name = name
    },
    // statusの編集
    changeStatus (state, {index, status}) {
      state.players[index].status = status
    },
    addDays (state, {index}) {
      state.days.splice(index, 0, {
        execution: '',
        miserable: '',
        others: ''
      })
    },
    setDays (state, {day, status, player}) {
      state.days[day][status] = player
    }
  },
  actions: {
    addNewName ({ commit }, {name, id}) {
      commit('setName', {name: name, id: id})
    },
    playerRemove ({ commit }, index) {
      commit('playerRemove', index)
    },
    editToggle ({ commit }, index) {
      commit('editToggle', index)
    },
    nameUpdate ({ commit }, {index, name}) {
      commit('nameUpdate', {index, name: name})
    },
    changeStatus ({ commit }, {index, status}) {
      commit('changeStatus', {index, status: status})
    },
    addDays ({ commit }, {index}) {
      commit('addDays', {index})
    },
    setDays ({ commit }, {day, status, player}) {
      commit('setDays', {day, status, player})
    }
  }
})

export default store
