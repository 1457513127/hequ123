<template>
  <view class="page">
    <AppNavBar title="流转日志" back />
    <view v-for="item in logs" :key="item.title" class="log card">
      <view class="between">
        <view class="section-title">{{ item.title }}</view>
        <StatusTag :text="item.status" />
      </view>
      <view class="line">阅读时间：{{ item.read }}</view>
      <view class="line">完成时间：{{ item.done }}</view>
      <view class="line">步骤用时：{{ item.cost }}</view>
      <view class="desc">{{ item.desc }}</view>
    </view>
  </view>
</template>

<script setup>
import AppNavBar from '../../components/AppNavBar.vue'
import StatusTag from '../../components/StatusTag.vue'

const logs = [
  { title: '当前处理机构：保卫科', status: '已办结', read: '2026-02-22 14:46:00', done: '2026-02-23 14:46:00', cost: '24小时0分0秒', desc: '已办结，完成回访。' },
  { title: '上一处理机构：化工学院', status: '处理中', read: '2026-02-22 14:46:00', done: '2026-02-23 14:46:00', cost: '24小时0分0秒', desc: '转保卫科处理。' }
]
</script>

<style scoped>
.log {
  padding: 26rpx;
  margin-bottom: 20rpx;
}

.line {
  margin-top: 16rpx;
  color: #536577;
  font-size: 26rpx;
}

.desc {
  margin-top: 16rpx;
  padding: 18rpx;
  border-radius: 12rpx;
  background: #f2f8fb;
  color: #31445a;
  line-height: 1.6;
}
</style>
