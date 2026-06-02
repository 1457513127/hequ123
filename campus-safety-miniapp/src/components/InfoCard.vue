<template>
  <button class="info-card card" @click="$emit('tap')">
    <view class="between">
      <view class="title">{{ title }}</view>
      <StatusTag v-if="tag" :text="tag" />
    </view>
    <view v-if="subtitle" class="subtitle">{{ subtitle }}</view>
    <view class="meta">
      <slot />
    </view>
  </button>
</template>

<script setup>
import StatusTag from './StatusTag.vue'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  tag: { type: String, default: '' }
})

defineEmits(['tap'])
</script>

<style scoped>
.info-card {
  width: 100%;
  padding: 24rpx;
  margin-bottom: 18rpx;
  text-align: left;
}

.title {
  flex: 1;
  padding-right: 16rpx;
  color: #192433;
  font-size: 30rpx;
  font-weight: 800;
  line-height: 1.35;
}

.subtitle {
  margin-top: 8rpx;
  color: #6e7d8f;
  font-size: 25rpx;
  line-height: 1.45;
}

.meta {
  margin-top: 18rpx;
  color: #536577;
  font-size: 25rpx;
  line-height: 1.65;
}
</style>
