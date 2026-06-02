<template>
  <view v-if="show" class="mask" @click="$emit('close')">
    <view class="panel" @click.stop>
      <view class="between">
        <view class="section-title">筛选</view>
        <button class="close" @click="$emit('close')">×</button>
      </view>
      <view v-for="group in groups" :key="group.key" class="group">
        <view class="mini-title">{{ group.title }}</view>
        <view class="chips">
          <button v-for="option in group.options" :key="option" class="chip" :class="{ active: modelValue[group.key] === option }" @click="select(group.key, option)">
            {{ option }}
          </button>
        </view>
      </view>
      <view class="actions">
        <button class="ghost-btn" @click="$emit('reset')">重置</button>
        <button class="primary-btn" @click="$emit('close')">确定</button>
      </view>
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  show: { type: Boolean, default: false },
  groups: { type: Array, default: () => [] },
  modelValue: { type: Object, default: () => ({}) }
})

const emit = defineEmits(['update:modelValue', 'close', 'reset'])

function select(key, option) {
  emit('update:modelValue', { ...props.modelValue, [key]: option })
}
</script>

<style scoped>
.mask {
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(13, 31, 48, 0.35);
  display: flex;
  align-items: flex-end;
}

.panel {
  width: 100%;
  padding: 30rpx 28rpx calc(30rpx + env(safe-area-inset-bottom));
  background: #fff;
  border-radius: 28rpx 28rpx 0 0;
}

.close {
  width: 56rpx;
  height: 56rpx;
  color: #6e7d8f;
  font-size: 44rpx;
}

.group {
  margin-top: 28rpx;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  margin-top: 16rpx;
}

.chip {
  height: 64rpx;
  padding: 0 26rpx;
  border-radius: 12rpx;
  background: #f0f5f8;
  color: #536577;
  font-size: 26rpx;
}

.chip.active {
  background: #e8f4fd;
  color: #1e8ee8;
  font-weight: 700;
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 18rpx;
  margin-top: 34rpx;
}
</style>
