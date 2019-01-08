function initNavigation() {
  let content = document.getElementById('content');
  let hover = '.navigation:hover{background-color: #e7425f;' +
              'text-decoration: underline;}';

  content.innerHTML +=
  `
    <section id="navbar">
      <div class="navigation">
        <h1>About</h1>
      </div>
      <div class="navigation">
        <h1>Menu</h1>
      </div>
      <div class="navigation">
        <h1>Contact</h1>
      </div>
    </section>
  `;
  let navbarStyle = document.getElementById('navbar');
  navbarStyle.setAttribute('style', 'display: flex;' +
                              'justify-content: center;' +
                              'background-color: #722182;' +
                              'font-size: 15px;');
  let naviElement = document.querySelectorAll('.navigation');
  for(let i = 0; i < naviElement.length; ++i)
  {
    naviElement[i].setAttribute('style', 'width: 10%;' +
                                'cursor: pointer;' +
                                'color: white;');
  }

}
export { initNavigation };
