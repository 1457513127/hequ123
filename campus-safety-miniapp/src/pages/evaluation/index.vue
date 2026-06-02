<template>
  <view class="page">
    <AppNavBar title="绩效考核" back />
    <view class="head card">
      <view>
        <view class="section-title">检查完成率</view>
        <view class="muted">全年 · 单位维度</view>
      </view>
      <view class="score">72%</view>
    </view>
    <DataSection title="单位完成率">
      <view v-for="item in data" :key="item.unit" class="bar-row">
        <text class="unit">{{ item.unit }}</text>
        <view class="bar">
          <view class="fill" :style="{ width: item.rate + '%' }" />
        </view>
        <text class="rate">{{ item.rate }}%</text>
      </view>
    </DataSection>
  </view>
</template>

<script setup>
import AppNavBar from '../../components/AppNavBar.vue'
import DataSection from '../../components/DataSection.vue'
import { evaluation as data } from '../../mock/index'
</script>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx;
  margin-bottom: 22rpx;
}

.score {
  color: #1e8ee8;
  font-size: 54rpx;
  font-weight: 900;
}

.bar-row {
  display: grid;
  grid-template-columns: 160rpx 1fr 76rpx;
  gap: 16rpx;
  align-items: center;
  min-height: 62rpx;
}

.unit {
  color: #31445a;
  font-size: 26rpx;
}

.bar {
  height: 18rpx;
  border-radius: 999rpx;
  background: #e8f0f5;
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 999rpx;
  background: linear-gradient(90deg, #18b7b2, #1e8ee8);
}

.rate {
  color: #17324d;
  font-weight: 800;
  text-align: right;
}
</style>
