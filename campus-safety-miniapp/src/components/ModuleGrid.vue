<template>
  <view class="grid">
    <button v-for="item in items" :key="item.title" class="module" @click="$emit('select', item)">
      <view class="icon" :style="{ background: item.color + '22', color: item.color }">{{ item.icon }}</view>
      <text class="label">{{ item.title }}</text>
    </button>
  </view>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] }
})

defineEmits(['select'])
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 28rpx 12rpx;
  padding: 24rpx 4rpx;
}

.module {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.icon {
  width: 72rpx;
  height: 72rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34rpx;
  font-weight: 800;
}

.label {
  color: #192433;
  font-size: 24rpx;
  line-height: 1.2;
  text-align: center;
}
</style>
