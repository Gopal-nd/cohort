import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/app/books')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/books"!</div>
}
