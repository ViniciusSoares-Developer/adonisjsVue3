<script lang="ts" setup>
// import { io } from "socket.io-client"
import { ref, defineProps } from "vue"
// import emitter from '@adonisjs/core/services/emitter'

const props = defineProps({
  data: {
    default: ''
  }
})
console.log(props)

const contacts = ref({
  total: 0,
  actualIndex: 0,
  contacts: []
})

// emitter.on('teste', (data) => {
//   console.log(data)
// })
// const socket = io()
// socket.on('teste', (data) => {
//   console.log(data)
// })

</script>

<template>
  {{ contacts.actualIndex }} - {{ contacts.total }}
</template>

