<template>
  <view class="page">
    <AppNavBar title="安保对象" back />
    <view v-for="group in data.groups" :key="group.title" class="group card">
      <view class="section-title">{{ group.title }}</view>
      <view class="tiles">
        <button v-for="item in group.items" :key="item.label" class="tile" @click="go('/pages/object/list?type=' + item.type)">
          <text>{{ item.label }}</text>
          <view><text class="value">{{ item.value }}</text><text class="unit">{{ item.unit }}</text></view>
        </button>
      </view>
    </view>
  </view>
</template>

<script setup>
import AppNavBar from '../../components/AppNavBar.vue'
import { objectHome as data } from '../../mock/index'
import { go } from '../../utils/router'
</script>

<style scoped>
.group {
  padding: 26rpx;
  margin-bottom: 22rpx;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18rpx;
  margin-top: 22rpx;
}

.tile {
  min-height: 128rpx;
  padding: 18rpx;
  border-radius: 14rpx;
  background: #f4fafb;
  color: #31445a;
  text-align: left;
}

.value {
  margin-top: 18rpx;
  display: inline-block;
  color: #1e8ee8;
  font-size: 40rpx;
  font-weight: 900;
}

.unit {
  margin-left: 6rpx;
  color: #6e7d8f;
  font-size: 24rpx;
}
</style>
