export async function requestMock(loader) {
  await new Promise((resolve) => setTimeout(resolve, 120))
  return typeof loader === 'function' ? loader() : loader
}

export function createListState(items = []) {
  return {
    loading: false,
    error: '',
    items
  }
}
