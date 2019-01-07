# React Colors!

![](https://media.giphy.com/media/FVbsOFYqdARtS/giphy.gif)

## Color Picker

Create a `ColorPicker` component. This component will be how we mix our color. We will be using RGB (red, blue, green) values with range inputs and number inputs for each of the attributes.

We want to track the values of `red`, `green` and `blue` within our state. To start, set them each equal to 0.

In our render we want to return a containing `div` that will hold another `div` for a color swatch. This swatch is going to show the currently mixed color. To do so, we have to set the background color using the `red`, `green` and `blue` values we have in state. Create a `swatchStyle()` method that will return an object with the appropriate style to change the swatch color's `backgroundColor`. We will also need to give the swatch a height and a width so we can see it!

**Does it Work?**
> To test that your swatch is working, change the values of `red`, `green` and `blue` within your state. Your swatch color should reflect your changes. Remember to render your `ColorPicker` from your app!

We are going to need a way to change the values of each of our color attributes. To start, create a `updateRed( value )` method that takes the new value of the red attribute and sets the state to reflect the change. Create similar methods for both the `green` and `blue` attributes. 

**THINKING DRY**
> Is there a way we can create a function that will work for all three colors? _**HINT:** the method would also take the attribute (either red, green, or blue) as a parameter_

## Color Input

Create a `ColorInput` component. This component will be used 3 times within our `ColorPicker`: once for `red`, once for `green` and once for `blue`. 

This component should render the following:
  - a label for which color attribute the input corresponds (red, green or blue)
  - a `range` input with a min of 0 and a max of 255 that displays the current value of that attribute and updates the value of the attribute `onChange`
  - a `number` input with a min of 0 and a max of 255 that displays the current value of that attribute and updates the value of the attribute `onChange`

Think about what props should be sent from the `ColorPicker`. Where is the attribute's value coming from? How do we update that value?

Update your `ColorPicker` to render `ColorInputs` for each of the color attributes.

**Does it Work?**
> You should now be able to move each of the sliders to change your color! The number inputs should also reflect the color attributes' values.


## Bonus:

- Start your color picker with a random color!
- Style your color picker! make it look puuurrrddyy.
