<template>
  <view class="page">
    <AppNavBar title="事件办结" back />
    <view class="form card">
      <view class="field">
        <text>处理结果</text>
        <input v-model="form.result" placeholder="请选择处理结果" />
      </view>
      <view class="field">
        <text>处理结果描述</text>
        <textarea v-model="form.desc" placeholder="请输入处理结果描述信息" />
      </view>
      <view class="field">
        <text>结果图片</text>
        <UploadBlock label="结果图片" />
      </view>
      <button class="primary-btn" @click="submit">确定</button>
    </view>
  </view>
</template>

<script setup>
import { reactive } from 'vue'
import AppNavBar from '../../components/AppNavBar.vue'
import UploadBlock from '../../components/UploadBlock.vue'

const form = reactive({ result: '', desc: '' })
function submit() {
  if (!form.result || !form.desc) {
    uni.showToast({ title: '请完整填写', icon: 'none' })
    return
  }
  uni.showToast({ title: '已办结', icon: 'success' })
}
</script>

<style scoped>
.form {
  padding: 28rpx;
}

.field {
  margin-bottom: 26rpx;
}

.field text {
  display: block;
  margin-bottom: 12rpx;
  color: #31445a;
  font-weight: 800;
}

input,
textarea {
  width: 100%;
  min-height: 76rpx;
  padding: 18rpx;
  border-radius: 12rpx;
  background: #f2f7fa;
  color: #192433;
}

textarea {
  height: 170rpx;
}
</style>
