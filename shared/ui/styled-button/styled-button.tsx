import styles from './styled-button.styles'

import { FC, useRef } from 'react'
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { StyledText } from '../styled-text'
import { Colors } from '@shared/theme'

type StyledButtonProps = PressableProps & {
  style?: StyleProp<ViewStyle>
  label?: string
  disabled?: boolean
}

const StyledButton: FC<StyledButtonProps> = ({
  style,
  label,
  disabled,
  ...props
}) => {
  const animatedValue = useRef(new Animated.Value(1)).current
  const bgColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.primaryHover, Colors.primary],
  })

  const fadeIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start()
    props.onPressIn?.(e)
  }

  const fadeOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start()
    props.onPressOut?.(e)
  }

  return (
    <Pressable
      onPressIn={(e) => fadeIn(e)}
      onPressOut={fadeOut}
      disabled={disabled}
      {...props}
    >
      <Animated.View
        style={[
          {
            ...styles.button,
            backgroundColor: bgColor,
          },
          style,
          disabled ? styles.disabled : null,
        ]}
      >
        {label && <StyledText variant="subtitle">{label}</StyledText>}
      </Animated.View>
    </Pressable>
  )
}

export { StyledButton }
