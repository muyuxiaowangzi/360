<template>
  <div class="main">
    <div class="main-content">
      <div class="first-content">
        <div class="info">
          <div class="title">
            <span>选择收货地址</span>
            <a href="javascript:;" @click="dialogFormVisible = true"
              >新建地址</a
            >
          </div>
          <ul class="person">
            <li class="person-content" :class="{ activeOne: isShowClo }">
              <div class="person-header">
                <div class="btn">默认</div>
                <span>老王</span>
                <span>130****0000</span>
              </div>
              <div class="person-center">
                <span>北京</span>
                <span>北京市</span>
                <span>东城区</span>
                <span>111</span>
              </div>
              <ul class="person-footer">
                <li>
                  <a href="javascript:;">设为默认</a>
                </li>
                <li>
                  <a href="javascript:;" @click="dialogFormVisible = true"
                    >编辑</a
                  >
                </li>
                <li class="clear">
                  <a href="javascript:;">删除</a>
                </li>
              </ul>
            </li>
            <li class="person-content">
              <div class="person-header">
                <!-- <div class="btn">默认</div> -->
                <span>老王</span>
                <span>130****0000</span>
              </div>
              <div class="person-center">
                <span>北京</span>
                <span>北京市</span>
                <span>东城区</span>
                <span>111</span>
              </div>
              <ul class="person-footer">
                <li>
                  <a href="javascript:;">设为默认</a>
                </li>
                <li>
                  <a href="javascript:;" @click="dialogFormVisible = true"
                    >编辑</a
                  >
                </li>
                <li class="clear">
                  <a href="javascript:;">删除</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="two-content">
        <div class="trade-left">
          <div class="inner-title">商品清单</div>
          <div class="inner-center">360商城</div>
          <div class="inner-footer">
            <div class="inner-img">
              <a href="javascript:;">
                <img src="../../static/images/212.png" alt />
              </a>
            </div>
            <div class="inner-detail">
              <div class="detail-top">
                <span>360 智能摄像机小水滴1080P</span>
                <span>分类：1080P</span>
                <span>x1</span>
                <span class="detail-red">￥169.00</span>
              </div>
              <div class="detail-bottom">
                <span>7天无理由退货</span>
                <span>15天换货</span>
                <span>官方发货</span>
              </div>
            </div>
          </div>
        </div>
        <div class="trade-right">
          <div class="pay-title">支付方式</div>
          <div class="pay-content">在线支付</div>
          <div class="box-title">配送方式</div>
          <div class="box-content">快递</div>
          <div class="info-ivo">
            发票信息
            <span>需要发票</span>
            <input type="checkbox" />
          </div>
          <div class="box-ivo">
            <p>
              <span>电子普通发票</span>
              <span>明细：商品明细</span>
            </p>
            <p>发票抬头：个人</p>
            <div class="btn-ivo">修改</div>
          </div>
          <div class="info-or">
            积分
            <span>暂无可用积分</span>
          </div>
        </div>
      </div>
      <div class="three-content">
        <div class="or-title">使用优惠</div>
        <!-- 卡片组件 -->
        <el-tabs type="border-card" class="card-list">
          <el-tab-pane label="可用优惠(0)">
            <div class="card-one">
              <div class="card-img">
                <img src="../../static/images/bg.png" alt />
              </div>
              <div class="card-content">没有可用的优惠券</div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="优惠券兑换码">
            <div class="card-two">
              <form>
                <input type="text" placeholder="请输入优惠券兑换码" />
                <button disabled="disabled">立即使用</button>
              </form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="four-content">
        <div class="settle-top">
          <table>
            <tbody>
              <tr>
                <th>
                  <span class="txt">
                    共计
                    <span class="txt-color">1</span>件商品
                  </span>
                  <span class="justify">商品总价</span>
                </th>
                <td>￥169.00</td>
              </tr>
              <tr>
                <th>
                  <span class="justify">运费</span>
                </th>
                <td>￥0.00</td>
              </tr>
              <tr>
                <th>
                  <span class="justify">优惠券</span>
                </th>
                <td class="txt-color">-￥0.00</td>
              </tr>
              <tr>
                <th>
                  <span class="justify">活动优惠</span>
                </th>
                <td class="txt-color">-￥20.00</td>
              </tr>
              <tr>
                <th>
                  <span class="justify">会员优惠</span>
                </th>
                <td class="txt-color">-￥0.00</td>
              </tr>
              <tr>
                <th>
                  <span class="justify">积分</span>
                </th>
                <td class="txt-color">-￥0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="settle-center">
          <div class="total-info">
            应付款
            <span>￥149.00</span>
          </div>
          <div class="total-add">
            <span>北京</span>
            <span>北京市</span>
            <span>东城区</span>
            <span>老王</span>
            <span>13000000000</span>
          </div>
        </div>
        <div class="settle-footer">
          <a href="javascript:;">提交订单</a>
        </div>
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog title="收货信息" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form">
        <el-form-item label="收货人" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="请您填写收货人名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="北京" value="shanghai"></el-option>
            <el-option label="深圳" value="shenzhen"></el-option>
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="广州" value="guangzhou"></el-option>
          </el-select>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请您填写详细地址"
            v-model="textarea2"
            margin-top="30px"
            style="margin-top:10px"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="input" placeholder="请您填写手机号"></el-input>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth">
          <el-checkbox v-model="checked">设置为默认地址</el-checkbox>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >保 存</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      isShowClo: true,
      dialogFormVisible: false,
      textarea2: '',
      input: '',
      checked: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      formLabelWidth: '120px',
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    handleClose() {
      this.$refs.ruleForm.resetFields()
      this.form = {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      }
    },
    handleSave() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log('输入正确')
          this.dialogFormVisible = false
        } else {
          console.log('输入错误')
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.main {
  background-color: #f0f0f0;
  font-size: 12px;
  padding: 38px 0 20px;
}
.main-content {
  width: 1024px;
  margin: 0 auto;
  background-color: #fff;
}
.first-content {
  border-bottom: 1px solid #ddd;
  padding: 10px 20px 18px;
  .title {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    padding: 10px 0;
    a {
      text-decoration: none;
      margin-left: 16px;
      font-size: 12px;
      color: #3c7fc9;
      font-weight: 400;
    }
  }
  .person {
    padding-left: 10px;
    display: flex;
    list-style: none;
    max-height: 140px;
    .person-content {
      width: 313px;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 126px;
      margin: 0 0 0 10px;
      position: relative;
      .person-header {
        display: flex;
        margin-top: 17px;
        color: #333;
        font-size: 12px;
        .btn {
          height: 20px;
          line-height: 20px;
          background-color: #f33;
          color: #fff;
          width: 55px;
          text-align: center;
          border-radius: 0 10px 10px 0;
        }
        span {
          margin-left: 20px;
          font-weight: 700;
        }
      }
      .person-center {
        line-height: 15px;
        margin-top: 15px;
        padding: 0 20px;
        span {
          margin-right: 5px;
        }
      }
      .person-footer {
        border-radius: 4px;
        list-style: none;
        background: #f2f2f2;
        bottom: 0;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        padding-left: 0;
        .clear {
          border-right: 0;
        }
        li {
          float: left;
          line-height: 24px;
          width: 33.33%;
          border-right: 1px solid #666;
          box-sizing: border-box;
          a {
            color: #333;
            text-decoration: none;
            display: block;
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
}
.two-content {
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  display: flex;
  font-size: 12px;
  .trade-left {
    border-right: 1px solid #ddd;
    overflow: hidden;
    padding-left: 20px;
    width: 600px;
    .inner-title {
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      padding: 10px 0;
    }
    .inner-center {
      color: #333;
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;
      margin-bottom: 10px;
      padding-left: 20px;
    }
    .inner-footer {
      display: flex;
      padding-left: 20px;
      .inner-img a img {
        width: 80px;
        height: 80px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
      .inner-detail {
        margin-left: 10px;
        .detail-top {
          margin-bottom: 10px;
          span {
            margin-right: 20px;
          }
          .detail-red {
            color: red;
          }
        }
        .detail-bottom {
          span {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .trade-right {
    border-left: 1px solid #ddd;
    margin-left: -1px;
    width: 378px;
    padding: 10px 20px;
    .pay-title {
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
    }
    .pay-content {
      margin-left: 10px;
      border: 1px solid #f33;
      width: 80px;
      border-radius: 4px;
      line-height: 22px;
      text-align: center;
      margin: 10px 0 0 10px;
    }
    .box-title {
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      padding: 10px 0;
    }
    .box-content {
      margin-left: 10px;
      border: 1px solid #f33;
      width: 80px;
      border-radius: 4px;
      line-height: 22px;
      text-align: center;
      margin: 0px 0 0 10px;
    }
    .info-ivo {
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      padding: 10px 0;
      span {
        font-size: 12px;
        font-weight: 400;
        margin-left: 16px;
      }
      input {
        background-repeat: no-repeat;
        content: '';
        display: inline-block;
        height: 13px;
        position: relative;
        top: -1px;
        vertical-align: middle;
        width: 13px;
      }
    }
    .box-ivo {
      margin-left: 10px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 15px 20px;
      position: relative;
      span {
        margin-right: 15px;
      }
      .btn-ivo {
        background: #ddd;
        cursor: pointer;
        line-height: 20px;
        padding: 0 9px;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .info-or {
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      margin-bottom: 10px;
      span {
        font-size: 12px;
        font-weight: 400;
        margin-left: 16px;
        color: #9d9fa2;
      }
    }
  }
}
.three-content {
  border-bottom: 1px solid #ddd;
  padding: 10px 20px 18px;
  .or-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    padding: 10px 0;
  }
  .card-list {
    margin-left: 10px;
    margin-top: 10px;
    .card-one {
      .card-img {
        text-align: center;
        img {
          vertical-align: middle;
        }
      }
      .card-content {
        text-align: center;
        color: #333;
        font-size: 12px;
        font-weight: 400;
        padding: 10px;
        margin-top: -50px;
      }
    }
    .card-two {
      border: 1px solid #ddd;
      max-height: 290px;
      overflow: auto;
      padding: 20px 0 20px 15px;
      input {
        background: #fff;
        border-radius: 4px;
        border: 1px solid #ddd;
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        padding: 0 5px;
        width: 270px;
        vertical-align: middle;
      }
      button {
        border-radius: 4px;
        font-size: 12px;
        line-height: 1.5;
        min-width: 88px;
        padding: 2px 0;
        vertical-align: middle;
        margin-left: 10px;
        color: #fff;
        background-color: #ddd;
        border: 0;
      }
    }
  }
}
.four-content {
  .settle-top {
    padding: 20px 30px;
    overflow: hidden;
    table {
      float: right;
      border-collapse: collapse;
      border-spacing: 0;
      text-indent: initial;
      tbody {
        tr {
          th {
            line-height: 25px;
            padding-left: 20px;
            text-align: right;
            .txt {
              margin-right: 15px;
            }
            .justify {
              width: 55px;
              height: 30px;
              display: inline-block;
              line-height: 30px;
              vertical-align: middle;
              text-align: justify;
              text-align-last: justify;
            }
          }
          td {
            line-height: 25px;
            padding-left: 20px;
            text-align: right;
          }
          .txt-color {
            color: #f33;
          }
        }
      }
    }
  }
  .settle-center {
    background: #fff6e9;
    padding: 10px 30px;
    .total-info {
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
      text-align: right;
      span {
        color: #f33;
        margin-left: 10px;
      }
    }
    .total-add {
      color: #999;
      margin-top: 10px;
      text-align: right;
      span {
        margin-left: 5px;
      }
    }
  }
  .settle-footer {
    padding: 10px 30px;
    text-align: right;
    a {
      background-color: #f63;
      background: linear-gradient(180deg, #f33 0, #f63 100%);
      color: #fff;
      border-radius: 6px;
      font-size: 20px;
      font-weight: 400;
      line-height: 38px;
      width: 200px;
      border: 1px solid transparent;
      cursor: pointer;
      display: inline-block;
      outline: 0;
      padding: 0;
      text-align: center;
      white-space: nowrap;
      text-decoration: none;
    }
  }
}
.activeOne {
  border: 1px solid #f33 !important;
}
</style>
