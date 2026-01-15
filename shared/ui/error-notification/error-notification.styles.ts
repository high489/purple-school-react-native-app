import { Dimensions, StyleSheet } from 'react-native'

import { Colors } from '@shared/theme'

const styles = StyleSheet.create({
  errorNotificationContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    width: Dimensions.get('window').width,
    paddingVertical: 15.5,
    backgroundColor: Colors.dangerRed,
  },
})

export default styles
