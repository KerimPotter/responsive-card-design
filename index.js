const buttonContainer = document.querySelector(".buttonContainer");

const button = `<button class="button">
<a href="#">
  <div class="button1-1">Responsive Card Design</div>
  <hr>
  <div class="button1-2">This thing...</div>
</a>
</button>`;

for (let i = 0; i < 21; i++) {
  buttonContainer.innerHTML += button;
};