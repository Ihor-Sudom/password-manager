import React from 'react'
import ButtonComponent from '../button.tsx'

const wrapperButton = (props) => shallow(<ButtonComponent {...props} />)

const props = { children: 'button' }

const component = wrapperButton(props)

describe('Button component', () => {
  it('Should render Button with children property', () => {
    expect(component.text()).toEqual('button')
  })
})