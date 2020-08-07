import color from 'color';
import { Colors, configureFonts, DefaultTheme, Theme } from 'react-native-paper';
import { Fonts } from 'react-native-paper/lib/typescript/src/types';

import * as colors from './colors';

const defaultFonts: Fonts = {
  regular: {
    fontFamily: 'roboto-regular',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'roboto-bold',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'roboto-medium',
    fontWeight: 'normal',
  },
  thin: {
    fontFamily: 'roboto-light',
    fontWeight: 'normal',
  },
};

const paperTheme: Theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    default: defaultFonts,
    ios: defaultFonts,
    android: defaultFonts,
  }),
  dark: false,
  roundness: 0,
  animation: {
    scale: 1.0,
  },
  colors: {
    ...DefaultTheme.colors,
    primary: colors.CALL_TO_ACTION,
    accent: colors.CALL_TO_ACTION,
    background: '#f6f6f6',
    surface: '#000000',
    error: '#B00020',
    text: Colors.black,
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color(Colors.black)
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color(Colors.black)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(Colors.black)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: Colors.pinkA400,
  },
};

export default paperTheme;
