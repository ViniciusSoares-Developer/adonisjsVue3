import { defineConfig, configure } from '@adonisjs/inertia'

export default defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'app_root',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    user: (ctx) => ctx.auth.user,
    errors: (ctx) => ctx.session.flashMessages.get('errors'),
  },
})
