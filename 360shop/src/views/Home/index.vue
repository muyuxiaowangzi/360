<template>
  <div class="container">
    <div class="container_top">
      <div class="testNav">
        <div class="typeNav">
          <div class="typeNav_top">
            <a class="iconfont icon-fenlei" href="javascript:;">全部...</a>
          </div>
          <ul class="typeNav_list">
            <li
              v-for="(nav, index) in typeNavInfo.category"
              :key="nav.id"
              @mouseenter="enterClick(index, nav.id)"
              @mouseleave="noEnterClick"
              :class="enterIndex === index ? 'active_li' : ''"
            >
              <a href="javascript:;">{{ nav.name }}</a>
            </li>
          </ul>
        </div>
        <div class="typeNav_right" :class="isShowRight ? 'showRight' : ''">
          <div class="type_name">
            <div
              class="type_list"
              v-for="type in categoryInfo.secondary"
              :key="type.name"
            >
              <a href="javascript:;" class="typeList_title">{{ type.name }}</a>
              <div class="typeList_item">
                <a
                  href="javascript:;"
                  v-for="typeItem in type.item"
                  :key="typeItem.name"
                >
                  <img :src="typeItem.pic" alt="" />
                  <strong>{{ typeItem.name }}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
    <div class="top_swiper">
      <swiper
        class="swiper"
        ref="mySwiper"
        :options="{
          height: 'auto',
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: true,
          effect: 'fade',
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }"
      >
        <swiper-slide class="swipereItem">
          <a
            href="javascript:;"
            style="background-image: url('https://p0.ssl.qhimg.com/t014142307574cd47c8.webp')"
          ></a>
        </swiper-slide>
        <swiper-slide class="swipereItem">
          <a
            href="javascript:;"
            style="background-image: url('https://p5.ssl.qhimg.com/t01124102be6ddde8d1.webp')"
          ></a>
        </swiper-slide>
        <swiper-slide class="swipereItem">
          <a
            href="javascript:;"
            style="background-image: url('https://p2.ssl.qhimg.com/t01cd7e0d2b07fb7bd3.webp')"
          ></a>
        </swiper-slide>
        <swiper-slide class="swipereItem">
          <a
            href="javascript:;"
            style="background-image: url('https://p0.ssl.qhimg.com/t01eb2fdd57cc343e08.webp')"
          ></a>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </div>
    <!-- 热门活动 -->
    <div class="active">
      <div class="active_center">
        <div class="active_text">
          <span>热门活动</span>
        </div>
        <div class="active_list">
          <a href="javascript:;">
            <img src="./images/l1.jpg" />
          </a>
          <a href="javascript:;">
            <img src="./images/l2.jpg" />
          </a>
          <a href="javascript:;">
            <img src="./images/l3.jpg" />
          </a>
          <a href="javascript:;">
            <img src="./images/l4.jpg" />
          </a>
        </div>
        <div>
          <img src="./images/c1.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- 限时购 -->
    <div class="timeShop">
      <div class="langTime">
        <span>限时购</span>
        <span>12:00场</span>
        <div class="time">
          <span>距结束</span>
          <ul>
            <li>
              <span>00</span>
            </li>
            :
            <li>
              <span>00</span>
            </li>
            :
            <li>
              <span>00</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="time_bottom">
        <div class="timeBottom_left">
          <img src="./images/time1.jpg" alt="" />
        </div>
        <div class="timeBottom_right">
          <div class="time_item">
            <div class="timeItem_left">
              <img src="./images/time2.png" />
            </div>
            <div class="timeItem_right">
              <a href="javascript:;" class="timeItem_rightText"
                >360 行车记录仪G580红色双路版</a
              >
              <div class="timeItem_price">
                <strong>￥369</strong>
                <strong>￥999</strong>
              </div>
              <span class="timeItem_qiang">马上抢</span>
            </div>
          </div>
          <div class="time_item">
            <div class="timeItem_left">
              <img src="./images/time3.png" />
            </div>
            <div class="timeItem_right">
              <a href="javascript:;" class="timeItem_rightText"
                >360 行车记录仪G580红色双路版</a
              >
              <div class="timeItem_price">
                <strong>￥369</strong>
                <strong>￥999</strong>
              </div>
              <span class="timeItem_qiang">马上抢</span>
            </div>
          </div>
          <div class="time_item">
            <div class="timeItem_left">
              <img src="./images/time4.png" />
            </div>
            <div class="timeItem_right">
              <a href="javascript:;" class="timeItem_rightText"
                >360 行车记录仪G580红色双路版</a
              >
              <div class="timeItem_price">
                <strong>￥369</strong>
                <strong>￥999</strong>
              </div>
              <span class="timeItem_qiang">马上抢</span>
            </div>
          </div>
          <div class="time_item">
            <div class="timeItem_left">
              <img src="./images/time5.png" />
            </div>
            <div class="timeItem_right">
              <a href="javascript:;" class="timeItem_rightText"
                >360 行车记录仪G580红色双路版</a
              >
              <div class="timeItem_price">
                <strong>￥369</strong>
                <strong>￥999</strong>
              </div>
              <span class="timeItem_qiang">马上抢</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 爆款推荐 -->
    <div class="recommend">
      <div class="recommend_text">
        <span>爆款推荐</span>
      </div>
      <div class="recommend_top">
        <a href="javascript:;">
          <img src="./images/r1.jpg" alt="" />
        </a>
        <a href="javascript:;">
          <img src="./images/r2.jpg" alt="" />
        </a>
        <a href="javascript:;">
          <img src="./images/r3.jpg" alt="" />
        </a>
        <a href="javascript:;">
          <img src="./images/r4.jpg" alt="" />
        </a>
      </div>
      <a class="recommend_bottom">
        <img src="./images/r5.jpg" alt="" />
      </a>
    </div>

    <!-- floor -->
    <!-- 家庭安防 -->
    <div class="floor">
      <div class="floor_text">
        <span>家庭安防</span>
        <a href="javascript:;">全部>></a>
      </div>

      <div class="floor_bottom">
        <a href="javascript:;">
          <img src="./images/f1.jpg" alt="" />
        </a>
        <a href="javascript:;">
          <img src="./images/f2.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f3.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f4.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f5.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f6.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f7.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
      </div>

      <div>
        <img src="./images/f8.jpg" alt="" />
      </div>
    </div>

    <!-- 家庭安防 -->
    <div class="floor">
      <div class="floor_text">
        <span>家庭安防</span>
        <a href="javascript:;">全部>></a>
      </div>

      <div class="floor_bottom">
        <a href="javascript:;">
          <img src="./images/f1.jpg" alt="" />
        </a>
        <a href="javascript:;">
          <img src="./images/f2.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f3.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f4.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f5.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f6.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f7.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
      </div>

      <div>
        <img src="./images/f8.jpg" alt="" />
      </div>
    </div>

    <!-- 家庭安防 -->
    <div class="floor">
      <div class="floor_text">
        <span>家庭安防</span>
        <a href="javascript:;">全部>></a>
      </div>

      <div class="floor_bottom">
        <a href="javascript:;">
          <img src="./images/f1.jpg" alt="" />
        </a>
        <a href="javascript:;">
          <img src="./images/f2.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f3.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f4.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f5.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f6.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
        <a href="javascript:;">
          <img src="./images/f7.jpg" alt="" />
          <p class="p_top">360 智能摄像机云台变焦版1080P D866</p>
          <p class="p_bottom">9倍混合变焦 微光全彩技术 360°</p>
          <strong class="floor_price">￥199</strong>
          <strong class="floor_noPrice">￥349</strong>
        </a>
      </div>

      <div>
        <img src="./images/f8.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      isShowRight: false,
      //分类数据
      typeNavInfo: {},
      //分类移入是否显示样式,数组下标
      enterIndex: -1,
      //相关分类详细数据
      categoryInfo: {},
      //保存上一次请求的分类id
      preId: null,
    }
  },
  async mounted() {
    //获取分类数据
    const result = await this.$API.reqPrimaryCategory()
    console.log(result)
    this.typeNavInfo = result.data.data
  },
  methods: {
    //分类移入事件
    async enterClick(index, id) {
      //改变下标，切换选中状态
      this.enterIndex = index
      //右边是否显示
      this.isShowRight = true
      // 判断是否还是移入的前一个
      if (id === this.preId) return
      //根据分类id获取分类详细数据
      const result = await this.$API.reqSecondaryCategory(
        this.typeNavInfo.type,
        id
      )
      this.categoryInfo = result.data.data
      this.preId = id
    },
    noEnterClick() {
      this.isShowRight = false
      //改变下标，切换选中状态
      this.enterIndex = -1
    },
  },
}
</script>
<style>
.container {
  width: 100%;
}
.container .top_swiper {
  width: 100%;
  /* margin: 0 auto; */
  /* position: relative; */
  height: 530px;
  margin-bottom: 10px;
}
.container .top_swiper .swiper {
  height: 530px;
}
.container .top_swiper .swiper .swipereItem {
  width: 100%;
  height: 100%;
}
.container .top_swiper .swiper .swipereItem a {
  display: block;

  background-size: auto 100%;
  /* min-width: 100%; */
  height: 100%;
}
.container .container_top {
  width: 1180px;
  margin: 0 auto;
}
.container .container_top .testNav {
  height: 530px;
  width: 1180px;
  position: absolute;
  margin: 0 auto;
  z-index: 99;
}
.container .container_top .typeNav {
  width: 230px;
  height: 530px;
  background-color: rgba(51, 51, 51, 0.7);
}
.container .container_top .swiper-button-prev {
  position: absolute;
  left: 230px;
  width: 42px;
  height: 72px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  opacity: 0.5;
  border: 0;
}
.container .container_top .swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.7;
}
.container .container_top .swiper-button-next {
  right: 0;
  width: 42px;
  height: 72px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  border: 0;
  opacity: 0.5;
}
.container .container_top .swiper-button-next:hover {
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.7;
}
.container .container_top .typeNav .typeNav_top {
  background-color: rgba(51, 51, 51, 0.6);
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.container .container_top .typeNav .typeNav_top a {
  font-size: 16px;
  color: white;
}

.container .container_top .typeNav .typeNav_list li {
  height: 48px;
  line-height: 48px;
  text-align: center;
}
.container .container_top .typeNav .typeNav_list li.active_li {
  background-color: rgba(51, 51, 51, 0.6);
}
.container .container_top .typeNav .typeNav_list li a {
  font-size: 14px;
  color: white;
}

.container .container_top .typeNav_right {
  display: none;
  width: 950px;
  height: 530px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 230px;
  z-index: 99;
  padding: 20px 20px 20px 0;
}
.container .container_top .typeNav_right.showRight {
  display: block;
}
.container .container_top .typeNav_right .type_name .type_list {
  position: relative;
}
.container .container_top .typeNav_right .type_name .type_list .typeList_title {
  display: inline-block;
  width: 60px;
  height: 30px;
  border-right: 1px solid #000;
  color: #666;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  top: 20px;
  left: 50px;
  line-height: 30px;
  text-align: center;
}
.container .container_top .typeNav_right .type_name .type_list .typeList_item {
  padding-left: 120px;
  font-size: 14px;
}

.container
  .container_top
  .typeNav_right
  .type_name
  .type_list
  .typeList_item
  a {
  display: inline-block;
  width: 230px;
  height: 65px;
}
.container
  .container_top
  .typeNav_right
  .type_name
  .type_list
  .typeList_item
  a
  img {
  width: 65px;
  height: 65px;
  vertical-align: middle;
}
.container
  .container_top
  .typeNav_right
  .type_name
  .type_list
  .typeList_item
  a
  strong {
  height: 65px;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
/* 热门活动 */
.container .active {
  width: 100%;
  margin-bottom: 20px;
}
.container .active .active_center {
  width: 1180px;
  margin: 0 auto;
}
.container .active .active_center .active_text {
  height: 24px;
}
.container .active .active_center .active_text span {
  font-size: 20px;
  line-height: 20px;
}
.container .active .active_center .active_list {
  margin: 10px 0;
}
.container .active .active_center .active_list a {
  display: inline-block;
  width: 280px;
  height: 242px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 20px 20px 0;
}
.container .active .active_center .active_list a:last-child {
  margin-right: 0;
}
.container .active .active_center .active_list a img {
  width: 100%;
  height: 100%;
}

/* 限时购 */
.container .timeShop {
  width: 1180px;
  margin: 0 auto;
}
.container .timeShop .langTime {
  margin-bottom: 10px;
}
.container .timeShop .langTime span:nth-of-type(1) {
  font-size: 24px;
  font-weight: 500;
}
.container .timeShop .langTime span:nth-of-type(2) {
  margin: 0 30px 0 10px;
  font-size: 18px;
}
.container .timeShop .langTime .time {
  display: inline-block;
  font-size: 18px;
}
.container .timeShop .langTime .time ul {
  display: inline-block;
  margin-left: 10px;
}
.container .timeShop .langTime .time ul li {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: #333;
  border-radius: 3px;
  color: #fff;
  text-align: center;
  line-height: 25px;
}
.container .timeShop .langTime .time span {
  font-size: 18px;
}
.container .timeShop .time_bottom {
  width: 100%;
  overflow: hidden;
}
.container .timeShop .time_bottom .timeBottom_left {
  width: 240px;
  height: 380px;
  float: left;
}
.container .timeShop .time_bottom .timeBottom_left img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.container .timeShop .time_bottom .timeBottom_right {
  width: 940px;
  height: 380px;
  float: left;
}
.container .timeShop .time_bottom .timeBottom_right .time_item {
  width: 450px;
  height: 180px;
  float: left;
  background-color: #fff;
  margin: 0 0 20px 20px;
  border-radius: 4px;
  padding: 19px 15px;
  box-sizing: border-box;
}
.container .timeShop .time_bottom .timeBottom_right .time_item img {
  width: 160px;
  height: 160px;
  float: left;
}
.container
  .timeShop
  .time_bottom
  .timeBottom_right
  .time_item
  .timeItem_right
  .timeItem_rightText {
  font-size: 18px;
}
.container
  .timeShop
  .time_bottom
  .timeBottom_right
  .time_item
  .timeItem_right
  .timeItem_price {
  font-size: 20px;
  color: #dd0e00;
  margin-top: 10px;
}
.container
  .timeShop
  .time_bottom
  .timeBottom_right
  .time_item
  .timeItem_right
  .timeItem_price
  strong:last-child {
  font-size: 13px;
  color: #9b9b9b;
  text-decoration: line-through;
}
.container
  .timeShop
  .time_bottom
  .timeBottom_right
  .time_item
  .timeItem_right
  .timeItem_qiang {
  display: inline-block;
  width: 135px;
  height: 35px;
  background-color: #333;
  font-size: 18px;
  color: #fff;
  border-radius: 4px;
  line-height: 35px;
  text-align: center;
  margin-top: 20px;
}

/* 爆款推荐 */
.container .recommend {
  width: 1180px;
  margin: 0 auto;
}
.container .recommend .recommend_text {
  height: 24px;
  margin: 20px 0;
}
.container .recommend .recommend_text span {
  line-height: 24px;
  font-size: 20px;
}
.container .recommend .recommend_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-top: 20px; */
}
.container .recommend .recommend_top img {
  width: 280px;
  height: 242px;
  border-radius: 4px;
}
.container .recommend .recommend_bottom {
  width: 100%;
  margin-top: 10px;
  display: inline-block;
}
.container .recommend .recommend_bottom img {
  width: 100%;
}

/* 家庭安防 */
.container .floor {
  width: 1180px;
  margin: 0 auto;
}
.container .floor .floor_text {
  height: 24px;
  margin: 20px 0;
}
.container .floor .floor_text span {
  line-height: 24px;
  font-size: 20px;
}
.container .floor .floor_text a {
  font-size: 14px;
  color: #666;
  margin-left: 10px;
}
.container .floor .floor_bottom a {
  display: inline-block;
  background-color: #fff;
}
.container .floor .floor_bottom a:first-child {
  width: 580px;
  height: 460px;
  padding: 0;
  float: left;
  overflow: hidden;
}
.container .floor .floor_bottom a:last-child {
  margin: 0;
}
.container .floor .floor_bottom a:nth-of-type(3) {
  margin: 0;
}
.container .floor .floor_bottom a {
  width: 280px;
  padding: 30px 20px;
  height: 460px;
  box-sizing: border-box;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  text-align: center;
}
.container .floor .floor_bottom a img {
  width: 100%;
  vertical-align: top;
  margin-bottom: 30px;
}
.container .floor .floor_bottom a .p_top {
  font-size: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.container .floor .floor_bottom a .p_bottom {
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  /* line-height: 24px; */
  margin-top: 5px;
}
.container .floor .floor_bottom a .floor_price {
  font-size: 20px;
  color: #dd0e00;
  margin-top: 10px;
}
.container .floor .floor_bottom a .floor_noPrice {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  line-height: 65px;
}
</style>
