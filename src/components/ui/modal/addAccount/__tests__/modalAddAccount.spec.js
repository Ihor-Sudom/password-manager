import React from 'react'
import ModalComponent from '../ModalAddAccount.tsx'
import Button from '../../../button'
import Input from '../../../input'

const wrapperModalComponent = (props) => shallow(<ModalComponent {...props} />)
const props = { 
  isOpen: true,
  userId: 2,
  closeModal: jest.fn(),
  getPasswordInfo: jest.fn()
 }

const component = wrapperModalComponent(props)

describe('render ModalComponent', () => {

  it('Should render ModalComponent with props', () => {
    expect(component.length).toBe(1)
  })

  /* it('Should close ModalComponent', () => {
    component.find(Button).first().prop('onClick')()
    
    expect(props.closeModal).toHaveBeenCalled()
  }) */

  it('', () => {
    component.find(Input).at(0).instance().value = 'git'
    expect(component.find(Input).get(0).value).toBe('git')
  })
})