import { createStitches, globalCss } from '@stitches/react'

export const { styled, css } = createStitches({
  theme: {
    colors: {
      red500: 'hsl(0, 100%, 74%)',
      green500: 'hsl(154, 59%, 51%),',
      blue500: 'hsl(248, 32%, 49%)',
      blue900: 'hsl(249, 10%, 26%)',
      greyBlue500: 'hsl(246, 25%, 77%)',
    },
    fontWeights: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
    },
    fonts: {
      poppins: "'Poppins', sans-serif",
    },
    fontSizes: {
      1: '16px',
    },
  },
})

export const globalStyles = globalCss({
  html: {
    margin: 0,
    height: '100%',
    width: '1440px',
  },
  body: {
    margin: 0,
    height: '100%',
    color: 'white',
    fontFamily: '$poppins',
    '& [id="root"]': {
      height: '100%',
      backgroundColor: '$red500',
    },
    '& p': {
      fontSize: '$1',
    },
  },
})
