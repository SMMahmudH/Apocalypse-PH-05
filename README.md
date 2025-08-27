1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById returns the element with a specific ID.
getElementsByClassName returns the collection of elements with a particular class.
querySelector returns the first element of the document matched with the selector.
querySelectorAll returns all matched elements with the selector.
 

2. How do you create and insert a new element into the DOM?
createElement() is used to create a new element.


3. What is Event Bubbling and how does it work?
Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM.


4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique in JavaScript where a parent element handles events for its child elements, even if the children are added dynamically after the page loads. This works because events in JavaScript bubble up from the target element to its ancestors.


5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() is used to prevent the default action that belongs to the event, such as preventing a form from submitting. event. stopPropagation() is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.