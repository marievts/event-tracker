import React from 'react'
import { StyleSheet, View, SafeAreaView, Platform, StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { theme, currentTheme } from './Components/theme'
import MonthCalendar from './Components/MonthCalendar'
import ButtonHeader from './Components/ButtonHeader'

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
      <SafeAreaView style={styles.container}>
        <ButtonHeader />
        <MonthCalendar />
      </SafeAreaView>
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
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 15 : 0
  },
  body: {
    flex: 1,
    width: '100%',
    padding: 25,
    backgroundColor: theme.colors.background,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
})
