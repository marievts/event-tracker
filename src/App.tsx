import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'

import HomeScreen from './HomeScreen'
import MenuScreen from './MenuScreen'
import EventsScreen from './EventsScreen'

import { theme, currentTheme } from './Components/theme'

const Stack = createStackNavigator();

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
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              title: '',
              headerStyle: {
                backgroundColor: currentTheme.primary,
                shadowOpacity: 0,
                elevation: 0,
                borderBottomWidth: 0,
              },
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Events" component={EventsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}