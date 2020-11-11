import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme, currentTheme } from './Components/theme'
import MonthCalendar from './Components/MonthCalendar'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './types'

type Props = StackScreenProps<RootStackParamList,'Home'>

function HomeScreen ({ route, navigation }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Menu')}
          style={{ marginHorizontal: 20 }}>
          <FontAwesome5
            name="bars"
            size={theme.icons.menu.size}
            color={theme.colors.title}
          />
        </TouchableOpacity>
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