import React from 'react'
import { View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './types'

type Props = StackScreenProps<RootStackParamList,'Menu'>

function MenuScreen ({ route, navigation }: Props) {
  return (
    <View>
        <Text>MenuScreen</Text>
    </View>
  )
}

export default MenuScreen