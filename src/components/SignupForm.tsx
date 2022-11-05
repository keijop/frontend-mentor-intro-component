import React, { useState } from 'react'
import { styled } from '../../stitches.config'
import { StyledButton } from './StyledCommonComponents'
import FormField from './FormField'

/********* STYLED COMPONENTS *******/
const StyledForm = styled('form', {
  background: 'White',
  borderRadius: '$borderRadius',
  boxShadow: '$boxShadow',
  padding: '2rem',
  '& > *': {
    boxSizing: 'border-box',
  },
  '& > *:not(:nth-last-child(-n+2))': {
    marginBottom: '2rem',
  },
})

const StyledFormParagraph = styled('p', {
  color: '$greyBlue500',
  fontSize: '0.75rem',
  textAlign: 'center',
  marginBottom: 0,
  '& span': {
    color: '$red500',
  },
})

/********* TYPES *******/
interface Props {
  children?: React.ReactNode
}

type FormData = {
  [key in FieldName]: string
}

type FieldName = 'firstName' | 'lastName' | 'email' | 'password'

interface FormField {
  type: string
  placeholder: string
  name: FieldName
}

export interface Error {
  field: FieldName
  errorType: 'required' | 'invalid'
  text: string
}

/********* COMPONENT *******/

const SignupForm: React.FC<Props> = () => {
  const [errors, setErrors] = useState<Error[]>([])
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation
  const emailValidationRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  const fieldNames = {
    FIRSTNAME: 'firstName' as FieldName,
    LASTNAME: 'lastName' as FieldName,
    EMAIL: 'email' as FieldName,
    PASSWORD: 'password' as FieldName,
  }

  const formFields = [
    {
      type: 'text',
      placeholder: 'First Name',
      name: fieldNames.FIRSTNAME,
    },
    {
      type: 'text',
      placeholder: 'Last Name',
      name: fieldNames.LASTNAME,
    },
    {
      type: 'email',
      placeholder: 'Email address',
      name: fieldNames.EMAIL,
    },
    {
      type: 'password',
      placeholder: 'Password',
      name: fieldNames.PASSWORD,
    },
  ]

  const validationErrorText = {
    [fieldNames.FIRSTNAME]: { required: 'First Name cannot be empty' },
    [fieldNames.LASTNAME]: { required: 'Last Name cannot be empty' },
    [fieldNames.EMAIL]: {
      required: 'Email cannot be empty',
      invalid: 'Looks like this is not an email',
    },
    [fieldNames.PASSWORD]: { required: 'Password cannot be empty' },
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    return
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const emptyFields: FieldName[] = (
      Object.keys(formData) as FieldName[]
    ).filter(key => formData[key].length === 0)

    let errors: Error[] = emptyFields.map(
      (errorFieldName: FieldName): Error => {
        return {
          field: errorFieldName,
          errorType: 'required',
          text: validationErrorText[errorFieldName]['required'],
        }
      }
    )

    if (!emptyFields.includes('email')) {
      const emailFieldValue: string = formData[fieldNames.EMAIL]
      const isValid: boolean = emailValidationRegex.test(emailFieldValue)
      if (!isValid) {
        const invalidEmailError: Error = {
          field: fieldNames['EMAIL'],
          errorType: 'invalid',
          text: validationErrorText[fieldNames['EMAIL']]['invalid'] || '',
        }
        errors = [invalidEmailError, ...errors]
      }
    }
    setErrors(errors)
  }

  return (
    <StyledForm noValidate onSubmit={submitHandler}>
      {formFields.map(field => {
        return (
          <FormField
            key={field.name}
            onChange={changeHandler}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={formData[field.name as keyof FormData]}
            error={errors.find(err => err.field === field.name)}
          />
        )
      })}
      <StyledButton type='submit'>Claim your free trial</StyledButton>
      <StyledFormParagraph>
        By clicking the button, you are agreeing to our
        <span style={{ fontWeight: '600' }}> Terms and Services</span>
      </StyledFormParagraph>
    </StyledForm>
  )
}

export default SignupForm
