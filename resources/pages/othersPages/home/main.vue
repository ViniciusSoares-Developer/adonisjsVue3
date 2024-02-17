<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
// import type { Account } from '@/types'
// import type { ITeste, IAccount } from '@/models'

interface IProps {
  flash?: {
    success: string
    error: string
  }
  errors?: {
    nome: []
    permissao: []
    email: []
    password: []
  }
  nome: string
}

const props = defineProps<IProps>()
console.log(props)

type formAccount = {
  fullName: string
  email: string
  emailConfirmation: string
  password: string
  passwordConfirmation: string
}

const form = useForm({
  fullName: props.nome,
  email: '123@hotmail.com',
  emailConfirmation: '123@hotmail.com',
  password: '123',
  passwordConfirmation: '123',
  date: null
})

// const token = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN')).split('=')[1]
// console.log(token)

</script>

<template>
  <form @submit.prevent="form.post('/register')" style="display: flex; flex-direction: column; width: 500px; gap: 10px;">
    <input v-model="form.fullName"/>
    <input v-model="form.email"/>
    <input v-model="form.emailConfirmation"/>
    <input v-model="form.password"/>
    <input v-model="form.passwordConfirmation"/>
    <input type="submit" value="Register">
  </form>

  <form @submit.prevent="form.post('/login')" style="display: flex; flex-direction: column; width: 500px; gap: 10px; margin-top: 1rem;">
    <input type="datetime-local" v-model="form.date">
    <input v-model="form.email"/>
    <input v-model="form.password"/>
    <input type="submit" value="Register">
  </form>
</template>
