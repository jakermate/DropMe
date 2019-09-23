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
- `data-drop-reset` - `true`, `false` - Determines if the object resets or stays permanently off the page.
- `data-reset-delay` - ex. `2000` - Delay time before the original element is reset in place. Expressed in ms.
- `data-drop-pop` - `none`, `slow`, `fast` - Will the element pop up prior to falling.
- `data-drop-random` - `true`, `false` - Will element have random spin direction, speed, and fall speed values each time it is clicked.

### Installation

TODO
- Wait until page is loaded and gather a list of all elements containing the class ‘drop-me’
- Use data-* classes to add options to the script
- Take nodelist or array and loop through setting event listeners for clicking
- Generate absolutely positioned container to append elements to while they fall, if reset is enabled, then return to document in space they were previously positioned (use a placeholder element with no dimension to hold it’s spot with a uniquely generated ID, saved in the object for the drop-me element.)
- Speed should build up over time (use an acceleration constant, which can be altered by data-* attribute)

