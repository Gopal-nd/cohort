import { createFileRoute,useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/products/product/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams();
  return <div>Hello "/products/product/$id"!  = {id}</div>
}
