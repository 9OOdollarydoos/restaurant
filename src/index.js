import {renderHome} from './home-page.js'
import {renderContact} from './contact-page.js'
import {renderMenu} from './menu-page.js'

const clearContent = () => {
  let content = document.querySelector("#content");
  content.removeChild(content.lastChild);
}

const displayHome = () => {
  clearContent();
  renderHome();
}

const displayMenu = () => {
  clearContent();
  renderMenu();
}

const displayContact = () => {
  clearContent();
  renderContact();
}

const renderHeader = () => {
  let header = document.createElement('div');
  header.className = "header";
  let content = `
    <h1>Odin Coffee Shop</h1>
    <div class="nav">
      <button type="button" class="btn" id="home-btn">Home</button>
      <button type="button" class="btn" id="contact-btn">Contact</button>
      <button type="button" class="btn" id="menu-btn">Menu</button>
    </div>`
  header.innerHTML = content;
  document.querySelector("#content").appendChild(header);
  document.getElementById("home-btn").addEventListener("click", displayHome);
  document.getElementById("menu-btn").addEventListener("click", displayMenu);
  document.getElementById("contact-btn").addEventListener("click", displayContact);
}

renderHeader();
renderHome();