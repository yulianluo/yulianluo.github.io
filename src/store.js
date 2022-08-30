import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      //count: 1,

      pubdate_start: "Hej",
      pubdate_end: "",

      pubtype: "",
      journal: "",
      language: "",
      meshor: "",
      meshand: "",
      pmidor: "",
      pmidand: ""
      //filter: {}
    }
  },
  mutations: {
    // setPubdate(state, payload) {
    //   state.pubdate = payload
    // },
    // setPubtype(state, payload) {
    //   state.pubtype = payload
    // },

    // setJournal(state, payload) {
    //   state.journal = payload
    // },
    // setLanguage(state, payload) {
    //   state.language = payload
    // },

    // setMeshOr(state, payload) {
    //   state.meshor = payload
    // },

    // setMeshAnd(state, payload) {
    //   state.meshand = payload
    // },

    // setPmid(state, payload) {
    //   state.pmid = payload
    // },
    setFilter(state, payload) {
      state.journal = payload.journal;
      //state.pubdate = payload.pubdate;
      state.pubdate_start = payload.pubdate_start;
      state.pubdate_end = payload.pubdate_end;
      state.pubtype = payload.pubtype;
      state.language = payload.language;
      state.meshor = payload.meshor;
      state.meshand = payload.meshand;
      state.pmidor = payload.pmidor;
      state.pmidand = payload.pmidand;
    },
  },
  // actions: {
  //   // setJournal(state, payload) {
  //   //   state.journal = payload
  //   // },
  //   setFilter(context) {
  //     context.commit('setFilter')
  //   }
  // }
})