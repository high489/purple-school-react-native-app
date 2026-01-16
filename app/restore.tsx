import { View } from 'react-native'

import { StyledLink } from '@shared/ui'

import { Colors } from '@shared/theme'

export default function Restore() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
      }}
    >
      <StyledLink href='/x' label='Go back' />
    </View>
  )
}
