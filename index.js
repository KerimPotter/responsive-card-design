const container = document.querySelector(".container");

const card = `
  <div class="card">
    <div class="wrapper">
      <div>Responsive Card Design</div>
      <hr>
      <div>This thing...</div>
    </div>
  </div>
`;


for (let i = 0; i < 20; i++) {
  container.innerHTML += card;
};
