<template>
    <!-- 轮播图 -->
        <!-- <div class="swiper">
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
        </div> -->
        <swiper class="swiper" :options="{
                      slidesPerView:5, // 显示几个图片(每次限时几屏)
                      slidesPerGroup:1, // 每次移动几个图片 
                    // 如果需要前进后退按钮
                    navigation: {
                    nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }, 
                    autoplay: true
            }"
          >
                <swiper-slide class="swiper-slide">
                    <img src="../../../static/images/2.png" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../../../static/images/3.png" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../../../static/images/4.png" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../../../static/images/5.png" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../../../static/images/6.png" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../../../static/images/5.png" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../../../static/images/6.png" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../../../static/images/5.png" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../../../static/images/6.png" />
                </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
</template>
<script>
export default {
    name:'ImageList'
}
</script>
<style lang="less" scoped>
      .swiper{
        .swiper-slide{
          img{
             height: 88px;
             width: 88px;
          }
        }
      }
</style>