<template>
  <view class="page">
    <AppNavBar title="安全随手拍" back />
    <SearchBar v-model="keyword" placeholder="输入事件名称/编号" />
    <view class="tabs">
      <button v-for="item in tabs" :key="item" class="tab" :class="{ active: active === item }" @click="active = item">{{ item }}</button>
    </view>
    <InfoCard v-for="item in filtered" :key="item.id" :title="'事件编号：' + item.code" :tag="item.status" @tap="go('/pages/event/detail?id=' + item.id)">
      <view>事件类型：{{ item.type }}　来源：{{ item.source }}</view>
      <view>上报人：{{ item.reporter }}</view>
      <view>上报时间：{{ item.time }}</view>
      <view>上报位置：{{ item.location }}</view>
    </InfoCard>
    <EmptyState v-if="!filtered.length" />
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppNavBar from '../../components/AppNavBar.vue'
import SearchBar from '../../components/SearchBar.vue'
import InfoCard from '../../components/InfoCard.vue'
import EmptyState from '../../components/EmptyState.vue'
import { events } from '../../mock/index'
import { go } from '../../utils/router'

const keyword = ref('')
const active = ref('事件待办')
const tabs = ['事件待办', '事件已办', '全部事件']
const filtered = computed(() => events.filter((item) => {
  const matchTab = active.value === '全部事件' || (active.value === '事件待办' ? item.status !== '已办结' : item.status === '已办结')
  const matchKeyword = !keyword.value || `${item.code}${item.type}${item.location}`.includes(keyword.value)
  return matchTab && matchKeyword
}))
</script>

<style scoped>
.tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rpx;
  margin: 22rpx 0;
}

.tab {
  height: 64rpx;
  border-radius: 12rpx;
  background: #eaf2f7;
  color: #536577;
  font-size: 26rpx;
  font-weight: 700;
}

.tab.active {
  background: #1e8ee8;
  color: #fff;
}
</style>
