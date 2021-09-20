
// 'void' operator specifies an expression to be evaluated without returning a value.
function clickTest(element,classAnimation) {
  element.classList.remove(classAnimation);
  // Trigger a reflow in between removing and adding the class name to 'reset' the animation of CSS.
  void element.offsetWidth;
  element.classList.add(classAnimation);
}
