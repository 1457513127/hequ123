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
    <DataSection title="安保信息" class="mt">
      <view class="metric">
        <view><text class="num">{{ type === 'people' ? '2' : '12' }}</text><text>检查记录</text></view>
        <view><text class="num warn">{{ type === 'people' ? '1' : '3' }}</text><text>未整改隐患</text></view>
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
import { objectLists } from '../../mock/index'

const type = ref('buildings')
const id = ref('')

onLoad((query) => {
  type.value = query.type || 'buildings'
  id.value = query.id || ''
})

const item = computed(() => (objectLists[type.value] || []).find((entry) => entry.id === id.value) || (objectLists[type.value] || [])[0] || {})
const title = computed(() => ({ buildings: '建筑物详情', rooms: '房间详情', risks: '风险点详情', people: '重点人员详情' }[type.value] || '对象详情'))
const rows = computed(() => {
  if (type.value === 'people') {
    return [
      { label: '姓名', value: item.value.name },
      { label: '身份信息', value: item.value.idNo },
      { label: '人员分类', value: item.value.category },
      { label: '管控状态', value: item.value.status },
      { label: '所属网格', value: item.value.grid }
    ]
  }
  return [
    { label: '名称', value: item.value.name },
    { label: '类型/等级', value: item.value.tag },
    { label: '校区/网格', value: item.value.campus || item.value.grid2 },
    { label: '负责人', value: item.value.owner || '李亮' },
    { label: '联系电话', value: '18561695555' }
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

.metric {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18rpx;
}

.metric view {
  padding: 22rpx;
  border-radius: 14rpx;
  background: #f2f8fb;
  color: #536577;
}

.num {
  margin-right: 8rpx;
  color: #1e8ee8;
  font-size: 42rpx;
  font-weight: 900;
}

.warn {
  color: #e85252;
}

.mt {
  margin-top: 22rpx;
}
</style>
