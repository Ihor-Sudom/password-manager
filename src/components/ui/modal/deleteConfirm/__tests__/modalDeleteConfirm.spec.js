import React from 'react'
import { ModalDeleteConfirm } from '../ModalDeleteConfirm.tsx'
import Button from '../../../button'
import axios from 'axios'

jest.mock('axios', () => ({
  create: jest.fn(),
  delete: jest.fn() 
}))

const wrapperModalDeleteConfirm = (props) => shallow(<ModalDeleteConfirm {...props} />)
const props = {
  isOpen: true,
  userId: 1,
  accountId: 1,
  closeModal: jest.fn(),
  getPasswordInfo: jest.fn(),
  setIsAccountInformation: jest.fn(),
}

const component = wrapperModalDeleteConfirm(props)

describe('ModalDeleteConfirm', () => {
  it('Should render ModalDeleteConfirm component with props', () => {
    expect(component.length).toBe(1)
  })

  it('Should closeModal function called if click cancel button', () => {
    component.find(Button).at(0).prop('onClick')()

    expect(props.closeModal).toHaveBeenCalled()
  })

  it('', async () => {
    const customError = { message: 'There is an error' }
    axios.delete.mockImplementationOnce(() => Promise.reject(new Error(customError.message)))

    component.find(Button).at(1).prop('onClick')()
    
    await expect(axios.delete).toHaveBeenCalledTimes(1);
  })
})
