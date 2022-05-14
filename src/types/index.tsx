export interface IAccount {
  id: number | null
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt: string
}

export interface ISignupForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface IPasswordInfo {
  id: number | null,
  accountName: string,
  email: string,
  password: string,
}
