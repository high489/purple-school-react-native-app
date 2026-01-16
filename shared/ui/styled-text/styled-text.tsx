import styles from './styled-text.styles'

import { Text, TextProps } from 'react-native'

import { Typography, TypographyVariant } from '@shared/theme'

type StyledTextProps = TextProps & {
  variant?: TypographyVariant
}

export function StyledText({
  variant = 'primary',
  style,
  ...props
}: StyledTextProps) {
  return (
    <Text
      style={[styles.base, Typography[variant], style]}
      {...props}
    />
  )
}
