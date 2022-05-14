import React, { FC, useEffect, useState } from 'react'
// libs
import NextImage from 'next/image'
import axios from 'src/libs/axios'
// components
import Button from 'src/components/ui/button'
import Modal from 'src/components/ui/modal/addAccount/ModalAddAccount'
import AccountInformation from 'src/components/containers/dashboard/accountInformation/AccountInformation'
// constants
import { EVariants } from 'src/constants/variants'
import ENDPOINTS from 'src/constants/endpoints'
// types
import { IPasswordInfo } from 'src/types'
// styles
import {
  RegisteredContainerStyled,
  AccountsContainerStyled,
  AccountsContentStyled,
  AccountNameStyled,
  AccountsTitleStyled,
  ButtonContainerStyled,
  UnregisteredStyled,
  UnregisteredTitleStyled,
  ImageContainerStyled,
} from './Board.styles'

interface IBoard {
  userIdQuery: number
}

const initialState = {
  id: null,
  accountName: '',
  email: '',
  password: '',
}

const Board: FC<IBoard> = ({ userIdQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [passwordInfo, setPasswordInfo] = useState<IPasswordInfo[]>([initialState])
  const [getPasswordInfo, setGetPasswordInfo] = useState(false)
  const [selectedAccountInfo, setSelectedAccountInfo] = useState<IPasswordInfo>(initialState)
  const [isAccountInformation, setIsAccountInformation] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(!isModalOpen)
  const handleGetPasswordInfo = () => setGetPasswordInfo(!getPasswordInfo)

  useEffect(() => {
    if (userIdQuery) {
      axios
        .get(ENDPOINTS.GET.passwordInfo(userIdQuery))
        .then((res) => setPasswordInfo(res.data))
        .catch((error) => {
          console.log(error)
        })
    }
  }, [userIdQuery, getPasswordInfo])

  const accountSelected = (e) => {
    if (e.target.id) {
      const selectedAccount = passwordInfo.filter((el: IPasswordInfo) => el.id === e.target.id)
      setSelectedAccountInfo(selectedAccount[0])
      setIsAccountInformation(true)
    }
  }

  return (
    <>
      {userIdQuery ? (
        <RegisteredContainerStyled>
          <AccountsContainerStyled>
            <AccountsTitleStyled>Accounts</AccountsTitleStyled>
            <AccountsContentStyled onClick={accountSelected}>
              {passwordInfo.map((el: IPasswordInfo) => (
                <AccountNameStyled key={el.id} id={el.id?.toString()}>
                  {el.accountName}
                </AccountNameStyled>
              ))}
            </AccountsContentStyled>
            <ButtonContainerStyled>
              <Button
                variant={EVariants.PRIMARY}
                style={{ height: '40px', borderRadius: '20px' }}
                onClick={openModal}
              >
                Add Account
              </Button>
            </ButtonContainerStyled>
            {isModalOpen && (
              <Modal
                isOpen={isModalOpen}
                userId={userIdQuery}
                closeModal={openModal}
                getPasswordInfo={handleGetPasswordInfo}
              />
            )}
          </AccountsContainerStyled>
          {isAccountInformation && (
            <AccountInformation
              userId={userIdQuery}
              information={selectedAccountInfo}
              getPasswordInfo={handleGetPasswordInfo}
              setIsAccountInformation={setIsAccountInformation}
            />
          )}
        </RegisteredContainerStyled>
      ) : (
        <UnregisteredStyled>
          <ImageContainerStyled>
            <NextImage src={'/icons/key.png'} width={150} height={150} priority={false} />
          </ImageContainerStyled>
          <UnregisteredTitleStyled>
            To use the functions of the application you need to login or register.
          </UnregisteredTitleStyled>
        </UnregisteredStyled>
      )}
    </>
  )
}

export default Board
