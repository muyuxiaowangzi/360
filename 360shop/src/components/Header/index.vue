<template>
  <div>
    <div class="header">
      <div class="topheight"></div>
      <div class="top">
        <div class="top-top">
          <div class="top-left">
            <span>帮助中心</span>
            <span>收藏</span>
            <span>360官网</span>
            <span>360智慧生活</span>
          </div>
          <div class="top-right">
<<<<<<< HEAD
            <span>登录</span>
            <span> 注册</span>
            <span>360手机商城</span>
            <span><img src="./image/shop.jpg" alt=""/></span>
=======
            <span><router-link to="/myIfo">崔旺</router-link></span>
            <!-- <span> 注册</span> -->
            <!-- 登录 -->
            <span v-if="!userInfo.username && !userInfoList.username">
              <el-button type="text" @click="dialogFormVisible = true"
                >登录</el-button
              >
              <el-dialog
                title="登录"
                :visible.sync="dialogFormVisible"
                :append-to-body="true"
                custom-class="dialog"
              >
                <el-form :model="form">
                  <el-form-item :label-width="formLabelWidth">
                    <el-input
                      placeholder="手机号/用户名/邮箱"
                      v-model="form.username"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item :label-width="formLabelWidth">
                    <el-input
                      placeholder="密码"
                      v-model="form.password"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-button type="primary" @click="submitLogin"
                    >登录</el-button
                  >
                </el-form>
              </el-dialog>

              <el-button type="text" @click="dialogFormRegister = true"
                >注册</el-button
              >
              <el-dialog
                title="手机号注册"
                :visible.sync="dialogFormRegister"
                :append-to-body="true"
                custom-class="dialog"
              >
                <el-form :model="formRegister">
                  <el-form-item :label-width="formLabelWidth">
                    <el-input
                      placeholder="手机号"
                      v-model="formRegister.username"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item :label-width="formLabelWidth">
                    <el-input
                      placeholder="密码"
                      v-model="formRegister.password"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-button type="primary" @click="submitRegister"
                    >注册</el-button
                  >
                </el-form>
              </el-dialog>
            </span>

            <span v-else>{{ userInfoList.username }}</span>
            <span><router-link to="/order">订单结算</router-link></span>
            <span><router-link to="/shop">商品详情</router-link></span>
            <span
              ><img
                src="./image/shop.jpg"
                alt=""
                @click="$router.push('/shopCart')"
            /></span>
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-bottom">
          <div class="bottom-left">
<<<<<<< HEAD
            <span
              ><img src="https://p.ssl.qhimg.com/t0102789b8d00c3dfce.png" alt=""
            /></span>
=======
            <span>
              <router-link to="/"
                ><img
                  src="https://p.ssl.qhimg.com/t0102789b8d00c3dfce.png"
                  alt=""
              /></router-link>
            </span>
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
            <span>新品推荐</span>
            <span>热卖</span>
            <span>社区</span>
          </div>
          <div class="bottom-right">
            <div class="search-bar">
<<<<<<< HEAD
              <input type="text" class="ipt" v-model="keyword" />
=======
              <input
                type="text"
                class="ipt"
                v-model="key_word"
                @keyup.enter="toSearch"
              />
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
              <i class="iconfont icon-sousuo" @click="toSearch()"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
export default {
  name: 'Heater',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    toSearch() {
      this.$router.push({ name: 'search', params: { keyword: this.keyword } })
    },
  },
}
=======
import { mapState } from "vuex";
export default {
  name: "Heater",
  data() {
    return {
      key_word: "",
      dialogFormVisible: false,
      dialogFormRegister: false,
      form: {
        username: "",
        password: ""
      },
      formRegister: {
        username: "",
        password: ""
      },
      formLabelWidth: "0",
      userInfo: {}
    };
  },
  mounted() {
    this.$bus.$on("showLogin", () => {
      this.dialogFormVisible = true;
    });
  },
  computed: {
    ...mapState({
      userInfoList: state => state.userInfo
    })
  },
  methods: {
    toSearch() {
      this.$router.push({ name: "search", params: { key_word: this.key_word } });
    },
    //登录
    async submitLogin() {
      this.dialogFormVisible = false;
      const { username, password } = this.form;
      const res = await this.$API.reqLogin(username, password);
      if (res.data.code === 200) {
        this.$message.success("恭喜你登录成功");
        this.userInfo = res.data;
        this.$store.dispatch("getUserInfo");
      } else {
        this.$message.error(res.data.msg);
      }
    },
    //注册
    async submitRegister() {
      this.dialogFormRegister = false;
      const { username, password } = this.formRegister;
      const res = await this.$API.reqRegister(username, password);
      if (res.data.code === 200) {
        this.$message("恭喜你注册成功");
      }
    }
  }
};
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  .topheight {
    height: 40px;
    background-color: #333;
  }
  .bottom {
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    color: #000;
    border-bottom: 1px solid;
    .bottom-bottom {
      height: 100px;
      margin: 0 auto;
      max-width: 1240px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom-right {
        width: 420px;
        height: 36px;
        border: 1px solid #ccc;
        border-radius: 18px;
        .search-bar {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 5px 30px;
          position: relative;
          .iconfont {
            font-size: 20px;
          }
          .ipt {
            background: transparent;
            height: 24px;
            outline: none;
            padding: 0;
            width: 340px;
            border: 0;
          }
        }
      }
      .bottom-left {
        width: 515px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        img {
          width: 180px;
        }
      }
    }
  }
  .top {
    position: fixed;
    width: 100%;
    background-color: #333;
    font-size: 14px;
    color: #fff;
    top: 0;
    right: 0;
    margin-bottom: 40px;
<<<<<<< HEAD
=======
    z-index: 999;
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
    .top-top {
      font-size: 12px;
      height: 40px;
      margin: 0 auto;
      max-width: 1240px;
      display: flex;
      justify-content: space-between;
      .top-left {
        width: 280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .top-right {
        width: 240px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>
