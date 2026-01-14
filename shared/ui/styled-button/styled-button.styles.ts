import { StyleSheet } from 'react-native'

import { Radii } from '@shared/theme'

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: Radii.r10,
  },
  disabled: {
    opacity: 0.7,
  },
})

export default styles