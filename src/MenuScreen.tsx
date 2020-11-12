import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme, currentTheme } from './Components/theme'
import { MenuLink, MenuText } from './Components/AppText'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './types'

type Props = StackScreenProps<RootStackParamList,'Menu'>

const author: String = 'marievts'
const version: String = '0.0.1'

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
      <View style={styles.linkContainer}>
        <MenuLink text='Calendar' icon='calendar' onPress={() => navigation.navigate('Home')} />
        <MenuLink text='Events' icon='list' onPress={() => navigation.navigate('Events')}/>
        <MenuLink text='Parameters' icon='cog' onPress={() => navigation.navigate('Home')}/>
      </View>
      <View style={styles.footer}>
        <MenuText text={`By ${author}`} />
        <MenuText text={`version ${version}`} />
      </View>
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.title,
    alignItems: 'center',
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
})