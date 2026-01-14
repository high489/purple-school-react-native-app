import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { useState } from 'react'

import { ErrorNotification, StyledButton, StyledInput, StyledText } from '@shared/ui'
import { Colors, Gaps } from '@shared/theme'

export default function App() {
  const [ error, setError ] = useState<string | undefined>()
  const width = Dimensions.get('window').width

  const alert = () => {
    setError('Invalid email or password')
    setTimeout(() => {
      setError(undefined)
    }, 3100)
  }

  return (
    <View style={styles.container}>
      <ErrorNotification error={error} />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
          resizeMode='contain'
        />
        <View style={styles.loginForm}>
          <StyledInput
            style={styles.loginFormElement}
            placeholder='Email'
          />
          <StyledInput
            style={styles.loginFormElement}
            placeholder='Password'
            isPassword 
          />
          <StyledButton
            style={styles.loginFormElement}
            label='Login'
            onPress={alert}
          />
        </View>
        {/* <StyledText variant='subtitle'>Reset password</StyledText> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
    justifyContent: 'center',
    padding: 55,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  logo: {
    width: 220,
  },
  loginForm: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
  },
  loginFormElement: {
    height: 58,
  },
})
