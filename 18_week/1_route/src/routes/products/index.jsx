import { createFileRoute , Link} from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
  <div>Hello "/products/"!</div>
  <Link to="/products/product/1">Products 1</Link>
  <Link to="/products/product/2">Products 2</Link>
  <Link to="/products/product/3">Products 3</Link>
  


  </>
}
