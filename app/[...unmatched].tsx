import { Image, StyleSheet, View } from 'react-native'

import { StyledLink, StyledText } from '@shared/ui'
import { Gaps } from '@shared/theme'

export default function UnmatchedCustom() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../assets/images/unmatched.png')}
          resizeMode='contain'
        />
        <StyledText style={styles.text} variant='title'>
          Ooh... something went wrong. Try returning to the app's main
          screen.
        </StyledText>
        <StyledLink href='/' label='Go back' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 55,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  image: {
    width: 204,
    height: 282,
  },
  text: {
    textAlign: 'center',
  },
})
