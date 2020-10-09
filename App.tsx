import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { FontAwesome5 } from '@expo/vector-icons'
import { TitleText, ParagraphText } from './AppText'

export default function App() {
  let [fontsLoaded] = useFonts({
    'HeadFont_400Regular': require('./assets/fonts/FiraSans-Regular.ttf'),
    'HeadFont_700Bold': require('./assets/fonts/FiraSans-Bold.ttf'),
    'BodyFont_300Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'BodyFont_400Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'BodyFont_500Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.menuHeader}>
          <FontAwesome5 name="bars" size={30} color="#FFF" />
        </View>
        <View style={styles.calendarHeader}>
          <FontAwesome5 name="angle-left" size={24} color="#FFF" />
          <TitleText text="Month"></TitleText>
          <FontAwesome5 name="angle-right" size={24} color="#FFF" />
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
    backgroundColor: '#81A7B4',
    color: '#57606F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  body: {
    flex: 1,
    width: '100%',
    padding: 25,
    backgroundColor: '#FFF',
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
    color: '#FFF',
    alignContent: 'flex-start',
  },
})
