<script setup lang="ts">

defineProps({
  user: {
    type: Object,
    required: true
  }
})

async function TT () {
  await fetch('/bouncer', {
    method: 'POST',
    headers: {
      'X-XSRF-TOKEN': document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN')).split('=')[1]
    }
  }).then(rs => {
    console.log(rs)
    return rs.text()
  }).then(txt => console.log(txt)).catch(err => console.log('error', err))
}

</script>

<template>
  {{ user }}
  <button type="button" @click="TT">Teste</button>
</template>
