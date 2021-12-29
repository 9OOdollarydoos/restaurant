const renderContact = () => {
  let contact = document.createElement('div');
  contact.className = "panel";
  let html = `
    <img class="background-img" src="../src/background.jpg">
    <h2>Contact</h2>
    <p>Contact us by creating a ticket...</p>`
    contact.innerHTML = html;
  document.querySelector("#content").appendChild(contact);
}

export {renderContact};