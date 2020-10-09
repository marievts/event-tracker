import React from 'react'
import { StyleSheet, Text } from 'react-native'

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
    color: '#FFF',
    fontFamily: 'head-700',
    fontSize: 36,
  },
  paragraph: {
    color: '#57606F',
    fontFamily: 'body-300',
    fontSize: 16,
  },
})

export {TitleText, ParagraphText}