<template>
  <view class="upload">
    <view class="plus">＋</view>
    <view class="tip">{{ label }}</view>
  </view>
</template>

<script setup>
defineProps({
  label: { type: String, default: '上传图片' }
})
</script>

<style scoped>
.upload {
  width: 160rpx;
  height: 160rpx;
  border: 2rpx dashed #bdd4e3;
  border-radius: 14rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6e8da6;
  background: #f7fbfd;
}

.plus {
  font-size: 46rpx;
}

.tip {
  margin-top: 8rpx;
  font-size: 23rpx;
}
</style>
