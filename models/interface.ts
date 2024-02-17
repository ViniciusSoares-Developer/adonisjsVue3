export type ITeste = {
  flash: {
    type: {
      success: string
      error: string
    }
    // default: object
    required: false
  }
  errors: {
    type: {
      nome: []
      permissao: []
      email: []
      password: []
    }
    // default: object
    required: false
  }
}

export interface IAccount {
  fullName?: string
  email: string
  emailConfirmation?: string
  password: string
  passwordConfirmation?: string
}
