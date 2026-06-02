<template>
  <view class="page">
    <AppNavBar title="事件处置详情" back />
    <view class="summary card">
      <view>
        <view class="section-title">上报人：{{ item.reporter }}</view>
        <view class="muted">{{ item.location }}</view>
      </view>
      <StatusTag :text="item.status" />
    </view>
    <view class="actions">
      <button class="primary-btn" @click="go('/pages/event/close?id=' + item.id)">办结</button>
      <button class="ghost-btn" @click="go('/pages/event/flow?id=' + item.id)">流转</button>
      <button class="ghost-btn" @click="go('/pages/event/logs?id=' + item.id)">日志</button>
    </view>
    <DataSection title="基本信息">
      <view v-for="row in rows" :key="row.label" class="line">
        <text>{{ row.label }}</text>
        <text>{{ row.value }}</text>
      </view>
    </DataSection>
    <DataSection title="处理结果" class="mt">
      <view class="line"><text>处理人</text><text>保卫科 - 李亮</text></view>
      <view class="line"><text>处理时间</text><text>2026-02-22 16:46:00</text></view>
      <view class="line"><text>处理结果</text><text>{{ item.status === '已办结' ? '办结' : '处理中' }}</text></view>
    </DataSection>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import AppNavBar from '../../components/AppNavBar.vue'
import DataSection from '../../components/DataSection.vue'
import StatusTag from '../../components/StatusTag.vue'
import { events } from '../../mock/index'
import { go } from '../../utils/router'

const id = ref('')
onLoad((query) => {
  id.value = query.id || 'e1'
})
const item = computed(() => events.find((entry) => entry.id === id.value) || events[0])
const rows = computed(() => [
  { label: '事件状态', value: item.value.status },
  { label: '事件编号', value: item.value.code },
  { label: '事件来源', value: item.value.source },
  { label: '联系电话', value: '18561695555' },
  { label: '事件类型', value: item.value.type },
  { label: '上报时间', value: item.value.time },
  { label: '事件内容', value: item.value.content }
])
</script>

<style scoped>
.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18rpx;
  padding: 28rpx;
  margin-bottom: 18rpx;
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14rpx;
  margin-bottom: 22rpx;
}

.line {
  min-height: 62rpx;
  display: grid;
  grid-template-columns: 180rpx 1fr;
  gap: 18rpx;
  color: #31445a;
  font-size: 27rpx;
}

.line text:last-child {
  color: #192433;
  font-weight: 600;
  line-height: 1.5;
}

.mt {
  margin-top: 22rpx;
}
</style>
