import Vue from "vue";
import Vuex from "vuex";
import website from '@/config/website'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 初始化的数据
  state: {
    formDatas: null,
    token: "1",
    website: website,
  },
  // 改变state里面的值得方法
  mutations: {
    getFormData(state, data) {
      state.formDatas = data;
    },
    saveToken(state, data) {
      state.token = data;
      window.localStorage.setItem("Token", data);//就是这里，保存到了 localStorage 中
    }
  }
});
// 输出模块
export default store;