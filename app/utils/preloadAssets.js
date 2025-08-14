function preloadAsset(src) {
  return new Promise((resolve) => {
    if (/\.(png|jpe?g|gif|webp|svg|mp3|jpg|woff2)$/.test(src)) {
      const img = new Image()
      img.src = src
      img.onload = resolve
      img.onerror = resolve
    } else {
      fetch(src).finally(resolve)
    }
  })
}

export default preloadAsset