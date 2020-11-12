import React from 'react'
import { StyleSheet, View } from 'react-native'
import { theme, currentTheme } from './Components/theme'
import { TitleText, ParagraphText } from './Components/AppText'
import MenuButton from './Components/MenuButton'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './types'

type Props = StackScreenProps<RootStackParamList,'Events'>

function EventsScreen ({ route, navigation }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuButton onPress={() => navigation.push('Menu')} />
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