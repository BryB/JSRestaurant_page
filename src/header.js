export { initHeader};

function initHeader () {
  let content = document.getElementById('content');

  content.innerHTML +=
    `<header class="header">
        <img src="./imgs/logo.png"/>
      </header>`;
  let style = document.getElementsByClassName('header');
  style[0].setAttribute('style', 'padding: 25vh;' +
                        'height: 100%;' +
                        'background-attachment: fixed;' +
                        'background-position: center;' +
                        'background-repeat: no-repeat;' +
                        'background-size: cover;' +
                        'background-image: url(./imgs/header.jpg);' +
                        'text-align: center' +
                        'font-size: 50px' +
                        'color: white');
}
