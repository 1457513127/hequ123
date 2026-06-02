<template>
  <view class="empty">
    <view class="mark">∅</view>
    <view class="text">{{ text }}</view>
  </view>
</template>

<script setup>
defineProps({
  text: { type: String, default: '暂无数据' }
})
</script>

<style scoped>
.empty {
  padding: 80rpx 24rpx;
  color: #8da0b2;
  text-align: center;
}

.mark {
  font-size: 64rpx;
  font-weight: 800;
}

.text {
  margin-top: 12rpx;
  font-size: 26rpx;
}
</style>
