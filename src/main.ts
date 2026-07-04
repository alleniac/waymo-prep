type State = {
  count: number;
};

let state: State = {
  count: 0,
};

const root = document.getElementById("app")!;

function setState(next: Partial<State>) {
  state = { ...state, ...next };
  update();
}

function mount() {
  root.innerHTML = `
    <button id="decrease-button">-</button>
    <span id="count">${state.count}</span>
    <button id="increase-button">+</button>
  `;
  root
    .querySelector("#increase-button")!
    .addEventListener("click", () => setState({ count: state.count + 1 }));
  root
    .querySelector("#decrease-button")!
    .addEventListener("click", () => setState({ count: state.count - 1 }));
}

function update() {
  const countEl = document.getElementById("count")!;
  countEl.textContent = String(state.count);
}

mount();
