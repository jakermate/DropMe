## Drop Me v0.1
### Break your page apart

Javascript library for destroying your page.

__Links:__ [About](#about-drop-me) | [API](#api) | [Installation](#installation)

---
Drop Me easily lets you apply a level of interactivity to your web pages.

Here's what it does:

* blah blah blah
* blah blah blah


### About Drop Me

Drop me is an event-based library for building interactive web pages.




### API
- Add the `drop-me` class to any element you wish to drop
- `data-drop-spin` - `none`, `slow`, `medium`, `fast` - Element will rotate while falling.
- `data-drop-speed` - `slow`, `medium`, `fast` - Y-Dimension Speed
- `data-drop-reset` - `true`, `false`, `top` - Determines if the object resets or stays permanently off the page.
- `data-reset-delay` - ex. `2000` - Delay time before the original element is reset in place. Expressed in ms.
- `data-drop-pop` - `none`, `slow`, `fast` - Will the element pop up prior to falling.
- `data-drop-random` - `true`, `false` - Will element have random spin direction, speed, and fall speed values each time it is clicked.


### Installation




TODO
- Take nodelist or array and loop through setting event listeners for clicking
- Speed should build up over time (use an acceleration constant, which can be altered by data-* attribute)
- Reset option `top` should reset the element by droppiung clone from height set to be above window height.
