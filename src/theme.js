import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#49d0be',
        light: '#ffffff',
        altLight: '#f2f2f2',
        dark: '#42bdac',
        altDark: '#333333',
      },
      secondary: {
        main: '#e91e63',
        light: '#efefef',
        dark: '#000000',
        darkAlt: '#515151'
      },
      footer: {
        dark: '#292e31',
        light: '#d2d2d2',
        icon: '#4f5356',
        iconHover: '#8e979d',
      },
    },
});

export default theme;
