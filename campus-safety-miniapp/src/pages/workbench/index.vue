<template>
  <view class="page with-tabbar">
    <AppNavBar title="校园安全">
      <template #extra>
        <button class="message" @click="go('/pages/todo/index')">消息<text>{{ data.user.unread }}</text></button>
      </template>
    </AppNavBar>

    <view class="hero card">
      <view class="avatar">李</view>
      <view class="profile">
        <view class="name">{{ data.user.name }}</view>
        <view class="muted">{{ data.user.org }} · {{ data.user.role }}</view>
      </view>
      <SearchBar v-model="keyword" class="hero-search" placeholder="全局搜索" />
    </view>

    <ModuleGrid :items="data.modules" @select="openModule" />

    <DataSection title="通知公告" more @more="go('/pages/education/index')">
      <view v-for="item in data.notices" :key="item.title" class="list-row">
        <text>{{ item.title }}</text>
        <text class="date">{{ item.date }}</text>
      </view>
    </DataSection>

    <DataSection title="安全宣传" more @more="go('/pages/education/index')" class="mt">
      <view v-for="item in data.education" :key="item.title" class="list-row">
        <text>{{ item.title }}</text>
        <text class="date">{{ item.date }}</text>
      </view>
    </DataSection>

    <AppTabBar active="工作台" @select="handleTab" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import AppNavBar from '../../components/AppNavBar.vue'
import AppTabBar from '../../components/AppTabBar.vue'
import SearchBar from '../../components/SearchBar.vue'
import ModuleGrid from '../../components/ModuleGrid.vue'
import DataSection from '../../components/DataSection.vue'
import { workbench as data } from '../../mock/index'
import { go, switchTab } from '../../utils/router'

const keyword = ref('')

function openModule(item) {
  go(item.url)
}

function handleTab(item) {
  const map = {
    工作台: '/pages/workbench/index',
    待办: '/pages/todo/index',
    组织: '/pages/organization/index',
    我的: '/pages/profile/index'
  }
  switchTab(map[item.text])
}
</script>

<style scoped>
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 74rpx 1fr;
  gap: 18rpx;
  padding: 24rpx;
  margin-top: 8rpx;
  background: linear-gradient(135deg, rgba(30, 142, 232, 0.12), #fff 58%);
}

.avatar {
  width: 74rpx;
  height: 74rpx;
  border-radius: 14rpx;
  background: #dcefff;
  color: #1e8ee8;
  font-size: 34rpx;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  font-size: 32rpx;
  font-weight: 900;
  color: #17324d;
}

.hero-search {
  grid-column: 1 / 3;
  margin-top: 14rpx;
}

.message {
  position: relative;
  color: #17324d;
  font-size: 24rpx;
}

.message text {
  position: absolute;
  right: -16rpx;
  top: -12rpx;
  min-width: 26rpx;
  height: 26rpx;
  padding: 0 5rpx;
  border-radius: 999rpx;
  background: #e85252;
  color: #fff;
  font-size: 18rpx;
  line-height: 26rpx;
}

.list-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 46rpx;
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

.mt {
  margin-top: 22rpx;
}
</style>
