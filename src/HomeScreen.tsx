import React from 'react'
import { StyleSheet, View } from 'react-native'
import { theme, currentTheme } from './Components/theme'
import MonthCalendar from './Components/MonthCalendar'
import MenuButton from './Components/MenuButton'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './types'

type Props = StackScreenProps<RootStackParamList,'Home'>

function HomeScreen ({ route, navigation }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuButton onPress={() => navigation.push('Menu')} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MonthCalendar />
    </View>
  )
}

export default HomeScreen

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: currentTheme.primary,
    color: theme.colors.title,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})