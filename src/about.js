function aboutPage() {
  let content = document.getElementById('content');

  content.innerHTML += `<h1 id="title">Taco Bell</h1>
                        <section id="info">
                          <div class="packages">
                            <img id="logo" src="./imgs/menu.png"/>
                            <h1 class="tagline">Open 24hrs a day!</h1>
                            <p>Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.</p>
                          </div>
                          <div class="packages">
                            <img id="logo" src="./imgs/quesadilla.png"/>
                            <h1 class="tagline">Open 24hrs a day!</h1>
                            <p>Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.</p>
                          </div>
                          <div class="packages">
                            <img id="logo" src="./imgs/dollar.png"/>
                            <h1 class="tagline">Open 24hrs a day!</h1>
                            <p>Duis aute irure dolor in reprehenderit
                             in voluptate velit esse cillum dolore
                             eu fugiat nulla pariatur.
                             Excepteur sint occaecat cupidatat
                             non proident</p>
                          </div>
                        </section>`;
  let title = document.getElementById('title');
  let infoStyle = document.getElementById('info');
  let packages = document.querySelectorAll('.packages');
  let logos = document.querySelectorAll('#logo');
  let taglines = document.querySelectorAll('.tagline');

  infoStyle.setAttribute('style', 'display: flex;' +
                                  'align-content: center;' +
                                  'justify-content: center;' +
                                  'font-size: 20px;');
  title.setAttribute('style', 'font-size: 100px;' +
                              'color: purple;' +
                              'text-align: center;');
  for(let i = 0; i < packages.length; ++i)
  {
    packages[i].setAttribute('style', 'margin: 0 5%;' +
                                      'text-align: center;' +
                                      'width: 20%;');
    logos[i].setAttribute('style', 'width: 45%;');
    taglines[i].setAttribute('style', 'font-size: 40px;' +
                                      'color: #e7425f;');
  }

}

export { aboutPage };
