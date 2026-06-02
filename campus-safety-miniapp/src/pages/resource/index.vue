<template>
  <view class="page">
    <AppNavBar title="安保资源" back />
    <view class="overview card">
      <button v-for="item in entries" :key="item.type" class="entry" @click="go('/pages/resource/list?type=' + item.type)">
        <view class="entry-icon" :style="{ color: item.color, background: item.color + '18' }">{{ item.icon }}</view>
        <view>
          <view class="entry-title">{{ item.title }}</view>
          <view class="muted">{{ item.desc }}</view>
        </view>
      </button>
    </view>
    <DataSection title="物资预警" class="mt">
      <InfoCard v-for="item in warnings" :key="item.id" :title="item.name" :tag="item.tag" @tap="go('/pages/resource/detail?type=materials&id=' + item.id)">
        <view>{{ item.store }}</view>
        <view>现有数量：{{ item.stock }}　预警数量：{{ item.warn }}</view>
      </InfoCard>
    </DataSection>
  </view>
</template>

<script setup>
import AppNavBar from '../../components/AppNavBar.vue'
import DataSection from '../../components/DataSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import { resources } from '../../mock/index'
import { go } from '../../utils/router'

const entries = [
  { title: '安保组织', desc: '人员、网格、职责', type: 'grids', icon: '☷', color: '#1e8ee8' },
  { title: '物资库', desc: '库房与预警状态', type: 'stores', icon: '▣', color: '#18b7b2' },
  { title: '物资', desc: '库存与预警数量', type: 'materials', icon: '▤', color: '#e6a641' },
  { title: '应急预案', desc: '预案与演练记录', type: 'plans', icon: '⚑', color: '#e85252' }
]
const warnings = resources.materials.filter((item) => item.tag === '有预警')
</script>

<style scoped>
.overview {
  padding: 12rpx;
}

.entry {
  width: 100%;
  min-height: 112rpx;
  display: flex;
  align-items: center;
  gap: 18rpx;
  padding: 18rpx;
  border-bottom: 1rpx solid #edf3f7;
  text-align: left;
}

.entry:last-child {
  border-bottom: 0;
}

.entry-icon {
  width: 72rpx;
  height: 72rpx;
  border-radius: 14rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34rpx;
  font-weight: 900;
}

.entry-title {
  margin-bottom: 6rpx;
  color: #192433;
  font-size: 30rpx;
  font-weight: 800;
}

.mt {
  margin-top: 22rpx;
}
</style>
