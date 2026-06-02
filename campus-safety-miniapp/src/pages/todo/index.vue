<template>
  <view class="page with-tabbar">
    <AppNavBar title="任务列表" />
    <view class="stats card">
      <button v-for="item in stats" :key="item.label" class="stat" :class="{ active: status === item.label }" @click="status = item.label">
        <text class="num">{{ item.count }}</text>
        <text>{{ item.label }}</text>
      </button>
    </view>
    <view class="tabs">
      <button v-for="item in types" :key="item" class="tab" :class="{ active: type === item }" @click="type = item">{{ item }}</button>
    </view>
    <SearchBar v-model="keyword" placeholder="输入任务名称/场所" />
    <view class="list">
      <InfoCard v-for="item in filtered" :key="item.id" :title="item.title" :subtitle="item.type" :tag="item.status" @tap="openTask(item)">
        <view>下发单位：{{ item.unit }}</view>
        <view>截止日期：{{ item.due }}</view>
        <view>检查场所：{{ item.place }}</view>
      </InfoCard>
      <EmptyState v-if="!filtered.length" text="暂无匹配任务" />
    </view>
    <AppTabBar active="待办" @select="handleTab" />
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppNavBar from '../../components/AppNavBar.vue'
import AppTabBar from '../../components/AppTabBar.vue'
import SearchBar from '../../components/SearchBar.vue'
import InfoCard from '../../components/InfoCard.vue'
import EmptyState from '../../components/EmptyState.vue'
import { todoTasks } from '../../mock/index'
import { go, switchTab } from '../../utils/router'

const keyword = ref('')
const status = ref('全部')
const type = ref('隐患检查')
const types = ['隐患检查', '事件处置']
const stats = [
  { label: '全部', count: 100 },
  { label: '未处理', count: 10 },
  { label: '处理中', count: 10 },
  { label: '已处理', count: 80 },
  { label: '逾期', count: 20 }
]

const filtered = computed(() => todoTasks.filter((item) => {
  const matchStatus = status.value === '全部' || item.status === status.value
  const matchType = type.value === '隐患检查' ? item.type !== '事件处置' : item.type === '事件处置'
  const matchKeyword = !keyword.value || `${item.title}${item.place}`.includes(keyword.value)
  return matchStatus && matchType && matchKeyword
}))

function openTask(item) {
  if (item.type === '事件处置') go('/pages/event/detail?id=e1')
  else go('/pages/hazard/detail?type=records&id=hr1')
}

function handleTab(item) {
  const map = { 工作台: '/pages/workbench/index', 待办: '/pages/todo/index', 组织: '/pages/organization/index', 我的: '/pages/profile/index' }
  switchTab(map[item.text])
}
</script>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 20rpx 8rpx;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
  color: #6e7d8f;
  font-size: 24rpx;
}

.stat.active {
  color: #1e8ee8;
  font-weight: 800;
}

.num {
  font-size: 34rpx;
  font-weight: 900;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
  margin: 22rpx 0;
}

.tab {
  height: 68rpx;
  border-radius: 12rpx;
  background: #eaf2f7;
  color: #536577;
  font-weight: 700;
}

.tab.active {
  background: #1e8ee8;
  color: #fff;
}

.list {
  margin-top: 22rpx;
}
</style>
