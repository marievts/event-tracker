import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme, currentTheme } from './Components/theme'
import { MenuLink } from './Components/AppText'

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
        <MenuLink text='Calendar' icon='calendar' onPress={() => navigation.navigate('Home')} />
        <MenuLink text='Event' icon='list' onPress={() => navigation.navigate('Home')}/>
        <MenuLink text='Parameters' icon='cog' onPress={() => navigation.navigate('Home')}/>
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