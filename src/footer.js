
function initFooter() {
  let content = document.getElementById('content');
  content.innerHTML +=
  `
    <div id="footer">
      <h1>Spice Up Your Life!<h1>
      <br>
      <p>Built with love and alotta patience</p>
    </div>
  `;
  let navbarStyle = document.getElementById('footer');
  navbarStyle.setAttribute('style', 'padding: 20vh;' +
                              'height; 100%;' +
                              'background-attachment: fixed;' +
                              'background-position: center;' +
                              'background-repeat: no-repeat;' +
                              'background-size: cover;' +
                              'background-image: url(./imgs/footer.jpg);' +
                              'text-align: center;' +
                              'font-size: 20px;' +
                              'color: white;');
}

export { initFooter };
