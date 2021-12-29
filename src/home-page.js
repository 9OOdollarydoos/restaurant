
const renderHome = () => {
  let home = document.createElement('div');
  home.className = "panel";
  let html = `
    <img class="background-img" src="../src/background.jpg">
    <h2>Home</h2>
    <p>A delicious restaurant for programmers</p>`
  home.innerHTML = html;
  document.querySelector("#content").appendChild(home);
}

export {renderHome};
