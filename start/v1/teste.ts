import router from '@adonisjs/core/services/router'

export default function() {
  router.group(() => {
    router.get('/nome', () => 'Adonis')
  }).prefix('v1')
}