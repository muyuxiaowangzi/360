<template>
  <div class="cart">
    <ul class="cart_top">
      <li class="cart1">
        <input type="checkbox" name="running" />
        <strong>全选</strong>
      </li>
      <li class="cart2">
        <strong>商品</strong>
      </li>
      <li class="cart3">
        <strong>属性</strong>
      </li>
      <li class="cart4">
        <strong>单价</strong>
      </li>
      <li class="cart5">
        <strong>数量</strong>
      </li>
      <li class="cart6">
        <strong>小计</strong>
      </li>
      <li class="cart7">
        <strong>操作</strong>
      </li>
    </ul>
    <p class="cart_p">360商城自营</p>
    <ul
      class="cart_center"
      v-for="item in productList"
      :key="item.data.create_time"
    >
      <li class="cartCenter1">
        <input type="checkbox" :checked="item.data.selected" />
      </li>
      <li class="cartCenter2">
        <img :src="item.data.img_list" />
        <a href="javascript:;">{{ item.data.title }}</a>
      </li>
      <li class="cartCenter3">
        <strong>分类：{{ item.data.ctitle.slice(1) }}</strong>
      </li>
      <li class="cartCenter4">
        <strong>￥{{ item.data.price_sale }}</strong>
      </li>
      <li class="cartCenter5">
        <span>+</span>
        <input type="text" :value="item.count" />
        <span>-</span>
      </li>
      <li class="cartCenter6">
        <strong>￥{{ item.data.price_sale * item.count }}</strong>
      </li>
      <li class="cartCenter7">
        <strong>删除</strong>
      </li>
    </ul>

    <ul class="cart_bottom">
      <li class="cartBottom1">
        <input type="checkbox" name="running" />
        <strong>全选</strong>
      </li>
      <li class="cartBottom2">删除选中商品</li>
      <li class="cartBottom3">
        <p>
          <span
            >已选<a class="num">{{ totalNum }}</a
            >件商品</span
          >
          <span>合计：¥{{ totalPrice }}</span>
        </p>
        <p>已优惠：¥0</p>
      </li>
      <li class="cartBottom4">
        <a href="javascript:;">去结算</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShopCart",
  data() {
    return {
      //总价格
      totalPrice: null,
      //商品总数
      totalNum: null,
      //购物车商品列表数据
      productList: []
    };
  },
  async mounted() {
    const res = await this.$API.reqShopCart();
    // console.log(res);
    const { total_num, total_price, item } = res.data.data;
    //保存相关数据
    this.totalPrice = total_price;
    this.totalNum = total_num;
    this.productList = Object.values(item);
  }
};
</script>

<style lang="less" scoped>
.cart {
  width: 1020px;
  margin: 20px auto;
  background-color: #fff;
  height: 50px;
  .cart_top {
    width: 100%;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    li {
      display: inline-block;
      strong {
        font-weight: 700;
      }
    }
    .cart1 {
      width: 5%;
      input {
        vertical-align: middle;
      }
      strong {
        vertical-align: middle;
      }
    }
    .cart2 {
      width: 35%;
    }
    .cart3 {
      width: 20%;
    }
    .cart4 {
      width: 10%;
    }
    .cart5 {
      width: 10%;
    }
    .cart6 {
      width: 10%;
    }
    .cart7 {
      width: 10%;
    }
  }
  .cart_p {
    font-size: 14px;
    font-weight: 700;
    padding: 10px 0 20px 30px;
  }
  .cart_center {
    width: 100%;
    height: 106px;
    font-size: 14px;
    background-color: #fff;
    display: flex;
    align-items: center;
    // text-align: center;
    border-bottom: 1px solid #ccc;
    .cartCenter1 {
      width: 5%;
      text-align: center;
      position: relative;
      ::before {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #fff;
        position: absolute;
        bottom: -45px;
        left: 0;
      }
    }
    .cartCenter2 {
      width: 35%;
      overflow: hidden;
      img {
        width: 70px;
        height: 70px;
        float: left;
      }
      a {
        height: 70px;
        float: left;
        margin-left: 10px;
      }
    }
    .cartCenter3 {
      width: 20%;
      text-align: center;
    }
    .cartCenter4 {
      width: 10%;
      text-align: center;
    }
    .cartCenter5 {
      width: 10%;
      span {
        display: inline-block;
        width: 32px;
        height: 22px;
        border: 1px solid rgba(221, 221, 221, 1);
        vertical-align: middle;
        text-align: center;
      }
      input {
        width: 32px;
        height: 22px;
        border-top: 1px solid rgba(221, 221, 221, 1);
        border-bottom: 1px solid rgba(221, 221, 221, 1);
        border-right: 0;
        border-left: 0;
        vertical-align: middle;
        text-align: center;
      }
    }
    .cartCenter6 {
      width: 10%;
      text-align: center;
      color: red;
    }
    .cartCenter7 {
      width: 10%;
      text-align: center;
    }
  }
  .cart_bottom {
    width: 100%;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    background-color: #fff;
    margin-top: 20px;
    height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    &::after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: #fff;
      position: absolute;
      top: -22px;
      left: 0;
    }
    .cartBottom1 {
      width: 10%;
      text-align: left;
      padding-left: 20px;
      box-sizing: border-box;
      input {
        vertical-align: middle;
      }
      strong {
        vertical-align: middle;
        font-weight: 700;
      }
    }
    .cartBottom2 {
      width: 40%;
      text-align: left;
    }
    .cartBottom3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 30%;
      p:first-child {
        height: 20px;
        line-height: 20px;
        text-align: right;
        a {
          color: red;
        }
        span:last-child {
          color: red;
        }
      }
      p:last-child {
        height: 20px;
        line-height: 20px;
        text-align: right;
        color: #999;
        font-size: 12px;
      }
    }
    .cartBottom4 {
      width: 20%;
      a {
        display: inline-block;
        width: 160px;
        height: 50px;
        border-radius: 6px;
        line-height: 50px;
        font-size: 20px;
        color: #fff;
        box-sizing: border-box;
        background: linear-gradient(
          180deg,
          rgba(255, 51, 51, 1) 0,
          rgba(255, 102, 51, 1) 100%
        );
      }
    }
  }
}
</style>
