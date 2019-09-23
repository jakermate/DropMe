## Drop Me
### Break your page apart

Library focused on allowing a developer to integrate a mechanic via classname whereby the user can click on an element and have it fall off of the page.

API
- Add the `drop-me` class to any element you wish to drop
- `data-drop-spin` - `none`, `slow`, `medium`, `fast`
- `data-drop-speed` - `slow`, `medium`, `fast`
- `data-drop-reset` - `true`, `false`
- `data-drop-pop` - `none`, `slow`, `fast`



TODO
- Wait until page is loaded and gather a list of all elements containing the class ‘drop-me’
- Use data-* classes to add options to the script
- Take nodelist or array and loop through setting event listeners for clicking
- Generate absolutely positioned container to append elements to while they fall, if reset is enabled, then return to document in space they were previously positioned (use a placeholder element with no dimension to hold it’s spot with a uniquely generated ID, saved in the object for the drop-me element.)
- Speed should build up over time (use an acceleration constant, which can be altered by data-* attribute)


OPTIONS
- Will Reset, Boolean
- Spin, Boolean
- Time to reset, Number
- Speed, Number
