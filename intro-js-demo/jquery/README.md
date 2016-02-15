# Cats and Dogs

Everyone knows that Cats and better than Dogs.  Or wait... is that Dogs are better than Cats?

You job is to create a game to find out.  Dog and cat lovers will 'race' across the board to determine the dominance of their species.

### Release 1: Add JavaScript

We need some way for JavaScript to update the board state.  Create simple
JavaScript functions that can update a particular animal's position.  You give
the functions a animal position as input and they update the underlying HTML to
reflect the new position.

It could look something like:

```javascript
update_animal_position('animal1', 10);
```

Store this JavaScript in a separate file and use the JavaScript console to
debug it and pass in values manually.

### Release 2: Binding to Key Presses

Now we'll make the game interactive!  Bind to the [keyup][] event to detect
when a animal has "pressed" a key.  We don't bind to the [keydown][] or
[keypress][] events because those events fire when the keyboard repeats the
key, whereas the keyup event doesn't.

It'd be a boring game if you could just hold the key and go.  You want to bind
to the `document`, like so:

```javascript
$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
  });
});
```

### Release 3: Starting and Winning States

The last bit is to have starting and winning states, so we can restart the game and declare a winner when the game is over.  Add these features:
* starting
* playing
* winning
* restarting

## Resources

* [jQuery][]
* [normalize.css][]
* [Moxilla documentation for: keyup][keyup]
* [Moxilla documentation for: keydown][keydown]
* [Moxilla documentation for: keypress][keypress]


[jQuery]: http://learn.jquery.com/about-jquery/
[normalize.css]: http://necolas.github.com/normalize.css/
[keyup]: http://api.jquery.com/keyup/
[keydown]: http://api.jquery.com/keydown/
[keypress]: http://api.jquery.com/keypress/
