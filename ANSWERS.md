- [ ] Why would you use class component over function components (removing hooks from the question)?

I would use class components over functional components when I need to make use of states and lifecycle hooks.


- [ ] Name three lifecycle methods and their purposes.

1. render(): render() is one of the react lifecycle methods that is used to essentially tell react, when this method gets called it should return some piece of DOM.

2. componenDidMount(): The componentDidMount method is a part of the mounting phase in the React Lifecycle. This method gets called as soon as the render method is called the first time. This method is guaranteed to be called only once in the whole
lifecycle, immediately after a component is mounted.

3. componentDidUpdat(): This lifecycle method is invoked as soon as the updating happens. The most common use case for the 
componentDidUpdate() method is updating the DOM in response to prop or state changes.


- [ ] What is the purpose of a custom hook?

The purpose of custom Hooks is that it allows you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again because you are building the hook yourself.


- [ ] Why is it important to test our apps?

It is important to test our app for the following reasons:
Surfaces bugs faster.
Reduces the risk of regressions.
Allows us to trust the code.
Makes us think about the edge cases.
Acts as a safety net when making changes or refactoring.
Acts as documentation for the code.
Encourages us to write better code.