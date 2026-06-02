<template>
  <view class="page">
    <AppNavBar :title="title" back />
    <view class="summary card">
      <view class="section-title">{{ item.name }}</view>
      <StatusTag v-if="item.tag" :text="item.tag" />
    </view>
    <DataSection title="基本信息">
      <view v-for="row in rows" :key="row.label" class="line">
        <text>{{ row.label }}</text>
        <text>{{ row.value }}</text>
      </view>
    </DataSection>
    <DataSection v-if="type === 'grids'" title="网格职责" class="mt">
      <view class="desc">切实加强对本责任网格安全稳定工作的领导，掌握安全情况，定期部署安全工作，落实检查、整改、复查和督办闭环。</view>
    </DataSection>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import AppNavBar from '../../components/AppNavBar.vue'
import DataSection from '../../components/DataSection.vue'
import StatusTag from '../../components/StatusTag.vue'
import { resources } from '../../mock/index'

const type = ref('grids')
const id = ref('')
onLoad((query) => {
  type.value = query.type || 'grids'
  id.value = query.id || ''
})
const item = computed(() => (resources[type.value] || []).find((entry) => entry.id === id.value) || (resources[type.value] || [])[0] || {})
const title = computed(() => ({ grids: '网格详情', materials: '物资详情', stores: '物资库详情', plans: '应急预案详情' }[type.value] || '资源详情'))
const rows = computed(() => {
  const entry = item.value
  if (type.value === 'materials') return [
    { label: '物资名称', value: entry.name },
    { label: '所在物资库', value: entry.store },
    { label: '现有数量', value: entry.stock },
    { label: '预警数量', value: entry.warn }
  ]
  if (type.value === 'stores') return [
    { label: '物资库名称', value: entry.name },
    { label: '位置', value: entry.location },
    { label: '负责人', value: entry.owner },
    { label: '联系电话', value: '18561695555' }
  ]
  if (type.value === 'plans') return [
    { label: '演练名称', value: entry.name },
    { label: '演练日期', value: entry.date },
    { label: '事件类型', value: entry.type },
    { label: '事件等级', value: entry.tag }
  ]
  return [
    { label: '网格名称', value: entry.name },
    { label: '网格级别', value: entry.tag },
    { label: '房间总数', value: entry.rooms },
    { label: '风险点数量', value: entry.risks },
    { label: '责任人', value: entry.owner }
  ]
})
</script>

<style scoped>
.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18rpx;
  padding: 28rpx;
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
}

.desc {
  color: #31445a;
  line-height: 1.7;
}

.mt {
  margin-top: 22rpx;
}
</style>
