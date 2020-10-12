import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { theme } from './theme'

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
})

export {TitleText, ParagraphText}