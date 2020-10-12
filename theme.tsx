const theme = {
    fonts: {
        body: {
            font: 'Montserrat-400',
            size: 16,
        },
        heading: {
            font: 'FiraSans-700',
            size: 36,
        },
    },
    icons: {
        menu: {
            size: 30,
        },
        title: {
            size: 24,
        },
        button: {
            size: 24,
        },
    },
    colors: {
        text: '#57606F',
        title: '#FFF',
        background: '#FFF',
        buttons: {
            warning: '#CC9696',
            primary: '#B9C2CC',
        },
        themes: {
            lightRed: {
                primary: '#B48181',
                secondary: '#CDA2A2',
            },
            lightYellow: {
                primary: '#C9B881',
                secondary: '#DCCFA4',
            },
            lightGreen: {
                primary: '#99A38A',
                secondary: '#BCC4B0',
            },
            lightSkyBlue: {
                primary: '#81A7B4',
                secondary: '#A1C6D3',
            },
            lightGrayBlue: {
                primary: '#7C8494',
                secondary: '#A4ADBF',
            },
            lightViolet: {
                primary: '#CCB4C5',
                secondary: '#E4CCDD',
            },
            red: {
                primary: '#7F4E4E',
                secondary: '#A36969',
            },
            yellow: {
                primary: '#BC9D3A',
                secondary: '#DAC279',
            },
            green: {
                primary: '#748164',
                secondary: '#93A083',
            },
            skyBlue: {
                primary: '#426571',
                secondary: '#558798',
            },
            grayBlue: {
                primary: '#57606F',
                secondary: '#6B788E',
            },
            violet: {
                primary: '#94748B',
                secondary: '#A994A3',
            },
        },
    },
}
let currentTheme = theme.colors.themes.lightSkyBlue

export { theme, currentTheme }