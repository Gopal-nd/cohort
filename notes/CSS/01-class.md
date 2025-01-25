# CSS Notes

#### basics
when u syle some thing in css and inspect you will see the user agent stylesheet which is defualt and that will overwrite by our styling

when ever you select a elemet in inspect it 
give priority and arrange the styling this way
1. elemet.style (or) inline style
2. id 
3. class
4. element
5. defualt (by useragent / browser)

it will always over write the low priority one when high priority what the different style for the same property

after all the styel you can see the box model of the element

- that all are found in : Inspect > Elements > Styles 

- in computed we can see all the final styling of the select component  and box model of th element

- next is Layout we can see the grid and flex

## TIP : to copy any elemnet css right click on elemnt and copy css


## Baisc units of the css
- px
- % (persent of the screen)
- rem  (root element html)
- em (size of parent element)
- vw view width
- vh view height

## ** Examples of Specificity**

| Selector                              | Specificity |
|---------------------------------------|-------------|
| `*`                                   | `(0,0,0,0)` |
| `div`                                 | `(0,0,0,1)` |
| `p::before`                           | `(0,0,0,2)` |
| `.class`                              | `(0,0,1,0)` |
| `[type="text"]`                       | `(0,0,1,0)` |
| `:hover`                              | `(0,0,1,0)` |
| `#id`                                 | `(0,1,0,0)` |
| `style="color: red;"`                 | `(1,0,0,0)` |
| `#id.class:hover`                     | `(0,1,2,0)` |
| `div#id.class[type="text"]:hover`     | `(0,1,3,1)` |

---
if the specifity is same it will take that last style
used

you can not select a class, id or somethin using :not()

and u can select the multile class id elemet using , tag,etc...

### psudo Elements

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pseudo-Class Examples</title>
  <style>

      :root{
         --main-color: red;
      }
    /* Example for :hover */
    button:hover {
      background-color: lightblue;
      cursor: pointer;
      color:var(--main-color);
    }

    /* Example for :active | works on clicking */
    button:active {
      transform: scale(0.98);
      background-color: darkblue;
      color: white;
    }

    /* Example for :focus | on the input typing*/
    input:focus {
      border: 2px solid green;
      outline: none;
    }

    /* Example for :focus-visible | used while navigating on tab button in browser */
    button:focus-visible {
      outline: 2px dashed red;
    }

    /* Example for :visited */
    a:visited {
      color: purple;
    }

    /* Example for :link */
    a:link {
      color: blue;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h1>Pseudo-Class Examples</h1>

  <!-- Hover and Active Example -->
  <button style="padding: 10px 20px; font-size: 16px;">Hover or Click Me</button>

  <!-- Focus Example -->
  <div style="margin: 20px 0;">
    <input type="text" placeholder="Focus on me" style="padding: 10px; font-size: 16px;">
  </div>

  <!-- Visited and Link Example -->
  <div>
    <a href="https://www.example.com" target="_blank">Unvisited Link</a>
    <br>
    <a href="https//google.com" target="_blank">Visited Link</a>
  </div>
</body>
</html>

```
