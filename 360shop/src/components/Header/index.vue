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
            <span><router-link to="/myIfo">崔旺</router-link></span>
            <span> 注册</span>
            <span><router-link to="/order">订单结算</router-link></span>
            <span><router-link to="/shop">商品详情</router-link></span>
            <span><img src="./image/shop.jpg" alt=""/></span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-bottom">
          <div class="bottom-left">
            <span>
              <router-link to="/"
                ><img
                  src="https://p.ssl.qhimg.com/t0102789b8d00c3dfce.png"
                  alt=""
              /></router-link>
            </span>
            <span>新品推荐</span>
            <span>热卖</span>
            <span>社区</span>
          </div>
          <div class="bottom-right">
            <div class="search-bar">
              <input type="text" class="ipt" v-model="keyword" />
              <i class="iconfont icon-sousuo" @click="toSearch()"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
    z-index: 999;
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
