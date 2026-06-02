<template>
  <view class="page">
    <AppNavBar :title="title" back />
    <SearchBar v-model="keyword" placeholder="输入场所名称/记录编号" filter @filter="showFilter = true" />
    <view class="list">
      <InfoCard v-for="item in filtered" :key="item.id" :title="item.name" :tag="item.tag" @tap="go('/pages/hazard/detail?type=' + type + '&id=' + item.id)">
        <view v-if="type === 'plans'">下发单位：{{ item.unit }}　完成率：{{ item.rate }}　频次：{{ item.freq }}</view>
        <view v-else-if="type === 'records'">记录编号：{{ item.code }}　检查时间：{{ item.time }}</view>
        <view v-else-if="type === 'reviews'">记录编号：{{ item.code }}　待复查时间：{{ item.due }}</view>
        <view v-else>记录编号：{{ item.code }}　督办截止：{{ item.due }}</view>
        <view v-if="item.major !== undefined">遗留隐患：{{ item.left }}　重大隐患：{{ item.major }}</view>
        <view v-if="item.owner">督办人：{{ item.owner }}</view>
      </InfoCard>
      <EmptyState v-if="!filtered.length" />
    </view>
    <FilterPanel v-model="filters" :show="showFilter" :groups="filterGroups" @close="showFilter = false" @reset="filters = {}" />
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import AppNavBar from '../../components/AppNavBar.vue'
import SearchBar from '../../components/SearchBar.vue'
import InfoCard from '../../components/InfoCard.vue'
import EmptyState from '../../components/EmptyState.vue'
import FilterPanel from '../../components/FilterPanel.vue'
import { hazard } from '../../mock/index'
import { go } from '../../utils/router'

const type = ref('plans')
const keyword = ref('')
const showFilter = ref(false)
const filters = ref({})
onLoad((query) => {
  type.value = query.type || 'plans'
})
const titles = { plans: '检查计划列表', records: '检查记录列表', reviews: '复查记录列表', supervises: '督办记录列表' }
const title = computed(() => titles[type.value] || '隐患列表')
const list = computed(() => hazard[type.value] || [])
const filterGroups = [
  { key: 'status', title: '执行状态', options: ['全部', '未开始', '进行中', '通过', '转入复查', '督办中'] },
  { key: 'major', title: '是否存在重大隐患', options: ['全部', '是', '否'] }
]
const filtered = computed(() => list.value.filter((item) => {
  const matchKeyword = !keyword.value || `${item.name}${item.code || ''}`.includes(keyword.value)
  const matchStatus = !filters.value.status || filters.value.status === '全部' || item.tag === filters.value.status
  const matchMajor = !filters.value.major || filters.value.major === '全部' || (filters.value.major === '是' ? item.major > 0 : item.major === 0)
  return matchKeyword && matchStatus && matchMajor
}))
</script>

<style scoped>
.list {
  margin-top: 22rpx;
}
</style>
