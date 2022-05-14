import React, { FC, useState } from 'react'
// libs
import NextImage from 'next/image'
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
// types
import { IAccount } from 'src/types'
// styles
import {
  LoginContainerStyled,
  LoginTitleStyled,
  LoginAvatarStyled,
  FormStyled,
  InputContainerStyled,
  InputTitleStyled,
  ButtonContainer,
  SignupContainerStyled,
  SignupTextStyled,
  LinkTextStyled,
} from './Login.styles'

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const [passwordShown, setPasswordShown] = useState(false)

  const passwordShowHide = () => {
    setPasswordShown(!passwordShown)
  }

  const onSubmit = (data: any) => {
    axios
      .get(ENDPOINTS.GET.allAccounts)
      .then((res) => {
        const register = res.data.filter(
          (el: IAccount) => el.email === data.email && el.password === data.password,
        )
        if (register.length !== 0) {
          router.push({ pathname: '/', query: { id: register[0].id } })
          return
        }
        setError('email', { message: 'The email is incorrect' })
        setError('password', { message: 'The password is incorrect' })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <LoginContainerStyled>
      <LoginTitleStyled>Login</LoginTitleStyled>
      <LoginAvatarStyled>
        <NextImage src={'/icons/people-sign-in.png'} width={70} height={70} priority={false} />
      </LoginAvatarStyled>

      <FormStyled onSubmit={handleSubmit(onSubmit)}>
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
            register={{ ...register('password', { required: 'Password is required' }) }}
            errors={errors}
            style={{ height: '20px' }}
            rightIcon={<PasswordShow isShown={passwordShown} passwordShowHide={passwordShowHide} />}
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

      <SignupContainerStyled>
        <SignupTextStyled>Not yet account?</SignupTextStyled>
        <Link href="/register">
          <LinkTextStyled>Sign Up here</LinkTextStyled>
        </Link>
      </SignupContainerStyled>
    </LoginContainerStyled>
  )
}

export default Login
