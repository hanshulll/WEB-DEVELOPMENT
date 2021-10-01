# CSS DISPLAY PROPERTY

## Has 4 different values

- block
- inline 
- inline-block
- none 
<hr>

### BLOCK-LEVEL ELEMENT

- A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). 



#### COMMON BLOCK ELEMENTS
- Paragraph `<p> </p>`
- Header `<h1> through <h6>`
- Division `<div>`
- List and List item `<ol>,<ul>,<li>`
- Form `<form> </form>`
- Footer `<footer> </footer>`
- Section `<section> </section>`

##### EXAMPLE :- 

h1 { <br>
  display: block; <br>
  background: red; <br>
} 
<hr>

### INLINE ELEMENT

- An inline element does not start on a new line and only takes up as much width as necessary.

#### COMMON INLILNE ELEMENTS
- Spans `<span> </span>`
- Images `<img>`
- Anchors `<a> </a>`

##### EXAMPLE :- 
img { <br>
   display: inline; <br>
} <br>

<hr>

### INLINE-BLOCK ELEMENT

- Compared to `display: inline`, the major difference is that `display: inline-block` allows to set a width and height on the element.
- Also, with `display: inline-block`, the top and bottom margins/paddings are respected, but with `display: inline` they are not.
- Compared to` display: block`, the major difference is that` display: inline-block` does not add a line-break after the element, so the element can sit next to other elements.

#### EXAMPLE :- 
div { <br>
  display: inline-block; <br>
  background: grey; <br>
} 
<hr>

### NONE ELEMENT 

- `display: none;` is commonly used with JavaScript to hide and show elements without deleting and recreating them. 
- The `<script>` element uses `display: none;` as default. 

#### EXAMPLE :- 

p { <br>
  display: none; <br>
  background: purple; <br>
}




