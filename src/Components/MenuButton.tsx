import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { currentTheme, theme } from './theme'

export default class MenuButton extends React.Component<{
    onPress: () => {};
  }> {

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{ marginHorizontal: 20 }}>
        <FontAwesome5
          name="bars"
          size={theme.icons.menu.size}
          color={theme.colors.title}
        />
      </TouchableOpacity>
    )
  }
}