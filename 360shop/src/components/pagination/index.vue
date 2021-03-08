<template>
  <div class="pagination">
    <button>首页</button>
    <button>上一页</button>
    <button class="active">1</button>
    <button>2</button>
    <button>3</button>
    <button>...</button>
    <button>下一页</button>
    <button>尾页</button>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.pagination {
  margin: 0 auto;
  button {
    background-color: #fff;
    border: 1px solid #ddd;
    display: inline-block;
    margin-left: 6px;
    padding: 6px 12px;
    outline: none;
    &:hover {
      border: 1px solid rgb(15, 184, 133);
    }
  }
  .active {
    background-color: #23ac38 !important;
    color: #fff !important;
  }
}
</style>
