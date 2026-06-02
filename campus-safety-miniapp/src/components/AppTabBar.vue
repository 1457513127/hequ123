<template>
  <view class="custom-tab fixed-safe-bottom">
    <button v-for="item in items" :key="item.text" class="tab-item" :class="{ active: active === item.text }" @click="$emit('select', item)">
      <text class="tab-icon">{{ item.icon }}</text>
      <text>{{ item.text }}</text>
      <text v-if="item.badge" class="badge">{{ item.badge }}</text>
    </button>
  </view>
</template>

<script setup>
defineProps({
  active: { type: String, default: '工作台' },
  items: {
    type: Array,
    default: () => [
      { text: '工作台', icon: '▦' },
      { text: '待办', icon: '♟', badge: 20 },
      { text: '组织', icon: '☷' },
      { text: '我的', icon: '●' }
    ]
  }
})

defineEmits(['select'])
</script>

<style scoped>
.custom-tab {
  position: fixed;
  left: 24rpx;
  right: 24rpx;
  bottom: 18rpx;
  z-index: 20;
  min-height: 88rpx;
  padding: 8rpx;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: rgba(255, 255, 255, 0.96);
  border: 1rpx solid #dce8f0;
  border-radius: 24rpx;
  box-shadow: 0 10rpx 32rpx rgba(25, 55, 80, 0.12);
}

.tab-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rpx;
  color: #6e7d8f;
  font-size: 23rpx;
}

.tab-item.active {
  color: #1e8ee8;
  font-weight: 800;
}

.tab-icon {
  font-size: 34rpx;
}

.badge {
  position: absolute;
  top: 2rpx;
  right: 28rpx;
  min-width: 28rpx;
  height: 28rpx;
  padding: 0 6rpx;
  border-radius: 999rpx;
  background: #e85252;
  color: #fff;
  font-size: 18rpx;
  line-height: 28rpx;
}
</style>
