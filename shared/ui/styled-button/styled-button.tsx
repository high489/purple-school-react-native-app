import styles from './styled-button.styles'
import { useStyledButtonPressAnimation } from './styled-button.animations'

import {
  Animated,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { StyledText } from '../styled-text'

type StyledButtonProps = PressableProps & {
  style?: StyleProp<ViewStyle>
  label?: string
  disabled?: boolean
}

export function StyledButton({
  style,
  label,
  disabled,
  onPressIn,
  onPressOut,
  ...props
}: StyledButtonProps) {
  const {
    backgroundColor,
    onPressIn: animatePressIn,
    onPressOut: animatePressOut,
  } = useStyledButtonPressAnimation()

  return (
    <Pressable
      {...props}
      disabled={disabled}
      onPressIn={(e) => {
        if (disabled) return
        animatePressIn()
        onPressIn?.(e)
      }}
      onPressOut={(e) => {
        animatePressOut()
        onPressOut?.(e)
      }}
    >
      <Animated.View
        style={[
          styles.button,
          { backgroundColor },
          style,
          disabled && styles.disabled,
        ]}
      >
        {label && <StyledText variant='subtitle'>{label}</StyledText>}
      </Animated.View>
    </Pressable>
  )
}
