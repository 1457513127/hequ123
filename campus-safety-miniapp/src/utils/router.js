export function go(url) {
  uni.navigateTo({ url })
}

export function switchTab(url) {
  uni.reLaunch({ url })
}

export function back() {
  const pages = getCurrentPages()
  if (pages.length > 1) {
    uni.navigateBack()
  } else {
    uni.switchTab({ url: '/pages/workbench/index' })
  }
}
