<template>
  <div class="allContainer">
    <!-- 商品详情页 -->
    <div class="shopContainer">
      <!-- 左侧 -->
      <div class="leftContainer">
        <!-- 放大镜区域 -->
        <div class="Magnifier">
          <div class="smallImg">
            <img src="../../static/images/2.png" alt />
          </div>
          <div class="zoom"></div>
          <div class="bigImg">
            <img src="../../static/images/2.png" alt />
          </div>
        </div>
        <!-- 轮播图 -->
        <div class="swiper">
          <div class="btn">
            <button class="leftBtn">&lt;</button>
            <button class="rightBtn">&gt;</button>
          </div>
          <div class="list">
            <ul>
              <li class="imgItem">
                <div class="img">
                  <img src="../../static/images/2.png" alt />
                </div>
              </li>
              <li class="imgItem">
                <div class="img">
                  <img src="../../static/images/3.png" alt />
                </div>
              </li>
              <li class="imgItem">
                <div class="img">
                  <img src="../../static/images/4.png" alt />
                </div>
              </li>
              <li class="imgItem">
                <div class="img">
                  <img src="../../static/images/5.png" alt />
                </div>
              </li>
              <li class="imgItem">
                <div class="img">
                  <img src="../../static/images/6.png" alt />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 底部详情 -->
        <div class="detail">
          <ul>
            <li>
              <img src="https://p1.ssl.qhimg.com/t014f3c7cc8304a06c2.png" alt />
              <span>360商城发货&售后</span>
            </li>
            <li>
              <img src="https://p1.ssl.qhimg.com/t014f3c7cc8304a06c2.png" alt />
              <span>满99元包邮</span>
            </li>
            <li>
              <img src="https://p1.ssl.qhimg.com/t014f3c7cc8304a06c2.png" alt />
              <span>7天无理由退货</span>
            </li>
            <li>
              <img src="https://p1.ssl.qhimg.com/t014f3c7cc8304a06c2.png" alt />
              <span>15天免费换货</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="rightContainer">
        <div class="product-info">
          <!-- 标题区域 -->
          <div class="info-title">360 家庭防火墙路由器V5X</div>
          <div class="info-subTitle">
            <span>游戏加速 告别延迟卡顿</span>
            <br />
            <a href="https://mall.360.cn/ac/luyouqi?track=ggylyqpj">wifi6路由、游戏加速路由、信号扩展器等更多商品，点击查看>></a>
          </div>
          <!-- 价格、促销区域 -->
          <div class="info-wrap">
            <!-- 分割线 -->
            <div class="divider"></div>
            <div class="info-price-content">
              <!-- 价格 -->
              <div class="info-price">
                价 格
                <div class="info-price-detail">
                  <strong class="nowPrice">￥279.00</strong>
                  <i class="oldPrice">￥379</i>
                </div>
              </div>
              <!-- 促销 -->
              <div class="info-promotion">
                促 销
                <div class="info-promotion-detail">
                  <div class="info-box">
                    <i class="info-box-title">直降</i>
                    <span>立减100.00元</span>
                  </div>
                  <div class="info-box">
                    <i class="info-box-title">满赠</i>
                    <span>满299送湿巾</span>
                  </div>
                </div>
              </div>
              <!-- 喇叭 -->
              <div class="notice-bar">
                受疫情影响，河北省石家庄市、邢台市，黑龙江省，吉林省，内蒙古，青海，新疆等部分地区暂停发货。
              </div>
              <!-- 底部分类、数量、加入购物车 -->
              <div class="info-bottom">
                <div class="inf-bottom-content">
                  <!-- 分类 -->
                  <div class="info-classify">
                    <div class="cate">
                      <span>分&nbsp;类</span>
                      <ul class="cate-list">
                        <li class="cate-itme">V5X</li>
                      </ul>
                    </div>
                  </div>
                  <!-- 数量 -->
                  <div class="info-count">
                    <span>数&nbsp;量</span>
                    <div class="info-count-btn">
                      <button class="reduce">-</button>
                      <input type="text" placeholder="1" />
                      <button class="add">+</button>
                    </div>
                  </div>
                  <!-- 加入购物车 -->
                  <div class="buy">
                    <button class="buyNow">立即购买</button>
                    <button class="addCart">加入购物车</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Shop",
};
</script>
<style  scoped>
.allContainer {
  background: #fff;
  padding-top: 40px;
}
.shopContainer {
  width: 1240px;
  margin: 0 auto;
  border: 1px solid red;
  overflow: hidden;
}
.shopContainer .leftContainer {
  float: left;
  margin-right: 80px;
  width: 482px;
}
.shopContainer .leftContainer .Magnifier {
  border: 1px solid green;
  height: 480px;
  margin: 0 auto;
  position: relative;
}
.shopContainer .leftContainer .Magnifier .zoom {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  background: yellow;
  opacity: 0.4;
}
.shopContainer .leftContainer .Magnifier .bigImg {
  width: 510px;
  height: 510px;
  display: none;
  border: 1px solid green;
  position: absolute;
  top: 0;
  left: 490px;
}
.shopContainer .leftContainer .swiper {
  margin-top: 32px;
  border: 1px solid pink;
  position: relative;
}
.shopContainer .leftContainer .swiper .btn .leftBtn,
.rightBtn {
  height: 53px;
  width: 15px;
  background: #fafafa;
  border: none;
  pointer-events: none;
}
.shopContainer .leftContainer .swiper .btn .leftBtn {
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -26.5px;
}
.shopContainer .leftContainer .swiper .btn .rightBtn {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -26.5px;
}
.shopContainer .leftContainer .swiper .list {
  margin: 0 auto;
  width: 450px;
}
.shopContainer .leftContainer .swiper ul {
  display: flex;
  list-style-type: none;
  width: 720px;
  height: 92px;
  border: 1px solid green;
}
.shopContainer .leftContainer .swiper ul .imgItem {
  height: 100%;
  width: 90px;
}
.shopContainer .leftContainer .swiper ul .imgItem .img {
  border: 1px solid yellow;
  border-bottom-width: 3px;
  height: 88px;
  width: 88px;
}
.shopContainer .leftContainer .swiper ul .imgItem .img img {
  height: 100%;
}
.shopContainer .leftContainer .detail {
  background: #fafafa;
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;
  padding: 10px 35px;
}
.shopContainer .leftContainer .detail ul {
  list-style-type: none;
  margin: -20px 0 0 -30px;
}
.shopContainer .leftContainer .detail ul li {
  display: inline-block;
  margin: 20px 0 0 30px;
  white-space: nowrap;
}
.shopContainer .leftContainer .detail ul li img {
  height: 16px;
  margin-right: 8px;
}

/* 右侧 */
.shopContainer .rightContainer{
  font-size:14px;
  padding-top:12px;
}
</style>
