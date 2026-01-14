import { StyleSheet } from 'react-native'

import { Colors, Radii } from '@shared/theme'

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.violeteDark,
    borderRadius: Radii.r10,
    paddingHorizontal: 24,
  },
  textInput: {
    color: Colors.white,
    flex: 1,
    paddingVertical: 18, 
  },
  eyeIcon: {
    paddingLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles