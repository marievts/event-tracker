import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme } from './theme'

class ButtonHeader extends React.Component {

  render() {
    return (
      <View style={styles.header}>
        <FontAwesome5
          name="bars"
          size={theme.icons.menu.size}
          color={theme.colors.title}
        />
      </View>
    )
  }
}

export default ButtonHeader

//Styles
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
})