## Plan

### Implementation Choices
- Build the game in a way that makes it fairly easy to embed
  onto any website, rather than designing a fullscreen game
  that cannot really be embedded at all.
- Make the JavaScript use preexisting HTML, instead of having
  to generate all the HTML every time the game is played.

### File Structure
- / (Start screen)
- /play (The game)
- /help (How to play)
- /test (Template/Prototype page)
- /img (Images)
  - deck/ ((Public Domain) Card deck images)
- /css (Stylesheets)
  - main.css (core CSS)
  - game.css (game related CSS)
- /js (JavaScript)

### HTML
- Header
- Navigation
- Footer
- Table for the card deck
- Template based on wireframe

### CSS
- IDs
  - main (Container)
  - nav (Navigation)
  - body (Main content)
  - foot (Footer)
- Game related classes
  - deck
  - card
  - face
    - Default to hidden

### JS
- Deck array
- Deck shuffling function
  - Array shuffling
  - Automatically run on page load
- Card flipping function
  - Activate using the "click" event handler on the card CSS class
  - Show face of the clicked card
- Left hand and right hand variables to hold current card pair
  2. Default to the left hand
  3. Use the right hand when left hand is full
  4. Compare card images in each hand
  5. Clear both hands after comparing
- Card pairs variable
  - Increases after finding a pair of cards
- Card pairing function
  1. Get card images as parameters
  2. Check if the images match
- Turn variable
- Player Score variables
  - Mudulus operator to determine player
- Loading boolean variable
  - Use for CSS animations
