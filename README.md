# Questions & Answer

> ### Question 01: What is JSX, and why is it used?

`JSX` stands for JavaScript XML, it'a a syntax of using react like HTML but not HTML. We can say `JSX = JavaScript + HTML`. It give us write html code in javascript then it convert this html to javascript.

---

> ### Question 02: What is the difference between State and Props?

`Props:` It is a system of send data from parent component to child component. It's like a parameter of a function. A child component cannot change this. It's read only.

`State:` It can store inside a component and it can be change by use setState and useState. It's like like local function variable.

---

> ### Question 03: What is the useState hook, and how does it work?

`useState` is a hook function of react. a changed data can store here. It's return two thing. One is value and second is function, which function can update value.

---

> ### Question 04: How can you share state between components in React?

We can store a state in common parent component then we can send this to child component by props.

---

> ### Question 05: How is event handling done in React?

We have to write event name in camelCase like `onClick={handleClick}`. give direct reference not string when we give a function in this like `{handleClick}` .
