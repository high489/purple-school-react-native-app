import styles from './error-notification.styles'

import { useEffect, useState } from 'react'
import { Animated } from 'react-native'

import { StyledText } from '../styled-text'
import { useErrorNotificationAppearAnimation } from './error-notification.animations'

type ErrorNotificationProps = {
  error?: string
}

export function ErrorNotification({ error }: ErrorNotificationProps) {
  const [isShown, setIsShown] = useState(false)

  const { translateY, show, panHandlers } =
    useErrorNotificationAppearAnimation({
      onHidden: () => setIsShown(false),
    })

  useEffect(() => {
    if (!error) return

    setIsShown(true)
    show()
  }, [error, show])

  if (!isShown) {
    return null
  }

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
