import React from 'react'
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

type IInputDefaultProps = JSX.IntrinsicElements['input']

export interface IInputProps extends IInputDefaultProps {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  label?: string
  register?: UseFormRegisterReturn
  errors?: FieldErrors
}
