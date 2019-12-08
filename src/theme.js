import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#49d0be',
        light: '#ffffff',
        dark: '#42bdac',
      },
      secondary: {
        main: '#e91e63',
        light: '#efefef',
        dark: '#000000',
      },
      footer: {
        dark: '#292e31',
        icon: '#4f5356',
        iconHover: '#8e979d',
      },
    },
});

export default theme;
