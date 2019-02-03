import Vuex from 'vuex';
import Vue from 'vue';
import TensforflowService from '../services/tensorFlowService';

Vue.use(Vuex);
const modelService = new TensforflowService();

const state = {
  images: [],
  runing: {
    state: false,
    label: 'Not runing'
  },
  initCompare: false,
  compareResult: {},
  result: {},
}

const getters = {
  offers() {
    return state.images;
  },

  runing() {
    return state.runing;
  },

  initCompare() {
    return state.initCompare;
  },

  result() {
    return state.result;
  },

  compareResult() {
    return state.compareResult;
  }
}

const mutations = {
  START_MODEL(state, payload) {
    state.runing.label = 'Running';
    modelService.initLib(payload).then(() => {
      state.runing.label = 'Image clasyfication';
      modelService.initPredict('model').then(value => {
        state.runing.label = 'Start Compare'
        state.result = value;
        modelService.initLib(payload).then(() => {
          modelService.initPredict('1-item').then(value => {
            state.compareResult = value;
            window.setTimeout(()=>{ state.initCompare = true}, 10000);
          });
        })
      });
    })
  },
  SET_MODELS(state, payload) {
    state.images = payload;
  }
}

const actions = {
  startModel(context, payload) {
    context.commit('START_MODEL', payload);
  },
  setModels(content, payload) {
    context.commit('SET_MODELS', payload);
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
