<template>
  <view class="nav">
    <button v-if="back" class="nav-back" @click="handleBack">‹</button>
    <view class="nav-title">{{ title }}</view>
    <view class="nav-extra"><slot name="extra" /></view>
  </view>
</template>

<script setup>
import { back as goBack } from '../utils/router'

defineProps({
  title: { type: String, default: '校园安全' },
  back: { type: Boolean, default: false }
})

function handleBack() {
  goBack()
}
</script>

<style scoped>
.nav {
  height: 88rpx;
  padding: 0 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(245, 248, 251, 0.94);
  backdrop-filter: blur(16rpx);
}

.nav-title {
  font-size: 34rpx;
  font-weight: 800;
  color: #17324d;
}

.nav-back,
.nav-extra {
  position: absolute;
  top: 0;
  height: 88rpx;
  display: flex;
  align-items: center;
}

.nav-back {
  left: 12rpx;
  width: 72rpx;
  justify-content: center;
  color: #17324d;
  font-size: 56rpx;
}

.nav-extra {
  right: 24rpx;
}
</style>
