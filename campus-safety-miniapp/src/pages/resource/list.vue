<template>
  <view class="page">
    <AppNavBar :title="title" back />
    <SearchBar v-model="keyword" :placeholder="'输入' + title + '名称'" />
    <view class="list">
      <InfoCard v-for="item in filtered" :key="item.id" :title="item.name" :tag="item.tag" @tap="go('/pages/resource/detail?type=' + type + '&id=' + item.id)">
        <view v-if="type === 'grids'">房间：{{ item.rooms }}　风险点：{{ item.risks }}　责任人：{{ item.owner }}</view>
        <view v-else-if="type === 'materials'">{{ item.store }}　现有：{{ item.stock }}　预警：{{ item.warn }}</view>
        <view v-else-if="type === 'stores'">位置：{{ item.location }}　负责人：{{ item.owner }}</view>
        <view v-else>日期：{{ item.date }}　事件类型：{{ item.type }}</view>
      </InfoCard>
      <EmptyState v-if="!filtered.length" />
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import AppNavBar from '../../components/AppNavBar.vue'
import SearchBar from '../../components/SearchBar.vue'
import InfoCard from '../../components/InfoCard.vue'
import EmptyState from '../../components/EmptyState.vue'
import { resources } from '../../mock/index'
import { go } from '../../utils/router'

const type = ref('grids')
const keyword = ref('')
onLoad((query) => {
  type.value = query.type || 'grids'
})
const titles = { grids: '网格列表', materials: '物资列表', stores: '物资库列表', plans: '应急预案列表' }
const title = computed(() => titles[type.value] || '资源列表')
const list = computed(() => resources[type.value] || [])
const filtered = computed(() => list.value.filter((item) => !keyword.value || `${item.name}${item.tag}`.includes(keyword.value)))
</script>

<style scoped>
.list {
  margin-top: 22rpx;
}
</style>
