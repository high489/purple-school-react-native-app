import { useRef, useCallback } from 'react'
import { Animated } from 'react-native'
import { Colors } from '@shared/theme'

type UseStyledButtonPressAnimationOptions = {
  duration?: number
}

export const useStyledButtonPressAnimation = ({
  duration = 100,
}: UseStyledButtonPressAnimationOptions = {}) => {
  const animatedValue = useRef(new Animated.Value(1)).current

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.primaryHover, Colors.primary],
  })

  const onPressIn = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration,
      useNativeDriver: false,
    }).start()
  }, [animatedValue, duration])

  const onPressOut = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start()
  }, [animatedValue, duration])

  return {
    backgroundColor,
    onPressIn,
    onPressOut,
  }
}
