<template>
  <text class="tag" :class="tone">{{ text }}</text>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, default: '' }
})

const tone = computed(() => {
  if (['重大', '逾期', '有预警', '督办中'].includes(props.text)) return 'danger'
  if (['较大', '处理中', '办理中', '未处理', '待复查', '转入复查'].includes(props.text)) return 'warn'
  if (['通过', '已处理', '已办结', '无预警', '督办完成'].includes(props.text)) return 'success'
  return 'info'
})
</script>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 82rpx;
  height: 36rpx;
  padding: 0 14rpx;
  border-radius: 999rpx;
  font-size: 22rpx;
  font-weight: 700;
}

.info {
  color: #1e74b8;
  background: #e8f4fd;
}

.success {
  color: #12806e;
  background: #e3f7f2;
}

.warn {
  color: #aa620b;
  background: #fff3dc;
}

.danger {
  color: #c53d3d;
  background: #ffe9e9;
}
</style>
