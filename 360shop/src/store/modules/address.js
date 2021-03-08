const state = {
  tableData: [{
    name: "xxx", //收集的姓名
    region: [], //所在地
    desc: "22", //收货地址
    tele: "123322", //电话
    isMoRen: false,
    id: 1
  }
  ]
}
const mutations = {
  addAddress(state, obj) {
    state.tableData.push(obj)
  },
  updatedAddress(state, obj) {
    //为什么不能解构obj然后直接赋值给item？？？？？ 
    state.tableData.forEach((item) => {
      console.log(state.tableData, 1)
      if (item.id === obj.id) {
        for (var k in obj) {
          item[k] = obj[k];
        }
      }
    })
  },
  deleAddress(state, id) {
    state.tableData = state.tableData.filter((item) => item.id !== id)
  }
}
const actions = {
  getAddress({ commit, state }, obj) {
    // console.log('obj', obj)
    if (obj.id) {
      commit('updatedAddress', obj)
      // console.log(333)
    } else {
      let id;
      if (!state.tableData.length) {
        id = 1
      } else {
        const upId = state.tableData[state.tableData.length - 1].id
        id = upId + 1

      }
      // console.log("id", id)
      obj = {
        id,
        ...obj
      }
      commit('addAddress', obj)
    }

  },
  dele({ commit }, id) {
    commit('deleAddress', id)
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}