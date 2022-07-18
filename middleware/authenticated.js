export default function ({ store, route, redirect, next }) {
  // Todo: use nuxt for whitelisting
  const WHITELIST_PAGES = ['/', '/login', '/register']

  if (WHITELIST_PAGES.includes(route.fullPath)) {
    return next
  }

  if (!store.state.auth.loggedIn) {
    return redirect({ name: 'login' })
  }
}
