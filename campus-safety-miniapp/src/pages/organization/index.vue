<template>
  <view class="page with-tabbar">
    <AppNavBar title="组织" />
    <DataSection title="安保组织">
      <InfoCard v-for="item in grids" :key="item.id" :title="item.name" :tag="item.tag" @tap="go('/pages/resource/detail?type=grids&id=' + item.id)">
        <view>房间总数：{{ item.rooms }}　风险点：{{ item.risks }}</view>
        <view>未整改隐患：{{ item.hazards }}　责任人：{{ item.owner }}</view>
      </InfoCard>
    </DataSection>
    <AppTabBar active="组织" @select="handleTab" />
  </view>
</template>

<script setup>
import AppNavBar from '../../components/AppNavBar.vue'
import AppTabBar from '../../components/AppTabBar.vue'
import DataSection from '../../components/DataSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import { resources } from '../../mock/index'
import { go, switchTab } from '../../utils/router'

const grids = resources.grids

function handleTab(item) {
  const map = { 工作台: '/pages/workbench/index', 待办: '/pages/todo/index', 组织: '/pages/organization/index', 我的: '/pages/profile/index' }
  switchTab(map[item.text])
}
</script>
