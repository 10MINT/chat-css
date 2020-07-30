# chat-css
This project is an adaption of PURE CSS SPEECH BUBBLES by Nicolas Gallagher

It allows you to create dynamic chat bubbles like the one used in instant messengers in HTML files

## What's inside?
* base.css: The base layout. You can customize colors there
* bubble.css: A convienence wrapper for the styles
* dialog.js: An optional file that adds utilities like scroll to bottom and modal

## Styles
* triangle-right: A speech bubble with a right angled triangle (classic messenger look)
* triangle-isosceles: A speech bubble with a equilateral triangle (comic look)
* round: A speech bubble with a rounded edges (modern messenger look)
* one-sharp: A speech bubble with round edges and only the top outer one sharp
* triangle-comic: A traditional comic speech bubble

## Use
Include `base.css`, `bubble.css` and optional `dialog.js` in your HTML file

Add class `chat` to your root element. Then use classes `left` and `right` on any element with 
the `display: table` property to display speech bubbles

Use the `header` class to display a centered note

Additionally, the `caption` and `byline` classes can be used to add a header and footer to the 
speech bubble

The `bubble.css` can be modified to show different speech bubbles by either linking the file 
via `@import 'triangle-isosceles.css';` or by copying the contents of one of the styles

Take a look at the [dialog.html](dialog.html) for an example.