import { useRef } from 'react'
import { Animated, Platform, PanResponder } from 'react-native'

type AppearAnimationOptions = {
  visibleDuration?: number
  animationDuration?: number
  onHidden?: () => void
  swipeDismissDistance?: number
}

export const useErrorNotificationAppearAnimation = ({
  visibleDuration = 3000,
  animationDuration = 300,
  swipeDismissDistance = -30,
  onHidden,
}: AppearAnimationOptions = {}) => {
  const translateY = useRef(new Animated.Value(-100)).current
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isHiding = useRef(false)

  const clearTimer = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current)
      hideTimeout.current = null
    }
  }

  const hide = (duration = animationDuration) => {
    if (isHiding.current) return
    isHiding.current = true
  
    clearTimer()
  
    Animated.timing(translateY, {
      toValue: -100,
      duration,
      useNativeDriver: Platform.OS !== 'web',
    }).start(() => {
      onHidden?.()
    })
  }

  const show = () => {
    isHiding.current = false

    Animated.timing(translateY, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: Platform.OS !== 'web',
    }).start()

    clearTimer()
    hideTimeout.current = setTimeout(hide, visibleDuration)
  }

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dy) > 5,

      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < swipeDismissDistance) {
          const swipeVelocity = Math.abs(gesture.vy)
          
          const duration =
            swipeVelocity > 1
              ? Math.max(100, animationDuration * 0.5)
              : animationDuration

          hide(duration)
        }
      },
    })
  ).current

  return {
    translateY,
    show,
    hide,
    panHandlers: panResponder.panHandlers,
  }
}
