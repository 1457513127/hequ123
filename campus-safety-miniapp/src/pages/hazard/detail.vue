<template>
  <view class="page">
    <AppNavBar :title="title" back />
    <view class="summary card">
      <view>
        <view class="section-title">{{ item.name }}</view>
        <view class="muted code">{{ item.code || item.freq }}</view>
      </view>
      <StatusTag v-if="item.tag" :text="item.tag" />
    </view>
    <DataSection title="基本信息">
      <view v-for="row in rows" :key="row.label" class="line">
        <text>{{ row.label }}</text>
        <text>{{ row.value }}</text>
      </view>
    </DataSection>
    <DataSection v-if="type !== 'plans'" title="隐患信息" class="mt">
      <view class="hazard">
        <view class="mini-title">1、未提供2026年1月份安全教育培训记录</view>
        <view class="muted">隐患类型：制度类隐患</view>
        <view class="muted">是否整改：否</view>
      </view>
    </DataSection>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import AppNavBar from '../../components/AppNavBar.vue'
import DataSection from '../../components/DataSection.vue'
import StatusTag from '../../components/StatusTag.vue'
import { hazard } from '../../mock/index'

const type = ref('plans')
const id = ref('')
onLoad((query) => {
  type.value = query.type || 'plans'
  id.value = query.id || ''
})
const item = computed(() => (hazard[type.value] || []).find((entry) => entry.id === id.value) || (hazard[type.value] || [])[0] || {})
const title = computed(() => ({ plans: '检查计划详情', records: '检查记录详情', reviews: '复查记录详情', supervises: '督办记录详情' }[type.value] || '隐患详情'))
const rows = computed(() => {
  const entry = item.value
  if (type.value === 'plans') return [
    { label: '计划名称', value: entry.name },
    { label: '下发单位', value: entry.unit },
    { label: '执行频次', value: entry.freq },
    { label: '完成率', value: entry.rate },
    { label: '执行状态', value: entry.tag }
  ]
  return [
    { label: '记录编号', value: entry.code },
    { label: '被检查场所', value: entry.name },
    { label: '所属检查计划', value: '2026年重大风险场所每日安全检查' },
    { label: '处理状态', value: entry.tag },
    { label: '责任人员', value: entry.owner || '化工学院 - 张亮' }
  ]
})
</script>

<style scoped>
.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18rpx;
  padding: 28rpx;
  margin-bottom: 22rpx;
}

.code {
  margin-top: 8rpx;
}

.line {
  min-height: 62rpx;
  display: grid;
  grid-template-columns: 190rpx 1fr;
  gap: 18rpx;
  color: #31445a;
  font-size: 27rpx;
}

.line text:last-child {
  color: #192433;
  font-weight: 600;
}

.hazard {
  padding: 20rpx;
  border-radius: 14rpx;
  background: #fff8f2;
  line-height: 1.7;
}

.mt {
  margin-top: 22rpx;
}
</style>
