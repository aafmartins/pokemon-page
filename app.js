let count = 649;

function render() {
  let container = document.getElementById("pokemon");
  container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg" alt="pokemon images">`;
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.onclick = function decrement() {
  if (count > 1) {
    count -= 1;
    render();
  }
};

next.onclick = function increment() {
  if (count < 649) {
    count += 1;
    render();
  }
};

render();
