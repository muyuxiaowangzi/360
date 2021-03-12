const state = {
  tableData: [
    {
      name: "赵三彪", //收集的姓名
      region: ["北京", "北京市", "海淀"], //所在地
      desc: "北京市海淀区", //收货地址
      tele: "13062118834", //电话
      isMoRen: true,
      id: 1
    },
    {
      name: "王二虎", //收集的姓名
      region: ["广东", "深圳", "宝安"], //所在地
      desc: "广东宝安", //收货地址
      tele: "13687956513", //电话
      isMoRen: false,
      id: 2
    }
  ]
}
const mutations = {
  addAddress(state, obj) {
    state.tableData.push(obj)
  },
  // 编辑
  updatedAddress(state, obj) {
    //为什么不能解构obj然后直接赋值给item？？？？？ 
    // state.tableData.forEach((item) => {
    //   if (item.id === obj.id) {
    //     item = obj
    //     console.log(item)
    //     /*   for (var k in obj) {
    //         item[k] = obj[k];
    //       } */
    //   }
    //   console.log(item)
    // })
    /* 
        state.tableData = state.tableData.map((item) => {
          if (item.id === obj.id) {
            item = obj
          }
          return item
        }) */
    state.tableData = state.tableData.reduce((pir, item) => {
      if (item.id === obj.id) {
        item = obj
      }
      pir.push(item)
      return pir
    }, [])

  },
  deleAddress(state, id) {
    state.tableData = state.tableData.filter((item) => item.id !== id)
  }
}
const actions = {
  getAddress({ commit, state }, obj) {
    if (obj.id) {
      commit('updatedAddress', obj)
    } else {
      let id;
      if (!state.tableData.length) {
        id = 1
      } else {
        const upId = state.tableData[state.tableData.length - 1].id
        id = upId + 1
      }
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