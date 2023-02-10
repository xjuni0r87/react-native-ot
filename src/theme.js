const greenColor = '#345F50';

//
const celestinoColor = '#6AC2D2';

const whiteColor = '#FFF';

const BLUE = {
  0: '#0A1D43',
  100: '#10295a',
};

const GRAY = {
  '0': '#E7EBF9',
  '100': '#F9F9F9',
  '200': '#DDDDDD',
  '300': '#8b8b8b',
  'ALPHA.100': 'rgba(33, 33, 33, .7)',
};

const ORANGE = {
  0: '#F2A151',
};

export const theme = {
  colors: {
    secondary: '#EFA050', // ORANGE
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
    orange: ORANGE[0],
    lightGray: GRAY[100],
    white: whiteColor,
    captionText: '#8B8B8B',
    chart: {
      mindsetBarColor: ORANGE[0],
      integrityChartColor: celestinoColor,
      organizationChartColor: ORANGE[0],
      insightChartColor: BLUE[0],
      backgroundChartColor: GRAY[0],
      default: ORANGE[0],
    },
    cardColor: BLUE[0],
    line: GRAY[200],
    badge: {
      orange: ORANGE[0],
      white: whiteColor,
    },
    button: {
      orange: ORANGE[0],
      blue: BLUE[0],
      lightBlue: BLUE[100],
      white: whiteColor,
      green: greenColor,
    },
    modal: {
      background: GRAY['ALPHA.100'],
    },
    stepper: {},
    checkbox: {
      orange: ORANGE[0],
      gray: GRAY[200],
    },
    font: {
      default: BLUE[0],
      blue: BLUE[0],
      gray: GRAY[300],
      lightGray: GRAY[100],
      white: whiteColor,
      orange: ORANGE[0],
    },
    navBarHeader: {
      gray: GRAY[100],
      blue: BLUE[0],
      white: whiteColor,
    },
  },
  fontSizes: {
    headlineLarge: 24,
    headlineMedium: 20,
    headlineSmall: 18,
    titleLarge: 16,
    titleMedium: 15,
    titleSmall: 14,
    paragraphLarge: 13,
    paragraphMedium: 12,
    paragraphSmall: 11,
    captionLarge: 10,
    captionMedium: 9,
    captionSmall: 8,
    default: 14,
  },
  // fontFamily: {
  //   bold: 'DMSans-Bold',
  //   medium: 'DMSans-Medium',
  //   regular: 'DMSans-Regular',
  // },
  padding: {
    horizontal: 24,
  },
};
