import styles from './styled-text.styles'

import { FC } from 'react'
import { Text, TextProps } from 'react-native'

import { Typography, TypographyVariant } from '@shared/theme'

type StyledTextProps = TextProps & {
  variant?: TypographyVariant
}

const StyledText: FC<StyledTextProps> = ({
  variant = 'primary',
  style,
  ...props
}) => {
  return (
    <Text
        style={[
          styles.base,
          Typography[variant],
          style,
        ]}
        {...props}
      />
  )
}

export { StyledText }