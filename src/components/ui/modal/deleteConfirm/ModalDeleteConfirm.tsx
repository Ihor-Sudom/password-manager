import React, { FC } from 'react'
// libs
import Modal from 'react-modal'
import axios from 'src/libs/axios'
// components
import Button from 'src/components/ui/button'
// constants
import { EVariants } from 'src/constants/variants'
import { overlay, content } from './setting'
import ENDPOINTS from 'src/constants/endpoints'
// styles
import {
  TextStyled,
  ButtonContainerStyled,
  ButtonBoxCancelStyled,
  ButtonBoxDeleteStyled,
} from './ModalDeleteConfirm.styles'

interface IModalDeleteConfirm {
  isOpen: boolean
  userId: number
  accountId: number | null
  closeModal: () => void
  getPasswordInfo: () => void
  setIsAccountInformation: (data: boolean) => void
}

export const ModalDeleteConfirm: FC<IModalDeleteConfirm> = ({
  isOpen,
  userId,
  accountId,
  closeModal,
  getPasswordInfo,
  setIsAccountInformation,
}) => {
  const deleteAccountInformation = () => {
    if (accountId) {
      axios
        .delete(ENDPOINTS.DELETE.deletePasswordInfo(userId, accountId))
        .then(() => {
          getPasswordInfo()
          setIsAccountInformation(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <Modal isOpen={isOpen} style={{ overlay, content }}>
      <TextStyled>
        Are you sure you want to delete information about the selected account?
      </TextStyled>
      <ButtonContainerStyled>
        <ButtonBoxCancelStyled>
          <Button
            variant={EVariants.SECONDARY}
            style={{ width: '100%', height: '35px', boxShadow: 'none' }}
            onClick={closeModal}
          >
            Cancel
          </Button>
        </ButtonBoxCancelStyled>
        <ButtonBoxDeleteStyled>
          <Button
            variant={EVariants.PRIMARY}
            style={{ width: '100%', height: '35px', boxShadow: 'none' }}
            onClick={deleteAccountInformation}
          >
            Delete
          </Button>
        </ButtonBoxDeleteStyled>
      </ButtonContainerStyled>
    </Modal>
  )
}
