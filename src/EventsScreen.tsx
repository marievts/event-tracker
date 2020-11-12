import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme, currentTheme } from './Components/theme'
import { TitleText, ParagraphText } from './Components/AppText'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './types'

type Props = StackScreenProps<RootStackParamList,'Events'>

function EventsScreen ({ route, navigation }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.push('Menu')}
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
      <TitleText text='Events' />
      <View style={styles.whiteContainer}>
        <ParagraphText text='Create an event to'></ParagraphText>
        <ParagraphText text='get started!'></ParagraphText>
      </View>
    </View>
  )
}

export default EventsScreen

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: currentTheme.primary,
    alignItems: 'center',
  },
  whiteContainer: {
    backgroundColor: theme.colors.title,
    width: '100%',
    height: '100%',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingTop: 35,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
})