import { useCallback, useEffect, useRef, useState } from 'react'

export function useCarousel(itemsLength, breakpoints) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const gap = 12

  const getVisibleCount = useCallback(() => {
    const w = containerRef.current?.offsetWidth ?? 0
    if (breakpoints) {
      for (const bp of breakpoints) {
        if (w >= bp.min) return bp.count
      }
    }
    return 2
  }, [breakpoints])

  const [visible, setVisible] = useState(() => getVisibleCount())
  const maxIndex = Math.max(0, itemsLength - visible)

  useEffect(() => {
    const onResize = () => {
      setVisible(getVisibleCount())
      setIndex((i) => Math.min(i, Math.max(0, itemsLength - getVisibleCount())))
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [getVisibleCount, itemsLength])

  useEffect(() => {
    const item = trackRef.current?.children[0]
    if (!item) return
    const itemW = item.getBoundingClientRect().width + gap
    trackRef.current.style.transform = `translateX(-${index * itemW}px)`
  }, [index, visible])

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), [])
  const next = useCallback(
    () => setIndex((i) => Math.min(Math.max(0, itemsLength - visible), i + 1)),
    [itemsLength, visible],
  )

  // touch / swipe support
  const startX = useRef(null)
  const touchHandlers = {
    onTouchStart: (e) => {
      startX.current = e.touches[0].clientX
    },
    onTouchEnd: (e) => {
      if (startX.current === null) return
      const diff = startX.current - e.changedTouches[0].clientX
      startX.current = null
      if (Math.abs(diff) > 40) {
        if (diff > 0) next()
        else prev()
      }
    },
  }

  return { containerRef, trackRef, index, visible, prev, next, maxIndex, touchHandlers }
}
