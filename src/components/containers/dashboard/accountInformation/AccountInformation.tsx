import React, { FC, useState } from 'react'
// libs
import NextImage from 'next/image'
// components
import Input from 'src/components/ui/input'
import PasswordShow from 'src/components/ui/passwordShow'
import { ModalDeleteConfirm, ModalEditAccount } from 'src/components/ui/modal'
// types
import { IPasswordInfo } from 'src/types'
// styles
import {
  Wrapper,
  InformationContainerStyled,
  InformationTitleStyled,
  ButtonContainerStyled,
  ButtonEditStyled,
  ButtonDeleteStyled,
  ContentStyled,
  BoxStyled,
  BoxTitleStyled,
} from './AccountInformation.styles'

interface IAccountInformation {
  userId: number
  information: IPasswordInfo
  getPasswordInfo: () => void
  setIsAccountInformation: (data: boolean) => void
}

const AccountInformation: FC<IAccountInformation> = ({
  userId,
  information,
  getPasswordInfo,
  setIsAccountInformation,
}) => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false)

  const passwordShowHide = () => {
    setPasswordShown(!passwordShown)
  }

  const openModalDeleteConfirm = () => {
    setIsModalOpen(!isModalOpen)
  }

  const openModalEditAccount = () => {
    setIsModalEditOpen(!isModalEditOpen)
  }

  return (
    <Wrapper>
      <InformationContainerStyled>
        <InformationTitleStyled>{information.accountName} Details</InformationTitleStyled>
        <ButtonContainerStyled>
          <ButtonEditStyled onClick={openModalEditAccount}>
            <NextImage src={'/icons/edit.png'} layout="fill" priority={true} />
          </ButtonEditStyled>
          <ButtonDeleteStyled onClick={openModalDeleteConfirm}>
            <NextImage src={'/icons/delete.png'} layout="fill" priority={true} />
          </ButtonDeleteStyled>
        </ButtonContainerStyled>
      </InformationContainerStyled>
      <ContentStyled>
        <BoxStyled>
          <BoxTitleStyled>Login</BoxTitleStyled>
          <Input
            value={information.email}
            style={{ width: '220px', height: '20px' }}
            disabled={true}
          />
        </BoxStyled>
        <BoxStyled>
          <BoxTitleStyled>Password</BoxTitleStyled>
          <Input
            value={information.password}
            type={passwordShown ? 'text' : 'password'}
            style={{ width: '200px', height: '20px' }}
            disabled={true}
            rightIcon={<PasswordShow isShown={passwordShown} passwordShowHide={passwordShowHide} />}
          />
        </BoxStyled>
      </ContentStyled>
      {isModalOpen && (
        <ModalDeleteConfirm
          isOpen={isModalOpen}
          userId={userId}
          accountId={information.id}
          closeModal={openModalDeleteConfirm}
          getPasswordInfo={getPasswordInfo}
          setIsAccountInformation={setIsAccountInformation}
        />
      )}
      {isModalEditOpen && (
        <ModalEditAccount
          isOpen={isModalEditOpen}
          userId={userId}
          accountInfo={information}
          closeModal={openModalEditAccount}
          getPasswordInfo={getPasswordInfo}
          setIsAccountInformation={setIsAccountInformation}
        />
      )}
    </Wrapper>
  )
}

export default AccountInformation
