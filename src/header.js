
function initHeader () {
  let head = document.getElementById('header');
  head.innerHTML += `<img src="./imgs/logo.svg" style="width: 30%; height: 30%"/>`;
  head.setAttribute('style', 'padding: 25vh;' +
                        'height: 100%;' +
                        'background-attachment: fixed;' +
                        'background-position: center;' +
                        'background-repeat: no-repeat;' +
                        'background-size: cover;' +
                        'background-image: url(./imgs/header.jpg);' +
                        'text-align: center;' +
                        'font-size: 50px;' +
                        'color: white;');
};
export { initHeader };
