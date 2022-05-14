import React, { FC, useState } from 'react'
// libs
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import axios from 'src/libs/axios'
// components
import Input from 'src/components/ui/input'
import Button from 'src/components/ui/button'
import PasswordShow from 'src/components/ui/passwordShow'
// constants
import { EVariants } from 'src/constants/variants'
import { overlay, content } from './setting'
import ENDPOINTS from 'src/constants/endpoints'
// types
import { IPasswordInfo } from 'src/types'
// styles
import {
  TitleStyled,
  FormStyled,
  BoxStyled,
  BoxTitleStyled,
  ButtonContainerStyled,
  ButtonBoxCancelStyled,
  ButtonBoxStyled,
} from './ModalEditAccount.styles'

interface IModalEditAccount {
  isOpen: boolean
  userId: number
  accountInfo: IPasswordInfo
  closeModal: () => void
  getPasswordInfo: () => void
  setIsAccountInformation: (data: boolean) => void
}

export const ModalEditAccount: FC<IModalEditAccount> = ({
  isOpen,
  userId,
  accountInfo,
  closeModal,
  getPasswordInfo,
  setIsAccountInformation,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [passwordShown, setPasswordShown] = useState(false)
  const { id, accountName, email, password } = accountInfo

  const passwordShowHide = () => {
    setPasswordShown(!passwordShown)
  }

  const onModalSubmit = (dataForm: any) => {
    if (id) {
      axios
        .put(ENDPOINTS.PUT.editPassword(userId, id), dataForm)
        .then(() => {
          closeModal()
          setIsAccountInformation(false)
          getPasswordInfo()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <Modal isOpen={isOpen} style={{ overlay, content }}>
      <TitleStyled>Edit Account Information</TitleStyled>

      <FormStyled onSubmit={handleSubmit(onModalSubmit)}>
        <BoxStyled>
          <BoxTitleStyled>account name</BoxTitleStyled>
          <Input
            defaultValue={accountName}
            register={{
              ...register('accountName', { required: 'account name is required' }),
            }}
            errors={errors}
            style={{ width: '230px', height: '20px' }}
          />
        </BoxStyled>
        <BoxStyled>
          <BoxTitleStyled>email</BoxTitleStyled>
          <Input
            defaultValue={email}
            register={{
              ...register('email', { required: 'email is required', pattern: /\S+@\S+\.\S+/ }),
            }}
            errors={errors}
            style={{ width: '230px', height: '20px' }}
          />
        </BoxStyled>
        <BoxStyled>
          <BoxTitleStyled>password</BoxTitleStyled>
          <Input
            defaultValue={password}
            type={passwordShown ? 'text' : 'password'}
            register={{
              ...register('password', { required: 'password is required' }),
            }}
            errors={errors}
            style={{ width: '210px', height: '20px' }}
            rightIcon={<PasswordShow isShown={passwordShown} passwordShowHide={passwordShowHide} />}
          />
        </BoxStyled>

        <ButtonContainerStyled>
          <ButtonBoxCancelStyled>
            <Button
              variant={EVariants.SECONDARY}
              style={{ width: '100%', boxShadow: 'none' }}
              onClick={closeModal}
            >
              Cancel
            </Button>
          </ButtonBoxCancelStyled>
          <ButtonBoxStyled>
            <Button
              variant={EVariants.PRIMARY}
              type="submit"
              style={{ width: '100%', boxShadow: 'none' }}
            >
              Submit
            </Button>
          </ButtonBoxStyled>
        </ButtonContainerStyled>
      </FormStyled>
    </Modal>
  )
}
