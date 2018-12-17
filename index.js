const ORIENTATION_LANDSCAPE = 'landscape'
const ORIENTATION_PORTRAIT = 'portrait'

const debouce = function(func, delay) {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      func.apply(context,args)
    }, delay)
  }
}

class Orientation {
  constructor () {
    this.type = null

    this.bind()
  }

  get isLandscape () {
    return this.type === ORIENTATION_LANDSCAPE
  }

  get isPortrait () {
    return this.type === ORIENTATION_PORTRAIT
  }

  bind () {
    const initResizeEvent = debouce(() => {
      this.get()
    }, 300)
    window.addEventListener('resize', initResizeEvent)
  }

  get () {
    const data = localStorage.getItem('web-orientation')
    const { clientWidth, clientHeight } = document.documentElement
    let screenWidth = 0
    let screenHeight = 0

    if (!data) {
      const { width, height } = window.screen
      screenWidth = Math.min(width, height)
      screenHeight = Math.max(width, height)
      localStorage.setItem('web-orientation', `${screenWidth},${screenHeight}`)
    } else {
      ([screenWidth, screenHeight] = data.split(','));
    }

    this.type = clientWidth === screenWidth ? ORIENTATION_LANDSCAPE : ORIENTATION_PORTRAIT
    return this.type
  }
}

export default new Orientation()