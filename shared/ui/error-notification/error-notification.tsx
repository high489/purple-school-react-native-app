import styles from './error-notification.styles'

import { FC, useEffect, useState } from 'react'
import { Animated, Platform, View } from 'react-native'
import { StyledText } from '../styled-text'

type ErrorNotificationProps = {
  error?: string
}

const ErrorNotification: FC<ErrorNotificationProps> = ({ error }) => {
  const [ isShown, setIsShown ] = useState<boolean>(false)
  const animatedValue = new Animated.Value(-100)

  const onAppear = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: Platform.OS !== 'web',
    }).start()
  }

  useEffect(() => {
    if (!error) return

    setIsShown(true)

    const timerId = setTimeout(() => setIsShown(false), 3000)
    return () => clearTimeout(timerId)
  }, [error])

  if (!isShown) return null

  return (
    <Animated.View 
      style={{
        ...styles.errorNotificationContainer,
        transform: [{ translateY: animatedValue }],
      }}
      onLayout={onAppear}
    >
      <StyledText>{error}</StyledText>
    </Animated.View>
  )
}

export { ErrorNotification }