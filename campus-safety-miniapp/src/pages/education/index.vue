<template>
  <view class="page">
    <AppNavBar title="学习培训" back />
    <DataSection title="知识库">
      <view v-for="item in data.knowledge" :key="item" class="list-row">
        <text>{{ item }}</text>
        <text class="date">2025-08-21</text>
      </view>
    </DataSection>
    <DataSection title="法规库" class="mt">
      <view v-for="item in data.laws" :key="item" class="list-row">
        <text>{{ item }}</text>
        <text class="date">2025-08-21</text>
      </view>
    </DataSection>
    <DataSection title="案例库" class="mt">
      <view v-for="item in data.cases" :key="item" class="list-row">
        <text>{{ item }}</text>
        <text class="date">2025-08-21</text>
      </view>
    </DataSection>
  </view>
</template>

<script setup>
import AppNavBar from '../../components/AppNavBar.vue'
import DataSection from '../../components/DataSection.vue'
import { education as data } from '../../mock/index'
</script>

<style scoped>
.mt {
  margin-top: 22rpx;
}

.list-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48rpx;
  gap: 20rpx;
  color: #31445a;
  font-size: 26rpx;
}

.list-row text:first-child {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.date {
  color: #6e7d8f;
  font-size: 24rpx;
}
</style>
