import React from 'react'
import ModalComponent from '../ModalAddAccount.tsx'
import Button from '../../../button'

const wrapperModalComponent = (props) => shallow(<ModalComponent {...props} />)
const props = {
  isOpen: true,
  userId: 2,
  closeModal: jest.fn(),
  getPasswordInfo: jest.fn(),
}

const component = wrapperModalComponent(props)

describe('ModalAddAccount', () => {
  it('Should render ModalAddAccount with props', () => {
    expect(component.length).toBe(1)
  })

  it('Should closeModal function called if click the cancel button', () => {
    const mockCloseModal = jest.fn()
    const wrapperModal = shallow(<ModalComponent closeModal={mockCloseModal} />)
    wrapperModal.find(Button).at(0).simulate('click')

    expect(mockCloseModal).toHaveBeenCalled()
  })
})
