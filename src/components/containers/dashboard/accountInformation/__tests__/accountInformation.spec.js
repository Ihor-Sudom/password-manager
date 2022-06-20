import React from 'react'
import AccountInformation from '../AccountInformation.tsx'
import { ModalDeleteConfirm, ModalEditAccount } from '../../../../ui/modal'
import { ButtonEditStyled, ButtonDeleteStyled } from '../AccountInformation.styles.ts'

const wrapperAccountInformation = (props) => shallow(<AccountInformation {...props} />)
const props = {
  userId: 1,
  information: {
    id: 2,
    accountName: 'git',
    email: 'jhon@gmail.com',
    password: '12345!',
  },
  getPasswordInfo: jest.fn(),
  setIsAccountInformation: jest.fn(),
}

const component = wrapperAccountInformation(props)

describe('Should render AccountInformation component', () => {
  it('Should render AccountInformation component without modals', () => {
    expect(component.find(ModalDeleteConfirm).exists()).toEqual(false)
    expect(component.find(ModalEditAccount).exists()).toEqual(false)
  })

  it('Should check if modal window opens when ButtonEditStyled button is clicked', () => {
    component.find(ButtonEditStyled).prop('onClick')()

    expect(component.find(ModalEditAccount).exists()).toEqual(true)
  })

  it('Should check if modal window opens when ButtonDeleteStyled button is clicked', () => {
    component.find(ButtonDeleteStyled).prop('onClick')()

    expect(component.find(ModalDeleteConfirm).exists()).toEqual(true)
  })
})
