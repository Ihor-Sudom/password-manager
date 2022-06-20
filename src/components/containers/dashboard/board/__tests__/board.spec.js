import React from 'react'
import Board from '../Board.tsx'
import Button from '../../../../ui/button'
import Modal from '../../../../ui/modal/addAccount/ModalAddAccount.tsx'
import {
  RegisteredContainerStyled,
  UnregisteredStyled,
  AccountsContentStyled,
  AccountNameStyled,
} from '../Board.styles.ts'

const wrapperBoard = (props) => shallow(<Board {...props} />)
const props = { userIdQuery: 1 }

const component = wrapperBoard(props)

describe('render Board component', () => {

  it('Should render Board component with props', () => {
    const wrapper = component.find(RegisteredContainerStyled)

    expect(wrapper.length).toBe(1)
  })

  it('Should render Board component without props', () => {
    const component = wrapperBoard()
    const wrapper = component.find(UnregisteredStyled)

    expect(wrapper.length).toBe(1)
  })

  it('Should check if modal window opens when Add Account button is clicked', () => {
    component.find(Button).prop('onClick')()

    expect(component.find(Modal).length).toBe(1)
  })

  it('Should check if modal window close', () => {
    component.find(Modal).prop('closeModal')()

    expect(component.find(Modal).length).toBe(0)
  })
})
