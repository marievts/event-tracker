import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { FontAwesome5 } from '@expo/vector-icons'
import { TitleText, ParagraphText } from './AppText'
import { colors, currentTheme } from './theme'

export default function App() {
  let [fontsLoaded] = useFonts({
    'head-400': require('./assets/fonts/FiraSans-Regular.ttf'),
    'head-700': require('./assets/fonts/FiraSans-Bold.ttf'),
    'body-300': require('./assets/fonts/Montserrat-Light.ttf'),
    'body-400': require('./assets/fonts/Montserrat-Regular.ttf'),
    'body-500': require('./assets/fonts/Montserrat-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.menuHeader}>
          <FontAwesome5 name="bars" size={30} color={colors.title} />
        </View>
        <View style={styles.calendarHeader}>
          <FontAwesome5 name="angle-left" size={24} color={colors.title} />
          <TitleText text="Month"></TitleText>
          <FontAwesome5 name="angle-right" size={24} color={colors.title} />
        </View>
        <View style={styles.body}>
          <ParagraphText text="Calendar to come here."></ParagraphText>
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
    color: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  body: {
    flex: 1,
    width: '100%',
    padding: 25,
    backgroundColor: colors.background,
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
  icon: {
    fontSize: 30,
    color: colors.title,
    alignContent: 'flex-start',
  },
})
