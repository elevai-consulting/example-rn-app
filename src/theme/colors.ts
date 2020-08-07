import Color from 'color';

const JANNA = '#F3E9D2';
const VISTA_BLUE = '#88D498';
const ELM = '#1A936F';
const ELECTRIC_VIOLET = '#621FEE';
const EDEN = '#114B5F';
const MINE_SHAFT = '#323232';
const GRAY = '#8D8D8D';
const SILVER = '#BABABA';
const MERCURY = '#E3E3E3';
const WHITE = '#FFFFFF';
const MONZA = '#B00020';
const BLACK = '#000000';
const BLACK_ALPHA = Color(BLACK)
  .alpha(0.7)
  .toString();

export const TRANSPARENT = 'transparent';
export const ACCENT = JANNA;
export const ACCENT_ALT = VISTA_BLUE;
export const CALL_TO_ACTION = ELM;
export const CALL_TO_ACTION_ALT = ELECTRIC_VIOLET;
export const BACKGROUND_DARK = EDEN;
export const TEXT = MINE_SHAFT;
export const TEXT_ALT = GRAY;
export const BORDER_ALT = SILVER;
export const BORDER = MERCURY;
export const DISABLED = MERCURY;
export const BACKGROUND_LIGHT = WHITE;
export const TEXT_LIGHT = WHITE;
export const ERROR = MONZA;
export const BACKGROUND_BLACK = BLACK;
export const MASK_DARK = BLACK_ALPHA;
export const MASK_BLUE = Color(ELECTRIC_VIOLET)
  .alpha(0.25)
  .toString();

export const lighten = (color: string) =>
  Color(color)
    .lighten(0.15)
    .toString();

export const darken = (color: string) =>
  Color(color)
    .darken(0.15)
    .toString();
