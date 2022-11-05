import { styled } from '../../stitches.config'

export const StyledMainContainer = styled('main', {
  height: '100%',
  display: 'flex',
  padding: '0 10rem',
  gap: '5rem',
  '@bp2': {
    padding: '0 5rem',
    gap: '2.5rem',
  },
  '@bp1': {
    flexDirection: 'column',
    padding: '0 1.5rem',
  },
})

export const StyledSection = styled('section', {
  flexBasis: '50%',
  flexGrow: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '& h1': {
    fontSize: '3rem',
  },
  '& > button': {
    marginBottom: '2rem',
  },
  variants: {
    textCenter: {
      true: {
        '@bp1': {
          textAlign: 'center',
          '& h1': {
            fontSize: '2rem',
          },
        },
      },
    },
  },
})

export const StyledButton = styled('button', {
  width: '100%',
  height: '3rem',
  color: 'white',
  backgroundColor: 'hsl(154, 59%, 51%)',
  borderRadius: '$borderRadius',
  border: 'none',
  boxShadow: '0 4px 0 0 rgba(15, 149, 91, 0.721)',
  textTransform: 'uppercase',
  fontSize: '$1',
  '& span': {
    fontWeight: '$600',
  },
  cursor: 'pointer',
  variants: {
    color: {
      purple: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$blue500',
        boxShadow: '$boxShadow',
        textTransform: 'none',
        color: '$greyBlue500',
        '& span': {
          color: 'white',
        },
        '@bp1': {
          flexDirection: 'column',
          height: '5rem',
          gap: '0.5rem',
        },
      },
    },
  },
})
