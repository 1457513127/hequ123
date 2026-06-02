<template>
  <view class="section card">
    <view class="between section-head">
      <view class="section-title">{{ title }}</view>
      <button v-if="more" class="more" @click="$emit('more')">
        <text>›</text>
      </button>
    </view>
    <slot />
  </view>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  more: { type: Boolean, default: false }
})

defineEmits(['more'])
</script>

<style scoped>
.section {
  padding: 22rpx 24rpx;
}

.section-head {
  margin-bottom: 18rpx;
}

.more {
  width: 44rpx;
  height: 44rpx;
  color: #17324d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.more text {
  color: #17324d;
  font-size: 44rpx;
  line-height: 44rpx;
}
</style>
