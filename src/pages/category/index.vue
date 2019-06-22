<template>
  <div class="categories">
    <!-- 左边 -->
    <scroll-view :style="{height:windowHeight+'px'}" class="categories-left" scroll-y>
      <div
        v-for="(item,index) in categories"
        :key="index"
        :class="['categories-left-item',selectIndex === index?'categories-left-active':'']"
        @click="toggleSelect(index)"
      >
        <text>{{item.cat_name}}</text>
      </div>
    </scroll-view>

    <!-- 右边 -->
    <scroll-view :style="{height:windowHeight+'px'}" class="categories-right" scroll-y>
        <div v-for="item in secondLevelCategories" :key='item.cat_id' class="categories-right-item">
            <!-- 二级分类标题 -->
            <div class="categories-right-item-title">
                <text :style="{color:'red'}">{{item.cat_name}}</text>
            </div>

            <!-- 三级分类 -->
            <div class="categories-right-item-body">
                <div class="right-body-item" v-for="(subitem,index2) in item.children" :key='index2'>
                    <image :src='subitem.cat_icon'></image>
                    <span class="right-body-item-title">{{subitem.cat_name}}</span>
                </div>
            </div>
        </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: 0, //设定的滚动框高
      categories: [], //一级分类数据
      selectIndex: 0, //点击对应的元素的下标,一级分类索引
      secondLevelCategories: [] //二级分类数据
    };
  },
  onLoad() {
    this.getCatetoryData();
    const { windowHeight } = wx.getSystemInfoSync();
    this.windowHeight = windowHeight - 10;
  },
  methods: {
    async getCatetoryData() {
      const res = await this.$axios.get("categories");
      this.categories = res.data.message;
      console.log(this.categories);
      // 第一次请求数据回来就给二级分类数据赋值
      this.secondLevelCategories = this.categories[0].children;
    },
    toggleSelect(index) {
      // 点击时 将当前点击的index赋值给 selectIndex
      this.selectIndex = index;
      //赋值给二级分类
      this.secondLevelCategories = this.categories[index].children;
    }
  }
};
</script>


<style lang="less" scoped>
.categories {
  display: flex;
  margin-top: 10px;
  &-left {
    width: 200rpx;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200rpx;
      height: 100rpx;
      position: relative;
      text {
        color: #999;
      }
    }
    &-active {
      background: #fff;
      text {
        color: #000;
      }
      &::before {
        position: absolute;
        content: "";
        background-color: #ff2d4a;
        left: 0;
        top: 10rpx;
        width: 5px;
        height: 80rpx;
      }
    }
  }
  &-right {
    flex: 1;
    background-color: #fff;
    &-item {
      &-title {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666;
        font-size: 14px;
        &::before {
          content: "/";
          color: #eeeeee;
          margin-right: 20rpx;
        }

        &::after {
          content: "/";
          color: #eeeeee;
          margin-left: 20rpx;
        }
      }
      &-body {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
image {
  width: 100rpx;
  height: 80rpx;
}
.right-body-item {
  height: 200rpx;
  width: 33.33333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-title {
    margin-top: 5rpx;
    color: #666;
    font-size: 14px;
  }
}
</style>


