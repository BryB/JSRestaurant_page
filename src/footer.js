function initFooter() {
  let content = document.getElementById('footer');
  content.innerHTML +=
  `<h1>LIVE MAS!<h1>`;
  content.setAttribute('style', 'padding: 20vh;' +
                              'height; 100%;' +
                              'background-attachment: fixed;' +
                              'background-position: center;' +
                              'background-repeat: no-repeat;' +
                              'background-size: cover;' +
                              'background-image: url(./imgs/footer.jpg);' +
                              'text-align: center;' +
                              'font-size: 50px;' +
                              'color: white;');
}

export { initFooter };
