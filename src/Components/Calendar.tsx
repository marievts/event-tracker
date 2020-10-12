import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme, currentTheme } from './theme'

class Calendar extends React.Component {
    render() {
      return (
        <View>
          <View style={styles.row}>
            <Text>m</Text>
            <Text>t</Text>
            <Text>w</Text>
            <Text>t</Text>
            <Text>f</Text>
            <Text>s</Text>
            <Text>s</Text>
          </View>
        </View>
      )
    }
}

export default Calendar

//Styles
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})