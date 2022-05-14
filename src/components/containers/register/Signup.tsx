import React, { FC, useState } from 'react'
// libs
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import axios from 'src/libs/axios'
// components
import Input from 'src/components/ui/input'
import Button from 'src/components/ui/button'
import PasswordShow from 'src/components/ui/passwordShow'
// constants
import { EVariants } from 'src/constants/variants'
import ENDPOINTS from 'src/constants/endpoints'
// styles
import {
  SignupContainerStyled,
  SignupTitleStyled,
  FormStyled,
  InputContainerStyled,
  InputTitleStyled,
  ButtonContainer,
  SigninContainerStyled,
  SignupTextStyled,
  LinkTextStyled,
} from './Signup.styles'

const Signup: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const [passwordShown, setPasswordShown] = useState(false)
  const [passwordShownConfirm, setPasswordShownConfirm] = useState(false)

  const passwordShowHide = () => {
    setPasswordShown(!passwordShown)
  }
  const passwordShowHideConfirm = () => {
    setPasswordShownConfirm(!passwordShownConfirm)
  }

  const onSubmit = (data: any) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { message: 'The password is incorrect' })
      return
    }

    const dataForm = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    }

    axios
      .post(ENDPOINTS.POST.createAccount, dataForm)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          router.push('/login')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <SignupContainerStyled>
      <SignupTitleStyled>Sign Up</SignupTitleStyled>

      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputContainerStyled>
          <InputTitleStyled>First Name</InputTitleStyled>
          <Input
            register={{
              ...register('firstName', { required: 'First Name is required' }),
            }}
            errors={errors}
            style={{ height: '20px' }}
          />
        </InputContainerStyled>
        <InputContainerStyled>
          <InputTitleStyled>Last Name</InputTitleStyled>
          <Input
            register={{
              ...register('lastName', { required: 'Last Name is required' }),
            }}
            errors={errors}
            style={{ height: '20px' }}
          />
        </InputContainerStyled>
        <InputContainerStyled>
          <InputTitleStyled>Email</InputTitleStyled>
          <Input
            register={{
              ...register('email', { required: 'Email is required', pattern: /\S+@\S+\.\S+/ }),
            }}
            errors={errors}
            style={{ height: '20px' }}
          />
        </InputContainerStyled>
        <InputContainerStyled>
          <InputTitleStyled>Password</InputTitleStyled>
          <Input
            type={passwordShown ? 'text' : 'password'}
            register={{
              ...register('password', { required: 'Password is required' }),
            }}
            errors={errors}
            style={{ height: '20px' }}
            rightIcon={<PasswordShow isShown={passwordShown} passwordShowHide={passwordShowHide} />}
          />
        </InputContainerStyled>
        <InputContainerStyled>
          <InputTitleStyled>Confirm Password</InputTitleStyled>
          <Input
            type={passwordShownConfirm ? 'text' : 'password'}
            register={{
              ...register('confirmPassword', { required: 'Confirm Password is required' }),
            }}
            errors={errors}
            style={{ height: '20px' }}
            rightIcon={
              <PasswordShow
                isShown={passwordShownConfirm}
                passwordShowHide={passwordShowHideConfirm}
              />
            }
          />
        </InputContainerStyled>
        <ButtonContainer>
          <Button
            variant={EVariants.PRIMARY}
            type="submit"
            style={{ width: '100%', boxShadow: 'none' }}
          >
            Submit
          </Button>
        </ButtonContainer>
      </FormStyled>

      <SigninContainerStyled>
        <SignupTextStyled>Already have an account?</SignupTextStyled>
        <Link href="/login">
          <LinkTextStyled>Login here</LinkTextStyled>
        </Link>
      </SigninContainerStyled>
    </SignupContainerStyled>
  )
}

export default Signup
