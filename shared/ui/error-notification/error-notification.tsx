import styles from './error-notification.styles'

import { FC, useEffect, useState } from 'react'
import { Animated } from 'react-native'

import { StyledText } from '../styled-text'
import { useErrorNotificationAppearAnimation } from './error-notification.animations'

type ErrorNotificationProps = {
  error?: string
}

const ErrorNotification: FC<ErrorNotificationProps> = ({ error }) => {
  const [isShown, setIsShown] = useState(false)
  const { translateY, show, panHandlers } = 
    useErrorNotificationAppearAnimation({
      onHidden: () => setIsShown(false),
    })

  useEffect(() => {
    if (!error) return
    setIsShown(true)
    show()
  }, [error])

  if (!isShown) return null

  return (
    <Animated.View
      {...panHandlers}
      style={[
        styles.errorNotificationContainer,
        { transform: [{ translateY }] },
      ]}
    >
      <StyledText>{error}</StyledText>
    </Animated.View>
  )
}

export { ErrorNotification }