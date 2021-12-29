import {renderHome} from './home-page.js'

const renderHeader = () => {
  let header = document.createElement('div');
  header.className = "header";
  let content = `
    <h1>Odin Coffee Shop</h1>
    <div class="nav">
      <div class="btn">Home</div>
      <div class="btn">Contact</div>
      <div class="btn">Menu</div>
    </div>`
  header.innerHTML = content;
  document.querySelector("#content").appendChild(header);
}

renderHeader();
renderHome();