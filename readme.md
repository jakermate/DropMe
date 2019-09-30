## Drop Me v0.1
### Break your page apart

Javascript library for destroying your page.

__Links:__ [About](#about-drop-me) | [Usage](#Usage) | [Installation](#installation)

---
Drop Me easily lets you apply a level of interactivity to your web pages.

Here's what it does:

* Allows for the interactive destruction of your website.
* Retains the layout of your page without elements rearranging due to their css positioning.


### About Drop Me

Drop me is an event-based library for building interactive web pages.  Interaction with the library is based around the use of html element class and data-attributes.




### Usage
- Add the `drop-me` class to any element you wish to drop
- `data-drop-spin` - `none`, `slow`, `medium`, `fast` - Element will rotate while falling.
- `data-drop-speed` - `slow`, `medium`, `fast` - Y-Dimension Speed
- `data-drop-reset` - `true`, `false`, `top` - Determines if the object resets or stays permanently off the page.
- `data-reset-delay` - ex. `2000` - Delay time before the original element is reset in place. Expressed in ms.
- `data-drop-style` - `pop', 'drop' - Will the element pop up prior to falling, or drop straight down.
- `data-drop-random` - `true`, `false` - All values will be randomized.


### Installation
---
#### Browser Friendly
Download the minified version of the library and include in script tag at end of page body.


```html
    <script src="bundle.js">
    </body>
```



TODO
- Take nodelist or array and loop through setting event listeners for clicking
- Speed should build up over time (use an acceleration constant, which can be altered by data-* attribute)
- Reset option `top` should reset the element by droppiung clone from height set to be above window height.
