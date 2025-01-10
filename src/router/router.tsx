import { Router, RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree'

const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
  context: {
    // Add any context you need here
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function AppRouter() {
  return <RouterProvider router={router} />
}

export { router }