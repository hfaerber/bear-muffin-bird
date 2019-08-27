var addBearBtn = document.querySelector('.bear-btn');
var addMuffinBtn = document.querySelector('.muffin-btn');
var addBirdBtn = document.querySelector('.bird-btn');
var allItems = document.querySelector('.items');
var addButtons = document.querySelector('.add-buttons');

addButtons.addEventListener('click', addHandler);
allItems.addEventListener('click', removeHandler);

function addHandler(event) {
  if (event.target === addBearBtn) {
    addBear();
  }
  if (event.target === addMuffinBtn) {
    addMuffin();
  }
  if (event.target === addBirdBtn) {
    addBird();
  }
}

function removeHandler(event) {
    console.log(event);
  if (event.target.className === 'item') {
    event.target.remove();
  }
  if (event.target.className == 'item bear' ) {
    event.target.innerHTML += `<br><p>GRR!!!</p>`;
  }
}
// removes the item that was the target (just one those not all of that type)

function addBear() {
  allItems.innerHTML += `<p class="item bear">🐻</p>`;
}

function addMuffin() {
  allItems.innerHTML += `<p class="item">🧁</p>`;
}

function addBird() {
  allItems.innerHTML += `<p class="item">🐦</p>`;
}

// addBearBtn.addEventListener('click', addBear);
// addMuffinBtn.addEventListener('click', addMuffin);
// addBirdBtn.addEventListener('click', addBird);
