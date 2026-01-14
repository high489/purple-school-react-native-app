import styles from './styled-input.styles'

import { FC, useState } from 'react'
import { Pressable, StyleProp, TextInput, TextInputProps, TextStyle, View } from 'react-native'

import { Colors, Typography } from '@shared/theme'
import { EyeClosedIcon, EyeOpenedIcon } from '@assets/icons'

type StyledInputProps = TextInputProps & {
  style?: StyleProp<TextStyle>
  isPassword?: boolean
}

const StyledInput: FC<StyledInputProps> = ({
  style,
  isPassword,
  ...props
}) => {
  const [ isPasswordVisible, setIsPasswordVisible ] = useState(false)
  const EyeIcon = isPasswordVisible
    ? EyeOpenedIcon
    : EyeClosedIcon
  
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={[
          styles.textInput,
          style,
          Typography['primary'],
        ]}
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.gray}
        {...props}
      />
      {isPassword && (
        <Pressable
          style={styles.eyeIcon}
          onPress={() => setIsPasswordVisible(state => !state)}
        >
          <EyeIcon color={isPasswordVisible ? Colors.white : Colors.gray}/>
        </Pressable>
      )}
    </View>
  )
}

export { StyledInput }