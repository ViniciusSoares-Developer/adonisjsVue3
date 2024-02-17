// import { TAccount } from './type';
export type TAccount = {
  user?: {
    fullName?: string
    email: string
    emailConfirmation?: string
    password: string
    passwordConfirmation?: string
  }
} & TProps

type TProps = {
  flash?: {
    success: string
    error: string
  }
  errors?: object
}
