<template>
  <view class="page">
    <AppNavBar title="事件流转" back />
    <view class="form card">
      <view class="field">
        <text>流转描述</text>
        <textarea v-model="form.desc" placeholder="请输入流转描述" />
      </view>
      <view class="field">
        <text>承接部门</text>
        <input v-model="form.dept" placeholder="请选择承接部门" />
      </view>
      <view class="field">
        <text>承接人</text>
        <input v-model="form.owner" placeholder="请选择承接人" />
      </view>
      <button class="primary-btn" @click="submit">确定</button>
    </view>
  </view>
</template>

<script setup>
import { reactive } from 'vue'
import AppNavBar from '../../components/AppNavBar.vue'

const form = reactive({ desc: '', dept: '', owner: '' })
function submit() {
  if (!form.desc || !form.dept || !form.owner) {
    uni.showToast({ title: '请完整填写', icon: 'none' })
    return
  }
  uni.showToast({ title: '已提交', icon: 'success' })
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
