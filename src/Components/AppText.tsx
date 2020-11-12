import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { currentTheme, theme } from './theme'

class TitleText extends React.Component<{
    text: string;
  }> {

  render() {
    return (
      <Text style={styles.title}>
        {this.props.text}
      </Text>
    )
  }
}

class ParagraphText extends React.Component<{
    text: string;
  }> {

  render() {
    return (
      <Text style={styles.paragraph}>
        {this.props.text}
      </Text>
    )
  }
}

class MenuLink extends React.Component<{
  text: string;
  icon: string;
  onPress: () => void;
}> {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.linkContainer}>
        <FontAwesome5
          name={this.props.icon}
          size={theme.icons.menu.size}
          color={currentTheme.primary}
          style={styles.linkIcon}
        />
        <Text style={styles.link}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}

class MenuText extends React.Component<{
  text: string;
}> {

  render() {
    return (
      <Text style={styles.menuText}>
        {this.props.text}
      </Text>
    )
  }
}

//Styles
const styles = StyleSheet.create({
  title: {
    color: theme.colors.title,
    fontFamily: theme.fonts.heading.font,
    fontSize: theme.fonts.heading.size,
  },
  paragraph: {
    color: theme.colors.text,
    fontFamily: theme.fonts.body.font,
    fontSize: theme.fonts.body.size,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  link: {
    color: currentTheme.primary,
    fontFamily: theme.fonts.heading.font,
    fontSize: theme.fonts.heading.size,
  },
  linkIcon: {
    marginRight: 20,
    marginTop: 4,
  },
  menuText: {
    color: currentTheme.primary,
    fontFamily: theme.fonts.body.font,
    fontSize: theme.fonts.body.size,
  },
})

export {TitleText, ParagraphText, MenuLink, MenuText}