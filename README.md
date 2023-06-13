# Step to reproduce

*Warning: These steps cause an infinite loop in the browser*

1. Run `yarn start` locally after cloning this repository and visit the URL indicated by the command, or visit the [Github Pages website](https://corymharper.github.io/#/ckeditor5-source-editing-bug/).

2. Open the browser console.

2. Enter any text into the displayed editor.

3. Switch to "source editing" mode using the toolbar.

4. Make any change to the text in the editor now that source editing is active.

5. The infinite loop may have already started, if it ahs you will see that displayed in the console, otherwise hit the submit button and it should start.
