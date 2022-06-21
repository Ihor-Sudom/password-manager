import React from 'react'
import MainPanel from '../MainPanel.tsx'
import Link from '../../../../ui/link'

const wrapperMainPanel = (props) => shallow(<MainPanel {...props} />)

describe('MainPanel', () => {

  it('Should render the MainPanel component with 1 link', () => {
    const component = wrapperMainPanel({
      userInfo: { firstName: 'John', lastName: 'Dou' },
      userIdQuery: 1,
    })

    expect(component.find(Link)).toHaveLength(1)
  })

  it('Should render the MainPanel component with 2 link', () => {
    const component = wrapperMainPanel({
      userInfo: { firstName: 'John', lastName: 'Dou' },
      userIdQuery: '',
    })

    expect(component.find(Link)).toHaveLength(2)
  })
})
