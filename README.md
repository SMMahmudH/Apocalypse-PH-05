**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
</br>
*Answer:*
- getElementById returns a single element by its unique ID.
- getElementsByClassName returns a HTMLCollection of elements by class. 
- querySelector returns the first element matching a CSS selector. 
- querySelectorAll returns a static NodeList of all matching elements. 
</br>

**2. How do you create and insert a new element into the DOM?**
</br>
*Answer:*
</br>
To create the element, we use document.createElement(' -HTML TAG- '). 
To insert it into the DOM, we use parentNode.appendChild(newElement) in a specific location.
</br>
</br>

**3. What is Event Bubbling and how does it work?**
</br>
*Answer:*
</br>
Event bubbling is the order in which event handlers are called.
It's like reverse Tree, i.e. A child element propagates upward through its ancestors in the DOM.
</br>
</br>

**4. What is Event Delegation in JavaScript? Why is it useful?**
</br>
*Answer:*
</br>
Event delegation is a technique in JavaScript where a parent element handles events for its child elements, even if the children are added dynamically after the page loads. 
This works because events in JavaScript bubble up from the target element to its ancestors.
</br>
</br>

**5. What is the difference between preventDefault() and stopPropagation() methods?**
</br>
*Answer:*
</br>
preventDefault() cancels the browser's default action for the event. 
stopPropagation() is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.
</br>
