<template>
  <view class="page with-tabbar">
    <AppNavBar title="我的" />
    <view class="profile card">
      <view class="avatar">李</view>
      <view>
        <view class="name">李亮</view>
        <view class="muted">计算机科学系 · 网格安全员</view>
      </view>
    </view>
    <DataSection title="工作信息">
      <view class="line"><text>所属二级网格</text><text>计算机学院</text></view>
      <view class="line"><text>所属三级网格</text><text>计算机科学系</text></view>
      <view class="line"><text>联系电话</text><text>18561695555</text></view>
    </DataSection>
    <AppTabBar active="我的" @select="handleTab" />
  </view>
</template>

<script setup>
import AppNavBar from '../../components/AppNavBar.vue'
import AppTabBar from '../../components/AppTabBar.vue'
import DataSection from '../../components/DataSection.vue'
import { switchTab } from '../../utils/router'

function handleTab(item) {
  const map = { 工作台: '/pages/workbench/index', 待办: '/pages/todo/index', 组织: '/pages/organization/index', 我的: '/pages/profile/index' }
  switchTab(map[item.text])
}
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 22rpx;
  padding: 30rpx;
  margin-bottom: 22rpx;
}

.avatar {
  width: 92rpx;
  height: 92rpx;
  border-radius: 18rpx;
  background: #dcefff;
  color: #1e8ee8;
  font-size: 42rpx;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  font-size: 36rpx;
  font-weight: 900;
  color: #17324d;
}

.line {
  min-height: 62rpx;
  display: flex;
  justify-content: space-between;
  gap: 24rpx;
  color: #31445a;
  font-size: 27rpx;
}
</style>
