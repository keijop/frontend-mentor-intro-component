import React from 'react'
import { styled } from '../../stitches.config'
import type { Error } from './SignupForm'

const Wrapper = styled('div', {
  position: 'relative',
  variants: {
    color: {
      error: {
        color: '$red500',
        '&:invalid': {
          border: 'Beige',
        },
        '&::after': {
          content: '',
          height: '1.5rem',
          width: '1.5rem',
          backgroundImage: 'url("../../assets/icon-error.svg")',
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translate(0, -50%)',
        },
      },
    },
  },
})

const StyledInput = styled('input', {
  boxSizing: 'border-box',
  height: '3rem',
  width: '100%',
  padding: '0 2rem',
  borderRadius: '$borderRadius',
  fontWeight: '$700',
  border: '1px solid $greyBlue500',
  '&:hover': {
    border: '1px solid $blue500',
  },
  '@bp1': {
    padding: '0 1rem',
  },
  variants: {
    color: {
      error: {
        border: '2px solid $red500',
        '&:hover': {
          border: '2px solid $red500',
        },
      },
    },
  },
})

const HiddenLabel = styled('label', {
  position: 'absolute',
  visibility: 'hidden',
  height: 0,
  length: 0,
})

const ErrorText = styled('p', {
  position: 'absolute',
  top: '2.5rem',
  right: '0',
  fontSize: '11px',
  fontStyle: 'italic',
  '@bp1': {
    fontSize: '0.2rem',
  },
})

interface Props extends React.HTMLProps<HTMLInputElement> {
  type: string
  placeholder: string
  name: string
  error: Error | undefined
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<Props> = ({
  type,
  placeholder,
  onChange,
  name,
  error,
  value,
}) => {
  return (
    <Wrapper color={error ? 'error' : undefined}>
      <HiddenLabel htmlFor={name}>{placeholder}</HiddenLabel>
      <StyledInput
        id={name}
        onChange={onChange}
        type={type}
        placeholder={error ? '' : placeholder}
        name={name}
        color={error ? 'error' : undefined}
        value={value}
      />
      {error && <ErrorText role='alert'>{error.text}</ErrorText>}
    </Wrapper>
  )
}

export default InputField
