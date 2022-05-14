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
// styles
import {
  TitleStyled,
  FormStyled,
  BoxStyled,
  BoxTitleStyled,
  ButtonContainerStyled,
  ButtonBoxCancelStyled,
  ButtonBoxStyled,
} from './ModalAddAccount.styles'

interface IModalComponent {
  isOpen: boolean
  userId: number
  closeModal: () => void
  getPasswordInfo: () => void
}

const ModalComponent: FC<IModalComponent> = ({ isOpen, userId, closeModal, getPasswordInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [passwordShown, setPasswordShown] = useState(false)

  const passwordShowHide = () => {
    setPasswordShown(!passwordShown)
  }

  const onModalSubmit = (dataForm: any) => {
    axios
      .post(ENDPOINTS.POST.addPassword(userId), dataForm)
      .then(() => {
        closeModal()
        getPasswordInfo()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Modal isOpen={isOpen} style={{ overlay, content }}>
      <TitleStyled>Add Account</TitleStyled>
      <FormStyled onSubmit={handleSubmit(onModalSubmit)}>
        <BoxStyled>
          <BoxTitleStyled>account name</BoxTitleStyled>
          <Input
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

export default ModalComponent
