/**
a text displaying the current number.
a button that increment that number.
a button the decrease that number. 
state would be: the current number, initial value is 0, displayed upon first render.
a render function renders the HTML given the state.
event listeners are: one listener for the increase button, one listener for the decrease button, handling the mutation of the number, and apply the new state by calling render function again.
numbers can be negative.
 */

type State = {
  count: number;
};

let state: State = {
  count: 0,
};

const root = document.getElementById("app")!;

function setState(next: State) {
  state = { ...state, ...next };
  render();
}

function render() {
  root.innerHTML = `
    <button id="decrease-button">-</button>
    <span>${state.count}</span>
    <button id="increase-button">+</button>
  `;
  root
    .querySelector("#increase-button")!
    .addEventListener("click", () => setState({ count: state.count + 1 }));
  root
    .querySelector("#decrease-button")!
    .addEventListener("click", () => setState({ count: state.count - 1 }));
}

render();

/**
Problem with this version:

1. innerHTML nuke every time the render() is called. This is harmless in this practice, but harmful in most of others.
The whole HTML tree is demolished, including everything that was on the nodes, like all the event listeners, focus, input state, etc.  
The right way is to build once, wire once, and update the exact node.

2. setState should accept a Partial<State> to be safe.
 */
