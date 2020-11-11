import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme, currentTheme } from './Components/theme'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './types'

type Props = StackScreenProps<RootStackParamList,'Menu'>

function MenuScreen ({ route, navigation }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: theme.colors.title,
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginHorizontal: 20 }}>
          <FontAwesome5
            name="times"
            size={theme.icons.menu.size}
            color={currentTheme.primary}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
        <Text>Link 1</Text>
        <Text>Link 2</Text>
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.title,
    color: currentTheme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
})