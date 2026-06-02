<template>
  <view class="page">
    <AppNavBar title="隐患检查" back />
    <view class="grid">
      <button v-for="item in entries" :key="item.type" class="entry card" @click="go('/pages/hazard/list?type=' + item.type)">
        <view class="count">{{ item.count }}</view>
        <view class="entry-title">{{ item.title }}</view>
        <view class="muted">{{ item.desc }}</view>
      </button>
    </view>
  </view>
</template>

<script setup>
import AppNavBar from '../../components/AppNavBar.vue'
import { go } from '../../utils/router'

const entries = [
  { title: '检查计划', desc: '常规/专项计划', count: 2, type: 'plans' },
  { title: '检查记录', desc: '待检与已检记录', count: 20, type: 'records' },
  { title: '复查记录', desc: '复查预警与结果', count: 20, type: 'reviews' },
  { title: '督办记录', desc: '二级/三级督办', count: 20, type: 'supervises' }
]
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18rpx;
}

.entry {
  min-height: 178rpx;
  padding: 24rpx;
  text-align: left;
  background: linear-gradient(145deg, #fff, #eef8f8);
}

.count {
  color: #1e8ee8;
  font-size: 48rpx;
  font-weight: 900;
}

.entry-title {
  margin-top: 10rpx;
  color: #17324d;
  font-size: 30rpx;
  font-weight: 900;
}
</style>
