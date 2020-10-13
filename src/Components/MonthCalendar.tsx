import React from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { Calendar } from 'react-native-calendars'
import { theme, currentTheme } from './theme'

class MonthCalendar extends React.Component {
    render() {
      return (
        <Calendar
          current={'2020-10-13'}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Change CSS style
          theme={calendarSpecialStyles}
          style={styles.container}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (<Arrow direction={direction} />)}
        />
      )
    }
}

class Arrow extends React.Component < {direction: string} > {
  iconName : string = 'angle-' + this.props.direction

  render(){
    return (
      <FontAwesome5
        name={this.iconName}
        size={theme.icons.title.size}
        color={theme.colors.title}
      />
    )
  }
}

export default MonthCalendar

//Styles
const calendarSpecialStyles = {
  textSectionTitleColor: theme.colors.text,
  // textSectionTitleDisabledColor: theme.colors.text,
  // selectedDayBackgroundColor: theme.colors.background,
  selectedDayTextColor: currentTheme.primary,
  todayTextColor: currentTheme.primary,
  dayTextColor: theme.colors.text,
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  // selectedDotColor: '#ffffff',
  // disabledArrowColor: '#d9e1e8',
  monthTextColor: theme.colors.title,
  // indicatorColor: 'blue',
  textDayFontFamily: theme.fonts.body.font,
  textMonthFontFamily: theme.fonts.heading.font,
  textDayHeaderFontFamily: theme.fonts.heading.font,
  textDayFontWeight: '300',
  textMonthFontWeight: '700',
  textDayHeaderFontWeight: '400',
  textDayFontSize: theme.fonts.body.size,
  textMonthFontSize: theme.fonts.heading.size,
  textDayHeaderFontSize: 16,
  'stylesheet.calendar.main': {
    container: {
    },
    monthView: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.background,
      paddingHorizontal: 10,
    },
    week: {
      marginVertical: 14,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
  },
  'stylesheet.calendar.header': {
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    week: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: theme.colors.background,
      borderTopStartRadius: 50,
      borderTopEndRadius: 50,
      paddingTop: 35,
      paddingHorizontal: 10,
    },
  },
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})