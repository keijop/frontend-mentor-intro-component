import { createStitches, globalCss } from '@stitches/react'

export const { styled, css } = createStitches({
  media: {
    bp1: '(max-width: 900px)',
    bp2: '(max-width: 1200px)',
  },
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
    radii: {
      borderRadius: '8px',
    },
    shadows: {
      boxShadow: '0 8px 0 0 rgba(8,8,8,0.2)',
    },
  },
})

export const globalStyles = globalCss({
  root: {
    boxSizing: 'border-box',
  },
  html: {
    height: '100vh',
    margin: 0,
  },
  body: {
    margin: 0,
    color: 'white',
    fontSize: '$1',
    fontFamily: '$poppins',
    '& [id="root"]': {
      height: '100%',
      backgroundColor: '$red500',
    },
  },
})
