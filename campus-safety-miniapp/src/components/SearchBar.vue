<template>
  <view class="search">
    <text class="search-icon">⌕</text>
    <input class="search-input" :value="modelValue" :placeholder="placeholder" confirm-type="search" @input="$emit('update:modelValue', $event.detail.value)" />
    <button v-if="filter" class="filter" @click="$emit('filter')">筛选</button>
  </view>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '全局搜索' },
  filter: { type: Boolean, default: false }
})

defineEmits(['update:modelValue', 'filter'])
</script>

<style scoped>
.search {
  height: 76rpx;
  padding: 0 18rpx;
  display: flex;
  align-items: center;
  gap: 12rpx;
  background: #fff;
  border: 1rpx solid #dce8f0;
  border-radius: 16rpx;
}

.search-icon {
  font-size: 34rpx;
  color: #8091a3;
}

.search-input {
  flex: 1;
  height: 74rpx;
  color: #192433;
  font-size: 28rpx;
}

.filter {
  width: 88rpx;
  height: 52rpx;
  border-radius: 10rpx;
  background: #eef7fb;
  color: #1e8ee8;
  font-size: 26rpx;
}
</style>
