const renderMenu = () => {
  let menu = document.createElement('div');
  menu.className = "panel";
  let html = `
    <img class="background-img" src="../src/background.jpg">
    <h2>Menu</h2>
    <p>Take a look at our great menu</p>
    <ul>
      <li>Mains</li>
      <li>Deserts</li>
      <li>Drinks</li>
    </ul>`
    menu.innerHTML = html;
  document.querySelector("#content").appendChild(menu);
}

export {renderMenu};