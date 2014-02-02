# LeaveIntent - javascript library
Show some convincing message to visitor who is leaving your site!

## Usage

First, load leave-intent-min.js:

```html
<script src="leave-intent.min.js" type="text/javascript"></script>
```
Now, bind document with LeaveIntent property and define beforeLeave function:

```html
<script type="text/javascript">
	document.leaveIntent({
	    height: 10,
	    beforeLeave: function (result) {
	        alert("Don't go! We have some surprice for you.");
	    }
	});
</script>
```

When user tries to leave window then `beforeLeave` function will be executed. You can define top portion to assume when user is about to move from window with `height` option.

+ This is not window unload event, so instead of confirmation box you can show anything convincing for stay.
+ This solution wont work in case of user is closing window with keyboard shortcuts.

Chirag (blikenoother -[at]- gmail [dot] com)
