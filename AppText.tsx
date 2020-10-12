import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from './theme'

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
    color: colors.title,
    fontFamily: 'head-700',
    fontSize: 36,
  },
  paragraph: {
    color: colors.text,
    fontFamily: 'body-300',
    fontSize: 16,
  },
})

export {TitleText, ParagraphText}