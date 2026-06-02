<template>
  <view class="page">
    <AppNavBar :title="title" back />
    <SearchBar v-model="keyword" :placeholder="'输入' + title + '名称'" filter @filter="showFilter = true" />
    <view class="list">
      <InfoCard v-for="item in filtered" :key="item.id" :title="item.name" :tag="item.tag" @tap="go('/pages/object/detail?type=' + type + '&id=' + item.id)">
        <view v-if="type === 'buildings'">校区：{{ item.campus }}　风险点：{{ item.riskPoints }}　未整改隐患：{{ item.hazards }}</view>
        <view v-else-if="type === 'people'">证件号：{{ item.idNo }}　类别：{{ item.category }}</view>
        <view v-else>安全负责人：{{ item.owner }}</view>
        <view v-if="item.grid2">网格：{{ item.grid2 }} / {{ item.grid3 }}</view>
        <view v-if="item.grid">网格：{{ item.grid }}</view>
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
import { objectLists } from '../../mock/index'
import { go } from '../../utils/router'

const type = ref('buildings')
const keyword = ref('')
const showFilter = ref(false)
const filters = ref({})

onLoad((query) => {
  type.value = query.type || 'buildings'
})

const titles = { buildings: '建筑物列表', rooms: '房间列表', risks: '风险点列表', people: '重点人员列表' }
const title = computed(() => titles[type.value] || '对象列表')
const list = computed(() => objectLists[type.value] || [])
const filterGroups = [
  { key: 'campus', title: '校区', options: ['全部', '唐岛湾校区', '古镇口校区'] },
  { key: 'risk', title: '风险等级', options: ['全部', '重大', '较大', '一般', '低'] }
]

const filtered = computed(() => list.value.filter((item) => {
  const text = `${item.name}${item.tag}${item.owner || ''}${item.campus || ''}`
  const matchKeyword = !keyword.value || text.includes(keyword.value)
  const matchRisk = !filters.value.risk || filters.value.risk === '全部' || item.tag === filters.value.risk
  const matchCampus = !filters.value.campus || filters.value.campus === '全部' || item.campus === filters.value.campus
  return matchKeyword && matchRisk && matchCampus
}))
</script>

<style scoped>
.list {
  margin-top: 22rpx;
}
</style>
