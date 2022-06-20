import React from 'react'
import ENDPOINTS from '../endpoints.ts'

describe('Check endpoints', () => {

  it('Endpoint has properties', () => {
    expect(ENDPOINTS).toHaveProperty('GET')
    expect(ENDPOINTS).toHaveProperty('POST')
    expect(ENDPOINTS).toHaveProperty('PUT')
    expect(ENDPOINTS).toHaveProperty('DELETE')
  })

  it('Check endpoint properties functions', () => {
    expect(ENDPOINTS.GET.account(10)).toEqual('/login-data/10')
    expect(ENDPOINTS.GET.passwordInfo(5)).toEqual(`/login-data/5/password-managerd`)
    expect(ENDPOINTS.POST.addPassword(1)).toEqual(`/login-data/1/password-managerd`)
    expect(ENDPOINTS.PUT.editPassword(5, 10)).toEqual(`/login-data/5/password-managerd/10`)
    expect(ENDPOINTS.DELETE.deletePasswordInfo(3, 12)).toEqual(`/login-data/3/password-managerd/12`)
  })
})
