# React is rhe frontent library

### don't hunt for the React Hooks 
it works in client side and server side 



To see the Differnt version of the react see the `unpack react`

[React Vesion](https://app.unpkg.com/react@18.3.1)

## Role of the babel

it converts the HTML Like component to React 

eg : 
```
<li> {props.name} - {props.price}</li>



MMMM
||||
Babel
||||
WWWW



React.createElement(
'li',
{},
`${props.name} - ${props.price}` 
)


```