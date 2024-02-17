/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/1', (ctx) => ctx.inertia.render<object>('testeJs/page1'))
router.get('/2', (ctx) => ctx.inertia.render<object>('testeJs/page2'))
