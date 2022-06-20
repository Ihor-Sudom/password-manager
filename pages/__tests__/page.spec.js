import React from 'react'
import Home from '../index.tsx'
import DashboardComponent from '../../src/components/containers/dashboard/Dashboard.tsx'
import Login from '../login.tsx'
import LoginComponent from '../../src/components/containers/login/Login.tsx'
import Register from '../register.tsx'
import Signup from '../../src/components/containers/register/Signup.tsx'

describe('Should render Home component', () => {
  it('Should render DashboardComponent component', () => {
    const page = shallow(<Home />)
    expect(page.find(DashboardComponent).exists()).toEqual(true)
  })
})

describe('Should render Login component', () => {
  it('Should render LoginComponent component', () => {
    const page = shallow(<Login />)
    expect(page.find(LoginComponent).exists()).toEqual(true)
  })
})

describe('Should render Register component', () => {
  it('Should render Signup component', () => {
    const page = shallow(<Register />)
    expect(page.find(Signup).exists()).toEqual(true)
  })
})
