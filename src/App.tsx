import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { FontAwesome5 } from '@expo/vector-icons'
import { TitleText, ParagraphText } from './Components/AppText'
import { theme, currentTheme } from './Components/theme'
import Calendar from './Components/Calendar'

export default function App() {
  let [fontsLoaded] = useFonts({
    'FiraSans-400': require('./assets/fonts/FiraSans-Regular.ttf'),
    'FiraSans-700': require('./assets/fonts/FiraSans-Bold.ttf'),
    'Montserrat-300': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-400': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-500': require('./assets/fonts/Montserrat-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>

        <View style={styles.menuHeader}>
          <FontAwesome5
            name="bars"
            size={theme.icons.menu.size}
            color={theme.colors.title}
          />
        </View>
        <View style={styles.calendarHeader}>
          <FontAwesome5
            name="angle-left"
            size={theme.icons.title.size}
            color={theme.colors.title}
          />
          <TitleText text="Month"></TitleText>
          <FontAwesome5
            name="angle-right"
            size={theme.icons.title.size}
            color={theme.colors.title}
          />
        </View>

        <View style={styles.body}>
          <Calendar />
        </View>

      </View>
    )
  }
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: currentTheme.primary,
    color: theme.colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  body: {
    flex: 1,
    width: '100%',
    padding: 25,
    backgroundColor: theme.colors.background,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  calendarHeader: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuHeader: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15
  },
})
